//process.stdout.write('hello from spinner1.js... \rheyyy\n');

const array = ['|','/','-','\\','|','/','-','\\'];
let delay = 100;
for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${array[i]}   `);
  }, delay);
  delay += 200;
}
setTimeout(() => {
  process.stdout.write('\n');
}, delay);



// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// // ... fill in the rest yourself ...
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);