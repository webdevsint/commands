## commands
commands is a discord.js@12 command handler.
thanks to the very little effort put into it, its very tiny.

## Installation
just clone this git repository
```
git clone https://github.com/webdevsint/commands
```

## Usage
- navigate to the `commands/commands.js` file. <br>
- all your commands should will be objects within the commands array. <br>
a command object has a primary keyword, a short keyword (optional) and a handler function. 

```
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
```
here, the example command:

```
  {
    primary: ".ping",            // primary keyword
    secondary: ".p",             // short keyword
    handler: (msg) => {
      msg.channel.send("pong");
    },
  },
```
that's about it.

### Note: 
commands was created before discord.js@12 was deprecated, it was just not published.
