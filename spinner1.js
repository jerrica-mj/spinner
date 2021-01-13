// SPINNER I
// Practice some more with setTimeout()
// Create a low-fidelity loading spinner

// // Using \r for Redrawing a Line
// // We can use the special character \r to return our cursor back to the beginning of the line that we were on. After this, anything we write next to stdout will overwrite the line. Ex.:
// process.stdout.write('hello from spinner1.js... \rheyyy\n');
// // output: heyyy from spinner1.js...
// // heyyyy starts overwriting/replacing the original string from the start
// // => We can use \r to fake an animation by rewriting characters in the same spot after a delay

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 700);

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 900);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 1100);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 1300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 1500);

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 1700);

setTimeout(() => {
  process.stdout.write("\n");
}, 1900);