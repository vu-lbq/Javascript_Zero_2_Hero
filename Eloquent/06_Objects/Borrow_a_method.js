let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true

/* Bard
// 1. Using Object.prototype.hasOwnProperty.call():
const obj = { hasOwnProperty: () => true }; // Object defines its own hasOwnProperty

function hasOwnProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

console.log(hasOwnProp(obj, 'hasOwnProperty')); // Output: true (checks on prototype)
console.log(hasOwnProp(obj, 'otherProp'));        // Output: false (checks on object)

//2. Using Symbol:
const HAS_OWN_PROP_SYMBOL = Symbol('hasOwnProperty');

function hasOwnProp(obj, prop) {
  return obj[HAS_OWN_PROP_SYMBOL] || Object.prototype.hasOwnProperty.call(obj, prop);
}

obj[HAS_OWN_PROP_SYMBOL] = true; // Store built-in hasOwnProperty internally

console.log(hasOwnProp(obj, 'hasOwnProperty')); // Output: true (uses symbol)
console.log(hasOwnProp(obj, 'otherProp'));        // Output: false (checks on object)

//3. Using a temporary variable:
function hasOwnProp(obj, prop) {
  const originalHasOwnProperty = obj.hasOwnProperty;
  delete obj.hasOwnProperty;
  const hasOwn = Object.prototype.hasOwnProperty.call(obj, prop);
  obj.hasOwnProperty = originalHasOwnProperty;
  return hasOwn;
}

obj.hasOwnProperty = () => true; // Object defines its own hasOwnProperty

console.log(hasOwnProp(obj, 'hasOwnProperty')); // Output: true (checks on prototype)
console.log(hasOwnProp(obj, 'otherProp'));        // Output: false (checks on object)
*/
