(window.webpackJsonp=window.webpackJsonp||[]).push([[61,85],{"3c35137ad867e4ea6a07":function(e,t,n){"use strict";n.r(t);var o=n("4633b5891e83a9df58b7"),a=n.n(o),r=n("f8a33b307d5498ae9f5a"),i=n.n(r),s=n("99c5d4cdf07f5b40caa6"),d=n.n(s),c=n("3cfaddbc49b3b4520d9c"),l=n.n(c),u=n("216ee9ae289723f588c5"),p=n.n(u),f=n("a1cf5d6fa4ed65a6ddd5"),b=n.n(f),h=n("8af190b70a6bc55c6f1b"),m=n.n(h),y=n("6938d226fd372a75cbf9"),v=(n("8a2d1b95e05b6a321e74"),n("aa0d04003b4a9cbb2522")),g=n.n(v);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(t){x(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L,j=n("2487ac06ae971ca47201"),C=n("4fa102d0fec510931a08");function A(e,t,n,o){L||(L="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),1===r)t.children=o;else if(r>1){for(var i=new Array(r),s=0;s<r;s++)i[s]=arguments[s+3];t.children=i}if(t&&a)for(var d in a)void 0===t[d]&&(t[d]=a[d]);else t||(t=a||{});return{$$typeof:L,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach(function(t){_(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],o=!0,a=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){a=!0,r=e}finally{try{o||null==s.return||s.return()}finally{if(a)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var D={salon:"C",mobile:"B"},R={salon:"\u0421\u0430\u043b\u043e\u043d",mobile:"\u041d\u0430 \u0432\u044b\u0435\u0437\u0434\u0435"};var E=Object(y.withStyles)(function(e){return{header:{borderBottom:"1px solid #00c7c7"},title:O({margin:"0 0 32px"},e.customerContent.title),desc:O({},e.customerContent.desc),container:{padding:"0 0 20px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"flex-start"},mapImg:{height:700,width:"100%",overflow:"hidden"},editIcon:{width:18,height:18,marginRight:8,transform:"translateY(7px)",display:"inline-block",verticalAlign:"middle",background:'url("'.concat(g.a,'") 0 no-repeat')},switchContainer:{margin:"30px 0",display:"flex",alignItems:"center",justifyContent:"flex-start",maxWidth:365},switchTitle:O({},e.switchContent.switchTitle,{width:100}),switchBox:O({},e.switchContent.switchBox),btnContainer:{marginBottom:40},dscrBtn:O({},e.linkActions.linkBtn(e.transitions.easing.easeOut,e.palette.BLColors.main)),inputBox:{width:"100%",maxWidth:710},inputSearch:{position:"relative","& > div > div":{background:"#f5f5f5"}}}})(function(e){var t=e.classes,n=e.data,o=e.putLocationTypes,r=k(Object(h.useState)(n),2),s=r[0],c=r[1];Object(h.useEffect)(function(){b()(n)?c({mobile:{disabled:!0,distance_to_travel:6,address:{}},salon:{disabled:!0,name:"",address:{}}}):c(n)},[n]);var u=function(e){return function(t){c(function(n){var o={};if(t){var a=t.lat,r=t.lon,i=t.address,s=i.street,d=i.house_number,c=i.city,l=i.postcode,u=s;d&&(u+=", ".concat(d)),o={city:c,postcode:l,address:u,country_id:"UA",country_name:"Ukraine",location:{lat:a,lng:r}}}return P({},n,_({},e,P({},n[e],{address:o})))})}},f=[],y=[];l()(R,function(e,o){var a=s[o];if(!a)return!1;a&&!a.disabled&&d()(a.address)&&f.push({letter:D[o],locationType:o,points:a.address.location}),console.log(f);var r=a.address&&a.address.address||"";a.address&&a.address.city&&(r.length&&(r+=", "),r+=a.address.city),a.address&&a.address.postcode&&(r.length&&(r+=", "),r+=a.address.postcode),a.address&&a.address.country_name&&(r.length&&(r+=", "),r+=a.address.country_name);var i,l=a.address?P({},a.address.location,{addr:r}):{lat:0,lng:0,addr:r};y.push(A("div",{},"type_".concat(o),A("div",{className:t.switchContainer},void 0,A("span",{className:t.switchTitle},void 0,e),A("label",{},void 0,A("input",{className:t.switchInput,type:"checkbox",hidden:!0,checked:!!a&&!a.disabled,onChange:(i=o,function(e){var t=e.target.checked;c(function(e){var o=p()(n[i]);return P({},e,_({},i,P({},o,{disabled:!t})))})})}),A("div",{className:t.switchBox}))),a&&!a.disabled?A("div",{className:t.container},void 0,A("div",{className:t.inputBox},void 0,A("div",{className:t.inputSearch},void 0,A(C.default,{handleSelect:u(o),defaultData:l,classesRoot:t.root})))):null))});var v,g=function(e){var t=s[e].address;return!b()(t)&&(!t.city||!t.postcode||!t.address)};return m.a.createElement(m.a.Fragment,null,A("div",{className:t.header},void 0,A("h3",{className:t.title},void 0,"\u041b\u043e\u043a\u0430\u0446\u0438\u0438"),A("p",{className:t.desc},void 0,"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435.")),y,A("div",{className:t.btnContainer},void 0,A("button",{type:"submit",className:t.dscrBtn,onClick:function(){console.log("Save");var e=p()(s);b()(n)&&console.log("no data >> post location"),(i()(e.salon,n.salon)||b()(e.salon.address))&&(e=a()(e,["salon"])),(i()(e.mobile,n.mobile)||b()(e.mobile.address))&&(e=a()(e,["mobile"])),o(e)},disabled:(v=!1,i()(s,n)&&(v=!0),i()(s.salon,n.salon)||(v=g("salon")),i()(s.mobile,n.mobile)||(v=g("mobile")),v)},void 0,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),A("div",{className:t.mapImg},void 0,A(j.a,{markers:f,setAddress:u,initialZoom:"16"})))});t.default=Object(h.memo)(E)},"4fa102d0fec510931a08":function(e,t,n){"use strict";n.r(t);var o=n("331f86f8774175b2781f"),a=n.n(o),r=n("8af190b70a6bc55c6f1b"),i=n.n(r),s=n("6938d226fd372a75cbf9"),d=(n("8a2d1b95e05b6a321e74"),n("3dfd612761b1dd8d2fc3")),c=n.n(d),l=n("c7fd554010f79f6c0ef8"),u=n.n(l);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=h(t).call(this,e))||"object"!==p(r)&&"function"!==typeof r?m(o):r).state={options:[],defaultData:e.defaultData||null},n.autoDetectLocation(),n.handleChange=a()(n.searchLocationAlt.bind(m(n)),400),n}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,i.a.Component),n=t,(o=[{key:"searchLocationAlt",value:function(e){var t=this;if(!(e.length<3)){var n=new XMLHttpRequest;n.addEventListener("load",function(){var e=JSON.parse(n.responseText);if(e&&e.Response&&e.Response.View&&e.Response.View[0]&&e.Response.View[0].Result){var o=e.Response.View[0].Result.map(function(e){return{display_name:e.Location.Address.Label,lat:e.Location.DisplayPosition.Latitude,lon:e.Location.DisplayPosition.Longitude,address:{street:e.Location.Address.Street,house_number:e.Location.Address.HouseNumber?e.Location.Address.HouseNumber:"",country:e.Location.Address.AdditionalData[0]?e.Location.Address.AdditionalData[0].value:"",country_code:e.Location.Address.Country,city:e.Location.Address.City,postcode:e.Location.Address.PostalCode}}});t.setState({options:o})}}),n.open("GET","https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=".concat("VwDOELLAKPxhTm8gkE0W9SBVX3xWmjStubWYKOlUiCk","&searchtext=").concat(e,"&country=UKR&language=ru")),n.send()}}},{key:"autoDetectLocation",value:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){if(t.coords.latitude&&t.coords.longitude){var n=new XMLHttpRequest;n.addEventListener("load",function(){var t=JSON.parse(n.responseText);if(t&&t.Response&&t.Response.View&&t.Response.View[0]&&t.Response.View[0].Result){var o=t.Response.View[0].Result.map(function(e){return{display_name:e.Location.Address.Label,lat:e.Location.DisplayPosition.Latitude,lon:e.Location.DisplayPosition.Longitude,address:{street:e.Location.Address.Street,house_number:e.Location.Address.HouseNumber?e.Location.Address.HouseNumber:"",country:e.Location.Address.AdditionalData[0]?e.Location.Address.AdditionalData[0].value:"",country_code:e.Location.Address.Country,city:e.Location.Address.City,postcode:e.Location.Address.PostalCode}}});e.setState({options:o,defaultOption:o[0]},function(){console.log(e.state)})}}),n.open("GET","https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=".concat(t.coords.latitude,",").concat(t.coords.longitude,",250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=").concat("VwDOELLAKPxhTm8gkE0W9SBVX3xWmjStubWYKOlUiCk")),n.send()}}):console.error("Geolocation is not supported by this browser!")}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,o=t.handleSelect,a=t.classesRoot,r=t.label,s=t.inputClassName,d=t.valueData,l=this.state,p=l.options,b=l.defaultData,h=d?{value:{display_name:d.addr,lat:d.lat,lon:d.lng}}:{};return i.a.createElement(c.a,f({ref:this.autocompleteField,filterOptions:function(e){return e},options:p,autoComplete:!0,includeInputInList:!0,getOptionLabel:function(e){return e.display_name},onChange:function(e,t){return o(t)},defaultValue:b?{display_name:b.addr,lat:b.lat,lon:b.lon}:null},h,{renderInput:function(t){return i.a.createElement(u.a,f({},t,{className:s,classes:{root:a||n.addressInput},label:r,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441",fullWidth:!0,autoComplete:"false",onChange:function(t){e.handleChange(t.target.value)}}))}}))}}])&&b(n.prototype,o),r&&b(n,r),t}(),g=Object(s.withStyles)(function(){return{inputBox:{position:"relative",marginRight:32,width:300},input:{padding:"0 85px 0 25px",width:"100%",color:"#4d4d4d",border:"none",fontSize:16,"@media (max-width:767px)":{height:60},"@media (min-width:768px)":{padding:"0 40px 0 20px",height:58},"@media (min-width:1024px) and (max-width:1439px)":{height:50,padding:"0 25px 0 10px"},"@media (min-width:1440px)":{height:50,padding:"0 85px 0 25px",borderRadius:5}},addressInput:{height:50,backgroundColor:"#fff","@media (min-width:1440px)":{borderRadius:10},"& input":{width:250,height:30,"@media (max-width:767px)":{padding:"0!important"}},"& > div":{"@media (max-width:1439px)":{padding:"5px 10px 4px"},"@media (min-width:1440px)":{padding:"5px 20px 10px"},"&:before":{display:"none"},"&:after":{display:"none"},"& button:last-child":{display:"none"}}}}})(v);t.default=Object(r.memo)(g)},aa0d04003b4a9cbb2522:function(e,t){e.exports="data:image/svg+xml,%3Csvg width='19' height='18' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C17.8027 3.94749 17.8762 3.8376 17.9264 3.71662C17.9766 3.59565 18.0024 3.46597 18.0024 3.335C18.0024 3.20403 17.9766 3.07435 17.9264 2.95338C17.8762 2.8324 17.8027 2.72251 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19Z' fill='%234C4C4C'/%3E %3C/svg%3E"}}]);