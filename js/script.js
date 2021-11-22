/* gets data, checks its type and makes return if type is not 'string',
returns a string with the first uppercase letter and other letters in lowercase*/
function someFn(data) {
  if (typeof data !== 'string') return;
  return data[0].toUpperCase() + data.slice(1).toLowerCase();
}

/* gets data (name), checks its type and makes return if the type is not 'string',
returns a string with a greeting that depends on the name*/
function sayHello(name) {
  if (typeof name !== 'string') return;
  return name === 'Mark' ? 'Hi, Mark!' : `Hello, ${name}!`;
}

/*gets an array of strings (arr) and a number (length),
returns a new array with strings whose length does not exceed the number*/
function filterStrings(arr, length) {
  const filteredArr = arr.filter((item) => item.length <= length);
  return filteredArr;
}