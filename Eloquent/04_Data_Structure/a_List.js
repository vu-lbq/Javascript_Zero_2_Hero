/* Bard
function arrayToList(arr) {
  """
  Converts an array to a linked list structure.

  Args:
      arr: The input array.

  Returns:
      The head of the linked list.
  """
  if (arr.length === 0) return null;
  return { value: arr[0], rest: arrayToList(arr.slice(1)) };
}

function listToArray(list) {
  """
  Converts a linked list to an array.

  Args:
      list: The head of the linked list.

  Returns:
      The array containing the list elements.
  """
  const arr = [];
  while (list !== null) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}

function prepend(element, list) {
  """
  Creates a new list with the given element at the front.

  Args:
      element: The element to prepend.
      list: The existing list.

  Returns:
      The new list with the element prepended.
  """
  return { value: element, rest: list };
}

function nth(list, index) {
  """
  Retrieves the element at the given index in the list (iterative version).

  Args:
      list: The head of the list.
      index: The index of the element to retrieve.

  Returns:
      The element at the given index, or undefined if not found.
  """
  let current = list;
  let count = 0;
  while (current !== null) {
    if (count === index) return current.value;
    current = current.rest;
    count++;
  }
  return undefined;
}

function nthRecursive(list, index) {
  """
  Retrieves the element at the given index in the list (recursive version).

  Args:
      list: The head of the list.
      index: The index of the element to retrieve.

  Returns:
      The element at the given index, or undefined if not found.
  """
  if (list === null) return undefined;
  if (index === 0) return list.value;
  return nthRecursive(list.rest, index - 1);
}
*/

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  
  function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
  
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20