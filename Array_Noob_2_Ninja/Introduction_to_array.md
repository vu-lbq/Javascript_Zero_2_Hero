### init
let array = []
let array = ["a","b","c"]

### add items
["a","b","c"]
array.push["d"] --> ["a","b","c","d"]
array.unshift["0"] --> ["0","a","b","c"]

### remove items
["a","b","c"]
array.pop() --> ["a","b"]
array.shift() --> ["b","c"]

### setting/replacing values
["a","b","c"]
array[1] = "d" --> ["a","d","c"]

### finding values
["a","b","c","b"]
let item = array.indexOf("b") --> item = 1
let item = array.lastIndexOf("b") --> item = 3