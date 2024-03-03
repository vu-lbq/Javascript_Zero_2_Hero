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