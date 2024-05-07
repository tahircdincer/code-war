function findShort(s) {
  let words = s.split(" ");
  let shortWord = words[0];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length < shortWord.length) {
      shortWord = words[i];
    }
  }
  return shortWord.length;
}

/* 
Solution:
I merged my solution with other solution. Mine was similar but I missed a point. So I gotta give the credit to people who solved the problem.
So here is my explanation of this topic.

.split method so can divide the sentence word by word.
So we assume first word is the shortest word. ( Loop' ll take care of this. )

Then starting a loop.
If the word in the iteration is shorter than defined shortWord it becomes the shortWord. 
Then loop runs until it gets to words array' s length.

When is ' shortWord ' totally set then returns the length of ' shortWord '.

Of course there are more practical ways this is my approach with all the things I' ve learned yet.

Take care y' all :)

*/
