// Return the factorial of the provided integer.

function factorialize(num) {
  if (num === 0) {
    return 1;
	}
  return num * factorialize(num -1);
}
//--------------------.
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// function findLongestWordLength(str) {
// // return str.length;
// }

function findLongestWordLength(str) {
  var array = str.split(' '); //turns the string into an array. e.g: 'The White Wolf' ===> ['The', 'White','Wolf']
  var length = []; //Creates an empty array that takes the length of the array elements.

  for (var i = 0; i < array.length; i++) {
    length.push(array[i].length); //Populating the array length. //e.g: ['The', 'white', 'Wolf'] ===> [3, 5, 4].
  }
  return Math.max(...length);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog"); //returns 'jumped'.
//--------------------.
// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.
//[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]

function largestOfFour(arr) {
  var largest = [];
  for (var i = 0; i < arr.length; i++) {
  	largest.push(Math.max(...arr[i]));
  }
  return largest;
}
//--------------------.
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
	var toArray = str.split(''); //turns the string into an array.
	var numberToSlice = target.length * -1; //variable to store the splicing value from the end of the array.
	var ending = toArray.splice(numberToSlice).join(''); //creates the correct ending of the string.

	if (target === ending) {
		return true;
	} else {
		return false;
	}
}
//--------------------.
// Repeat a given string str for num times (second argument).
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
var result = '';
	for (var i = 0; i < num; i++) {
		  result += str ;
	}
return result;
}