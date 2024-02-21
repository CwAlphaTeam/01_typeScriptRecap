"use strict";
var AreaTypes;
(function (AreaTypes) {
    AreaTypes["BUILDING"] = "BUILDING";
    AreaTypes["FLOOR"] = "FLOOR";
    AreaTypes["ROOM"] = "ROOM";
})(AreaTypes || (AreaTypes = {}));
const bulb = {
    id: 1,
    name: 'Bulb 1',
    area: AreaTypes.ROOM,
    areaInfo: {
        areaID: "a",
        areaName: "asd",
        postalCode: 45
    }
};
if (bulb.area === AreaTypes.ROOM) {
    console.log('Device is in room');
}
else if (AreaTypes.FLOOR) {
    console.log('Device is in floor');
}
else {
    console.log('Device is in building');
}
console.log(bulb.area);
