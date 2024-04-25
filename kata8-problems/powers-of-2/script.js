" use strict ";

function powersOfTwo(n) {
  let powerTwo = [];
  for (let i = 0; i <= n; i++) {
    powerTwo.push(2 ** i);
  }
  return powerTwo;
}

/* 
   My solution for the problem in the top. 

   Loop condition should be equal to argument so it can loop until n.
   
   */
