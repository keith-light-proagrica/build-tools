// Import node modules
import RemoveFocusState from "remove-focus-state";
new RemoveFocusState();

// Import/require local modules/files
require('./test');
import Math from './math';
const math = new Math();

console.log(math.sumAll(50, 10)); // 60
console.log(math.subtractAll(50, 10)); // 40
console.log(math.multiplyAll(50, 10)); // 500
console.log(math.divideAll(50, 10)); // 5
console.log(math.findModulus(50, 15)); // 5

console.log('script.js working');
