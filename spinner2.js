let time = 100;
let length = 4;
for(let i = 0; i < length; i++) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, time);
  time += 200;
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, time);
  time += 200;
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, time);
  time += 200;
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, time);
  time += 200;
}