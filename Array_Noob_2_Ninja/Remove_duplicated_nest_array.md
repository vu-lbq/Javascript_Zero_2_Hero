![alt text](./images/image-13.png)
![alt text](./Images/image-12.png)
![alt text](./Images/image-14.png)
![alt text](./Images/image-15.png)

let bigArray = [["a", "b", "c"],
 [1, 2, 3],
 [true, true, false],
 [":)", ":P", ":X"],
 [true, false, false],
 [1, 2, 3],
 ["foo", "zorb", "blarg"],
 ["a", "b", "c"]];

let stringArray = bigArray.map(JSON.stringify);
console.log(stringArray);

![alt text](./Images/image-16.png)
#### Creating the set
let uniqueStringArray = new Set(stringArray);

#### Going Back to Arrayville!
let uniqueArray = Array.from(uniqueStringArray);
- Use JSON.parse to unstringify back to origin array

let uniqueArray = Array.from(uniqueStringArray, JSON.parse);

#### Compact code version
let uniqueArray = Array.from(new Set(bigArray.map(JSON.stringify)),JSON.parse);