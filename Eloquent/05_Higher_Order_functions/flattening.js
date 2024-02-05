/* Bard
function flatten(arrayOfArrays) {
  return arrayOfArrays.reduce((flatArray, currentArray) => flatArray.concat(currentArray), []);
}
*/

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// → [1, 2, 3, 4, 5, 6]