(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2487ac06ae971ca47201":function(e,t,r){"use strict";var n=r("8af190b70a6bc55c6f1b"),o=r.n(n),a=r("6938d226fd372a75cbf9");r("8a2d1b95e05b6a321e74");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){s(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(e){return new H.map.Icon(function(e){return'<svg xmlns="http://www.w3.org/2000/svg" height="50" width="50"><circle cx="25" cy="25" r="10" stroke="black" stroke-width="1" fill="green" />'+'<text x="50%" y="50%" text-anchor="middle" stroke="white" stroke-width="1" dy="4px" font-size="12px">'.concat(e,"</text>")+"</svg>"}(e))},d={lat:49.988358,lng:36.232845};t.a=Object(n.memo)(Object(a.withStyles)(function(e){return{}})(function(e){var t=e.markers,r=e.setAddress,a=e.initialZoom,i=(e.getLocation,u(Object(n.useState)(a),2)),s=i[0],f=i[1],p=o.a.useRef(null);Object(n.useLayoutEffect)(function(){if(p.current){var e=new H.service.Platform({apikey:"zDJwqdRCTTDPoqxspdhKEcWYEJpnM9ctcVnC_G8lStE"}),r=e.createDefaultLayers({lg:"ru"}),n=new H.Map(p.current,r.vector.normal.map,{zoom:s,center:d,pixelRatio:window.devicePixelRatio||1});H.ui.UI.createDefault(n,r).removeControl("mapsettings"),document.addEventListener("resize",function(){return n.getViewPort().resize()});var o=new H.mapevents.MapEvents(n),a=new H.mapevents.Behavior(o);return t&&t.length&&function(e){for(var r=[],n=0;n<t.length;n+=1){var o=t[n].points||d;console.log(o);var a=new H.map.Marker(o,{icon:l(t[n].letter),volatility:!0,data:{locationType:t[n].locationType}});console.log(a),r.push(a)}var i=new H.map.Group({min:10});i.addObjects(r),e.addObject(i),e.getViewModel().setLookAtData({zoom:s,bounds:i.getBoundingBox()})}(n),n.addEventListener("dragstart",function(e){var t=e.target,r=e.currentPointer;if(t instanceof H.map.Marker){var o=n.geoToScreen(t.getGeometry());t.offset=new H.math.Point(r.viewportX-o.x,r.viewportY-o.y),a.disable()}},!1),n.addEventListener("dragend",function(t){var r=t.target;if(r instanceof H.map.Marker){var n=r.getData().locationType,o=r.getGeometry(),i=o.lat,c=o.lng;!function(e,t,r){var n=e.getGeocodingService(),o={prox:t,mode:"retrieveAddresses",maxresults:"1",jsonattributes:1,language:"ru"};n.reverseGeocode(o,v(r),g)}(e,"".concat(i,", ").concat(c),n),a.enable()}},!1),n.addEventListener("drag",function(e){var t=e.target,r=e.currentPointer;t instanceof H.map.Marker&&t.setGeometry(n.screenToGeo(r.viewportX-t.offset.x,r.viewportY-t.offset.y))},!1),n.addEventListener("mapviewchange",function(){var e=n.getZoom();f(e)}),function(){n.dispose()}}},[p,t]);var v=function(e){return function(t){var n=t.response.view[0].result[0].location,o=n.displayPosition,a=o.latitude,i=o.longitude,s=n.address;r(e)({lat:a,lon:i,address:c({},s,{house_number:s.houseNumber,postcode:s.postalCode,country_code:s.country,country:s.additionalData[0].value})})}};function g(e){console.warn(e)}return o.a.createElement("div",{ref:p,style:{width:"100%",height:"100%"}})}))}}]);