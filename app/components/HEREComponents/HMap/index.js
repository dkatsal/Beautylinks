/**
 *
 * HMap
 *
 */

import React, { memo, useLayoutEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';

// Create an icon, an object holding the latitude and longitude, and a marker:
const circleSvg = letter =>
  '<svg xmlns="http://www.w3.org/2000/svg" height="50" width="50">' +
  '<circle cx="25" cy="25" r="10" stroke="black" stroke-width="1" fill="green" />' +
  `<text x="50%" y="50%" text-anchor="middle" stroke="white" stroke-width="1" dy="4px" font-size="12px">${letter}</text>` +
  '</svg>';
const icon = letter => new H.map.Icon(circleSvg(letter));

const kharkovCoordinates = { lat: 49.988358, lng: 36.232845 };
function HMap({ markers, setAddress, initialZoom, getLocation }) {
  const [zoom, setZoom] = useState(initialZoom);
  // Create a reference to the HTML element we want to put the map on
  const mapRef = React.useRef(null);

  useLayoutEffect(() => {
    // `mapRef.current` will be `undefined` when this hook first runs; edgecase that
    if (!mapRef.current) return;
    const platform = new H.service.Platform({
      apikey: 'zDJwqdRCTTDPoqxspdhKEcWYEJpnM9ctcVnC_G8lStE',
    });
    const defaultLayers = platform.createDefaultLayers({
      lg: 'ru',
    });
    // defaultLayers.vector - 3d buildings
    // defaultLayers.raster - 2d buildings
    const map = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      zoom,
      center: kharkovCoordinates,
      pixelRatio: window.devicePixelRatio || 1,
    });

    // Create the default UI:
    const ui = H.ui.UI.createDefault(map, defaultLayers);
    // Remove not needed settings control
    ui.removeControl('mapsettings');

    // add a resize listener to make sure that the map occupies the whole container
    document.addEventListener('resize', () => map.getViewPort().resize());

    // Enable the event system on the map instance:
    const mapEvents = new H.mapevents.MapEvents(map);
    const behavior = new H.mapevents.Behavior(mapEvents);

    // Create a markers:
    if (markers && markers.length) {
      addDraggableMarkerAndSetViewBounds(map);
    }

    // disable the default draggability of the underlying map
    // and calculate the offset between mouse and target's position
    // when starting to drag a marker object:
    map.addEventListener(
      'dragstart',
      function(ev) {
        const { target } = ev;
        const pointer = ev.currentPointer;
        if (target instanceof H.map.Marker) {
          const targetPosition = map.geoToScreen(target.getGeometry());
          target.offset = new H.math.Point(pointer.viewportX - targetPosition.x, pointer.viewportY - targetPosition.y);
          behavior.disable();
        }
      },
      false,
    );

    // re-enable the default draggability of the underlying map
    // when dragging has completed
    map.addEventListener(
      'dragend',
      function(ev) {
        const { target } = ev;
        if (target instanceof H.map.Marker) {
          const { locationType } = target.getData();
          const { lat, lng } = target.getGeometry();
          reverseGeocode(platform, `${lat}, ${lng}`, locationType);
          behavior.enable();
        }
      },
      false,
    );

    // Listen to the drag event and move the position of the marker
    // as necessary
    map.addEventListener(
      'drag',
      function(ev) {
        const { target } = ev;
        const pointer = ev.currentPointer;
        if (target instanceof H.map.Marker) {
          target.setGeometry(map.screenToGeo(pointer.viewportX - target.offset.x, pointer.viewportY - target.offset.y));
        }
      },
      false,
    );

    map.addEventListener('mapviewchange', function() {
      const mapZoom = map.getZoom();

      // This function is called more than 20 times on a double-click on the map!
      setZoom(mapZoom);
    });

    // This will act as a cleanup to run once this hook runs again.
    // This includes when the component unmounts
    // eslint-disable-next-line consistent-return
    return () => {
      map.dispose();
    };
  }, [mapRef, markers]); // This will run this hook every time this ref is updated

  function addDraggableMarkerAndSetViewBounds(map) {
    const hMarkers = [];
    for (let i = 0; i < markers.length; i += 1) {
      const coordinates = markers[i].points || kharkovCoordinates;
      console.log(coordinates)
      const marker = new H.map.Marker(coordinates, {
        icon: icon(markers[i].letter),
        // mark the object as volatile for the smooth dragging
        volatility: true,
        data: {
          locationType: markers[i].locationType, // locationType property to rewrite address of draggable marker
        },
      });
      console.log(marker)
      // Ensure that the marker can receive drag events
      // marker.draggable = true;
      hMarkers.push(marker);
    }

    // add markers to the group
    const group = new H.map.Group({
      min: 10,
    });
    group.addObjects(hMarkers);
    map.addObject(group);

    // get geo bounding box for the group and set it to the map
    map.getViewModel().setLookAtData({
      zoom,
      bounds: group.getBoundingBox(),
    });
  }

  /**
   * Calculates and displays the address details of the location found at
   * a specified location.
   *
   * A full list of available request parameters can be found in the Geocoder API documentation.
   * see: http://developer.here.com/rest-apis/documentation/geocoder/topics/resource-reverse-geocode.html
   *
   * @param   {H.service.Platform} platform    A stub class to access HERE services
   * @param prox  {"latitude, longitude"} string
   * @param locationType  {locationType} salon or mobile
   */
  function reverseGeocode(platform, prox, locationType) {
    const geocoder = platform.getGeocodingService();
    const reverseGeocodingParameters = {
      prox,
      mode: 'retrieveAddresses',
      maxresults: '1',
      jsonattributes: 1,
      language: 'ru',
    };

    geocoder.reverseGeocode(reverseGeocodingParameters, onSuccess(locationType), onError);
  }

  /**
   * This function will be called once the Geocoder REST API provides a response
   * @param  {Object} result          A JSONP object representing the  location(s) found.
   *
   * see: http://developer.here.com/rest-apis/documentation/geocoder/topics/resource-type-response-geocode.html
   */
  const onSuccess = type => result => {
    const { location } = result.response.view[0].result[0];
    /*
     * The styling of the geocoding response on the map is entirely under the developer's control.
     * A representitive styling can be found the full JS + HTML code of this example
     * in the functions below:
     */
    const {
      displayPosition: { latitude: lat, longitude: lon },
      address,
    } = location;
    setAddress(type)({
      lat,
      lon,
      address: {
        ...address,
        house_number: address.houseNumber,
        postcode: address.postalCode,
        country_code: address.country,
        country: address.additionalData[0].value,
      },
    });
  };

  /**
   * This function will be called if a communication error occurs during the JSON-P request
   * @param  {Object} error  The error message received.
   */
  function onError(error) {
    console.warn(error);
  }

  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}

HMap.propTypes = {
  markers: PropTypes.array,
  setAddress: PropTypes.func,
  initialZoom: PropTypes.string,
};

export default memo(withStyles(styles)(HMap));
