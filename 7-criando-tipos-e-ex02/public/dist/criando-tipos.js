var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var planets = [];
function savePlanet(name, coordinate, situation) {
    var satellites = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        satellites[_i - 3] = arguments[_i];
    }
    var planet = {
        name: name,
        coordinate: coordinate,
        situation: situation,
        satellites: __spreadArray([], satellites, true)
    };
    return planet;
}
