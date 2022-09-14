// Spread operator

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [0, ...arr1, ...arr2, 7];

console.log(arr3);

// we can use spread operator on objects as well
obj1 = {
    name: "Ben Tennyson"
}

obj2 = {
    hasOmnitrix: true
}

obj3 = {
    alienNumber: 10
}

obj4 = { ...obj1, ...obj2, ...obj3 }

console.log(obj4)