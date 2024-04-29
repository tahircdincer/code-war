function frogContest(n) {
  let sumChris = 0;
  for (let i = 0; i <= n; i++) {
    sumChris += i;
  }
  let tomSum = 0;
  for (let i = 0; i <= Math.trunc(sumChris / 2); i++) {
    tomSum += i;
  }

  let catSum = 0;
  for (let i = 0; i <= sumChris + tomSum; i++) {
    catSum += i;
  }
  return `Chris ate ${sumChris} flies, Tom ate ${tomSum} flies and Cat ate ${catSum} flies`;
}

/* 

  I summarized in the solution chart which is attached to the folder of this project.

  So first Chris' flies --

  It' s summation of ' n ' numbers then it' ll be a loop w / condition of n  - code runs ' until ' it reaches ' n ' number -


  Tom' s flies --
Tom' s flies also summation but the summation ' until ' the number ' Chris' flies / 2 -- also' ll apply Math.trunc to this because in the problem it is stated it should be rounded down '.
So condition of the loop' ll be Math.trunc( Chris' sum / 2 );
Then it' s regular summation proccess? 

  Cat' s flies --

  Cat' s also summation -
  summation ' until ' the number ( tom' s flies + chris' flies )
  so condition of the loop is ( tom' s flies + chris' flies )
  Then it' s regular summation proccess ?
  */
