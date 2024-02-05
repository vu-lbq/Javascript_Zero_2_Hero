function every(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
  }
  
  function every2(array, predicate) {
    return !array.some(element => !predicate(element));
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true

/* Bard
function everyLoop(arr, predicate) {
  for (const element of arr) {
    if (!predicate(element)) {
      return false; // Stop if any element fails the test
    }
  }
  return true; // All elements passed the test
}

function everySome(arr, predicate) {
  return !arr.some(element => !predicate(element)); // Equivalent to every element passing
}
*/