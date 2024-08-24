function firstChar(text) {
  // Iterate through each character in the string
  for (let i = 0; i < text.length; i++) {
    // If the character is not a space, return it
    if (text[i] !== ' ') {
      return text[i];
    }
  }
  // If no non-space character is found, return an empty string
  return '';
}

// Test cases
console.log(firstChar(' Rosa Parks ')); // 'R'
console.log(firstChar(' Hello World ')); // 'H'
console.log(firstChar(' ')); // ''
console.log(firstChar('')); // ''

// Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
// alert(firstChar(text));
