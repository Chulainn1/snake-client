const {connect} = require("./client.js")

connect();
console.log("Connecting...")


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (keyPress) {
  if (keyPress === '\u0003') {
    process.exit();
    // return connection.write("Move Up")
  }
  
};

setupInput();

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })