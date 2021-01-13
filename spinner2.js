// SPINNER II
// Refactor Spinner I to remove the repeated setTimeout statements

const characters = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|", "\n"];

characters.forEach((char, index) => {
  const timeout = index * 200 + 100; // delay incrementer
  setTimeout(() => {
    process.stdout.write("\r" + char);
  }, timeout);
});