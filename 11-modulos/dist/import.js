import * as _ from "lodash";
let xwing = {
    name: 'x-wing',
    pilot: 'Luke Skywalker',
    speed: 5000,
    weapons: 4
};
console.log(_.camelCase(xwing.pilot));
console.log(_.kebabCase(xwing.pilot));
