const { commands } = require("./commands");

const commander = (msg) => {
  let message = msg.content.toLowerCase();

  commands.forEach((cmd) => {
    if (
      cmd.primary === message ||
      cmd.secondary === message ||
      message.startsWith(cmd.dynamic)
    ) {
      cmd.handler(msg);
    }
  });
};

module.exports = commander;
