import cal from "./calculator.js";
import lodash from "lodash";
console.log(cal.a, cal.b, cal.plus(), cal.minus());

const arr = [1, 1, 1, 1, 4, 4, 3, 3, 6, 7, 1, 3];
const unique = lodash.uniqBy(arr);

console.log(unique);