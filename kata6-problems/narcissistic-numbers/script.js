" use strict ";
function narcissistic(value) {
  let sum = 0;
  let stringNumber = value.toString();
  for (let i = 0; i < stringNumber.length; i++) {
    sum += Number(stringNumber[i]) ** stringNumber.length;
    console.log(sum);
  }
  if (sum === value) {
    return true;
  } else {
    return false;
  }
}

/*

Sum was defined in order to add each iteration to the previous one so can provide the total of these numbers.
' .toString() ' is necessary because solution depends on length of the number. ( If it is 153, so there is a length of 3. It' ll be power of each number of this number - power of the length )
To get into each number of the complete number I thought it' d be practical to convert into string then access each number via bracket notation ' [] ' but it is necessary to convert each of them back to the number forms so mathematical operations can be applied to them. 
** -- should be length of the number. In order to calculate the length of a number, converted it into a string. ( I defined ' stringNumber ' before this. )
I added ' console.log( sum ); ' due to debugging reasons so I could see if the numbers were added properly.
Then the logic implemented so if it is a ' narcissistic number ' it' d return true.

console.log( narcissistic ( 153 ) ); check if the code works properly.

*/
