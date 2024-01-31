function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
  }
  
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]
/*
function reverseArray(arr) {
  """
  This function takes an array as input and returns a new array with the elements in the reverse order.

  Args:
      arr: The input array.

  Returns:
      A new array with the elements in the reverse order.
  """
  reversed_arr = []
  for i in range(len(arr) - 1, -1, -1):
    reversed_arr.append(arr[i])
  return reversed_arr

function reverseArrayInPlace(arr) {
  """
  This function modifies the original array in-place by reversing the order of its elements.

  Args:
      arr: The input array.
  """
  left = 0
  right = len(arr) - 1
  while left < right:
    arr[left], arr[right] = arr[right], arr[left]
    left += 1
    right -= 1
*/