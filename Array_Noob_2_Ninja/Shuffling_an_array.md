![alt text](./images/image-9.png)

The approach we will use for shuffling the contents of an array is something Fisher-Yates devised and Don Knuth popularized. The general approach they came up with can be seen in code form below:

Array.prototype.shuffle = function () {
&nbsp;&nbsp;&nbsp;&nbsp;let input = this;
&nbsp;&nbsp;&nbsp;&nbsp;for (let i = input.length - 1; i >= 0; i--) {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let randomIndex = Math.floor(Math.random() * (i + 1)); let itemAtIndex = input[randomIndex];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;input[randomIndex] = input[i];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;input[i] = itemAtIndex;
&nbsp;&nbsp;&nbsp;&nbsp;}
return input;
}

let tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
tempArray.shuffle();
console.log(tempArray);

