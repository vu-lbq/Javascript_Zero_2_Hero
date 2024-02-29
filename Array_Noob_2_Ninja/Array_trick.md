#### Copying/Cloning an Array - slice()
let foo = ["fee", "fi", "fo", "fum"];
let fooCopy = foo.slice();

#### Checking if an Object Is an Array
Array.isArray(numbers)
numbers.constructor === Array

#### Deleting an Array Item - use indexOf and splice
splice(index, number, itemadd01, itemadd02)
remove number elements before index and insert itemadd at index.

##### delete is just remove value, but array item still there and has "empty" value

#### Emptying an array - set length = 0
array.length = 0;

#### Making Your Array Items Unique - use Set
let names = ["Peter", "Joe", "Cleveland", "Quagmire", "Joe"];
let uniqueNames = [...new Set(names)];

#### Sorting items - allows to specify exactly how to sort.
array.sort(comparedValue)

#### Shuffling / Randomly Rearranging
Array.prototype.shuffle = function () {
let input = this;
for (let i = input.length - 1; i >= 0; i--) {   
&nbsp;&nbsp;&nbsp;&nbsp;let randomIndex = Math.floor(Math.random() * (i + 1));
&nbsp;&nbsp;&nbsp;&nbsp;let itemAtIndex = input[randomIndex];
&nbsp;&nbsp;&nbsp;&nbsp;input[randomIndex] = input[i];
&nbsp;&nbsp;&nbsp;&nbsp;input[i] = itemAtIndex;
}
return input;
}

#### Picking a Random Item
let myArray = ["Unos", "Dos", "Tres", "Catorce"];
let value = myArray[Math.floor(Math.random() * myArray.length)];

#### Merging array
![alt text](./Images/image-8.png)

#### Swapping Items
function swap(input, index_A, index_B) {
&nbsp;&nbsp;&nbsp;&nbsp;let temp = input[index_A];
&nbsp;&nbsp;&nbsp;&nbsp;input[index_A] = input[index_B];
&nbsp;&nbsp;&nbsp;&nbsp;input[index_B] = temp;
}

#### Turn array into object
let airportCodes = ["SFO", "LAX", "SEA", "NYC", "ORD", "ATL"]; 
let airportCodesObject = { ...airportCodes };

#### Reversing our Array
let numbers = [1, 2, 3, 4, 5, 6];
numbers.reverse() // numbers will be reversed

let reversed = [...numbers].reverse(); this way, number will not be reversed.

#### Checking if All Array Elements Pass a Test - every
function isEven(currentItem) {
if (currentItem % 2 === 0) {
return true;}
}

console.log(someNumbers.every(isEven)); // false

#### Checking if Some Array Elements Pass a Test - some
let highScores = [46, 191, 38, 10, 156];
function isReallyHighScore(currentItem) {
if (currentItem > 100) {
    return true;}
}
console.log(highScores.some(isReallyHighScore))

#### Flattening an Array - Flat(x) (infinity)
let cool = [1, 2, [1, 2, [1, 2]]];
let flatCool = cool.flat(1);
console.log(flatCool); // [1, 2, 1, 2, [1, 2]]