function removeDuplicates() {

  const letters = ['a', 'b', 'b', 'c', 'd', 'a', 'e', 'f', 'f', 'c', 'b'];

  letters.sort();

  let i = 0;
  while (i < letters.length) {
    if (letters[i] === letters[i + 1]) {
      letters.splice(i, 1);
    } else {
      i++;
    }
  }

  return letters;
}

console.log(removeDuplicates());