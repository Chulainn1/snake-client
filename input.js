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

module.exports = {
  setupInput,
}