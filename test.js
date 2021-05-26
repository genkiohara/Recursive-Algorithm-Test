// /* 01-----------------------Power---------------------------------------------------------------------
// Write a function called power which accepts a base and an exponent. 
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()  
//         - do not worry about negative bases and exponents.
// */
// // power(2,0) // 1
// // power(2,2) // 4
// // power(2,4) // 16

function power(a,b) {
  if ( a === 1 && b === 1) return 1
  return Math.pow(a,b)
}
console.log(power(2,4)); // should be 1npm

/* 02-----------------------productOfArray---------------------------------------------------------------------
Write a function called 'productOfArray' which takes in an array of numbers and 
returns the product of them all.
*/
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60​

function productOfArray(arr){
  var result = 1;
  for( var i = 0; i < arr.length; i++){
  result*=arr[i];
  }
  return result;
  };
  console.log(productOfArray([1,2,3,10]));

// /* 03-----------------------recursiveRange---------------------------------------------------------------------
// Write a function called 'recursiveRange' which accepts a number and adds up all 
// the numbers from 0 to the number passed to the function
// */
// // recursiveRange(6) // 21
// // recursiveRange(10) // 55 
// ​
function recursiveRange (num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
};

console.log(recursiveRange(6));
console.log(recursiveRange(10));
// /* 04-----------------------reverse---------------------------------------------------------------------
// Write a recursive function called 'reverse' which accepts a string and returns 
// a new string in reverse.
// */
// // reverse('awesome') // 'emosewa'
// // reverse('rithmschool') // 'loohcsmhtir'
// ​
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
 }

console.log(reverse("apple"));
// /* 05-----------------------isPalindrome---------------------------------------------------------------------
// Write a recursive function called 'isPalindrome' which returns true if the string 
// passed to it is a palindrome (reads the same forward and backward). 
// Otherwise it returns false.
// */
// // isPalindrome('awesome') // false
// // isPalindrome('foobar') // false
// // isPalindrome('tacocat') // true
// // isPalindrome('amanaplanacanalpanama') // true
// // isPalindrome('amanaplanacanalpandemonium') // false
// ​
function isPalindrome(str){
  if(str.length <= 1){
    return true
  }
  let firstletter = str[0]
  let lastletter = [str.length - 1]

  if(firstletter === lastletter){
    let stringWithoutFirstAndLastLetters = str.substring(1, str.length - 1)
    return isPalindrome(stringWithoutFirstAndLastLetters)
  }else{
    return false
  }
}

console.log(isPalindrome("apples"))