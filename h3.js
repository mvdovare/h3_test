console.log('Hello World');
const h3 = require("h3-js");

const h3Index = h3.latLngToCell(37.3615593, -122.0553238, 7);
console.log(h3Index);

const hexCenterCoordinates = h3.cellToLatLng(h3Index);
console.log(hexCenterCoordinates);

const hexBoundary = h3.cellToBoundary(h3Index);
console.log(hexBoundary);
