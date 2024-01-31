function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }
  
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true

/* Bard
  function deepEqual(a, b) {
  """
  Compares two values for deep equality.

  Args:
      a: The first value.
      b: The second value.

  Returns:
      True if the values are deeply equal, False otherwise.
  """
  if (a === b) return true; // Identical values are always equal

  const typeA = typeof a;
  const typeB = typeof b;

  // Handle the special case of null
  if (a === null || b === null) return a === b;

  // Different types (excluding null) are never equal
  if (typeA !== typeB) return false;

  // Compare objects and arrays recursively
  if (typeA === "object" || typeA === "array") {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    // Different number of keys means different objects
    if (keysA.length !== keysB.length) return false;

    // Check individual keys and values
    for (const key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true; // All keys and values match
  }

  // Compare other primitive types directly
  return a === b;
}
*/
