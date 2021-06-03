let connection;

const setupInput = function (conn) {
  connection = conn;
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
  }
  if (keyPress === "w") {
    connection.write("Move: up")
    // connection.write("Move: up")  
  }
  if (keyPress === "a") {
    connection.write("Move: left")
    // connection.write("Move: up")  
  }
  if (keyPress === "s") {
    connection.write("Move: down")
    // connection.write("Move: up")  
  }
  if (keyPress === "d") {
    connection.write("Move: right")
    // connection.write("Move: up")  
  }
  if (keyPress === "q") {
    connection.write("Say: I'm getting longer")
    // connection.write("Move: up")  
  }
  if (keyPress === "e") {
    connection.write("Say: You so tiny")
    // connection.write("Move: up")  
  }
  
};

// setupInput();

module.exports = {
  setupInput,
}