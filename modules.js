// console.log(arguments);
// console.log(require('module').wrapper);
/////////MODULE.EXPORT/////////
const C = require('./test-module-1');
calc1 = new C();
console.log(calc1.add(2, 5));
////////////EXPORTS////////////
const { add, multiply, divide } = require('./test-module-2');
console.log(multiply(2, 5));
////////////CACHEING////////////
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
