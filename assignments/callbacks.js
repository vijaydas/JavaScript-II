// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

 

  //Given this problem: 
  
  // function firstItem(arr, cb) {
  //   // firstItem passes the first item of the given array to the callback function.
  // }

  // Potential Solution:

//  Higher order function using "cb" as the call back
function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  console.log(cb(arr))
}

let first = function(items) {
  return items[0];
}

firstItem(items,first);



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  console.log(cb(arr));
}

let length = function(arr){
  return arr.length;
}

getLength(items, length);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  console.log(cb(arr));
}

let lastItem = function(arr) {
  return arr[arr.length - 1];
}

last(items, lastItem);



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

let sum = function(sum) {
  console.log(sum);
}

sumNums(5, 6, sum);





function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

let multiply = function(multiply) {
  console.log(multiply);
}

multiplyNums(2, 10, multiply);




function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb(true);
    }
  }
   return cb(false);
}

contains("Pencil", items, function(testResult) {
  console.log(testResult);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}



