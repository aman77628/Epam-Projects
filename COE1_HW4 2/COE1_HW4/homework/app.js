//Problem 1. Write a JavaScript function that reverse an integer number

function reverseNumber(num) {
  let res = 0;
  while (num !== 0) {
    // eslint-disable-next-line no-magic-numbers
    res = res * 10 + num % 10;
    // eslint-disable-next-line no-magic-numbers
    num = parseInt(num / 10);
  }
  return res;
}

// eslint-disable-next-line no-magic-numbers
reverseNumber(12345) // returns 54321

// eslint-disable-next-line no-magic-numbers
reverseNumber(-56789) // returns -98765


//Problem 2. Write function, which iterates over array and executes function on each element.

function forEach(arr, func) {
  for (const el of arr) {
    func(el);
  }
}

//calling forEach function
// eslint-disable-next-line brace-style, no-magic-numbers
forEach([2,5,8], function(el) { console.log(el) }) // logs to console: 2 5 8


//Problem 3. Write function, which returns transformed array based on function, which is passed as a parameter. Reuse function from task 2

function map(arr, func) {
  const ar=[];
  forEach(arr,function (el){
    ar.push(func(el))
  })
return ar;
}

// Calling map function
// eslint-disable-next-line brace-style, no-magic-numbers
map([2, 5, 8], function(el) { return el + 3; }) // returns [5, 8, 11]

// eslint-disable-next-line brace-style, no-magic-numbers
map([1, 2, 3, 4, 5], function (el) { return el * 2; }) // returns [2, 4, 6, 8, 10]


//Problem 4. Write function, which returns filtered array based on function, which passed as a parameter. Reuse function from task 2.
function filter(arr, func) {
  const ar = [];
  forEach(arr,function (el){
    if(func(el)){
    ar.push(el);
    }
  })
  return ar;
}

//calling filter function
// eslint-disable-next-line brace-style, no-magic-numbers
filter([2, 5, 1, 3, 8, 6], function(el) { return el > 3 }) // returns [5, 8, 6]

// eslint-disable-next-line brace-style, no-magic-numbers
filter([1, 4, 6, 7, 8, 10], function(el) { return el % 2 === 0 }) //returns [4, 6, 8, 10]


// Input data for task 5.
let data = [
  {
    _id: '5b5e3168c6bf40f2c1235cd6',
    index: 0,
    age: 39,
    eyeColor: 'green',
    name: 'Stein',
    favoriteFruit: 'apple',
  },
  {
    _id: '5b5e3168e328c0d72e4f27d8',
    index: 1,
    age: 38,
    eyeColor: 'blue',
    name: 'Cortez',
    favoriteFruit: 'strawberry',
  },
  {
    _id: '5b5e3168cc79132b631c666a',
    index: 2,
    age: 2,
    eyeColor: 'blue',
    name: 'Suzette',
    favoriteFruit: 'apple',
  },
  {
    _id: '5b5e31682093adcc6cd0dde5',
    index: 3,
    age: 17,
    eyeColor: 'green',
    name: 'Weiss',
    favoriteFruit: 'banana',
  },
];

//Problem 5. Write function, which returns array of names of people, who are over 18 and their favorite fruit is apple. Reuse functions from task 3 and 4
function getAdultAppleLovers(data) {
  const filteredData = filter(data, function(el) {
    // eslint-disable-next-line no-magic-numbers
    return el.age > 18 && el.favoriteFruit === 'apple';
  });

  const result = map(filteredData, function(el) {
    return el.name;
  });

  return result;
}

//calling getAdultAppleLovers function
getAdultAppleLovers(data); // returns ['Stein']


//Problem 6. Write function, which returns array of keys of an object
function getKeys(obj) {
  let ar = [];
  for (const key in obj) {
    if (true) {
      ar.push(key);
    }
  }
  return ar;
}

//calling getKeys
getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 }); // returns ["keyOne", "keyTwo", "keyThree"]


//Problem 7. Write function, which returns array of values of an object.
function getValues(obj) {
  let ar = [];
  for (const key in obj) {
    if (true) {
      ar.push(obj[key]);
    }
  }
  return ar;
}

//calling getValues
getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 }); // returns [1, 2, 3]

