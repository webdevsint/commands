const commands = [
  {
    primary: ".ping",
    secondary: ".p",
    handler: (msg) => {
      msg.channel.send('pong');
    },
  },
];

module.exports = {
  commands,
};
