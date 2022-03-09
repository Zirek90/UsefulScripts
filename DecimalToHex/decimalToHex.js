const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// question user to enter name
rl.question("Write your decimals\n", function (decimalArray) {
  const arrayOfDecimals = decimalArray
    .split(",")
    .map((decimal) =>
      Number(decimal).toString(16).length === 1
        ? `00x0${Number(decimal).toString(16)}`
        : `00x${Number(decimal).toString(16)}`
    );

  console.log(`Output:  ${arrayOfDecimals}`);

  // close input stream
  rl.close();
});
