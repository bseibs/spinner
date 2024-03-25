process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnerFrames = ['|', '/', '-', '\\'];

let delay = 100;
for (const frame of spinnerFrames) {
  setTimeout(() => {
    process.stdout.write(`\r${frame}   `);
  }, delay);
  delay += 200;
}
