## commands
commands is a discord.js@12 command handler.
thanks to the very little effort put into it, it's very tiny.

## Installation
just clone this git repository, it's a boilerplate bot template with commands integrated.
```
git clone https://github.com/webdevsint/commands
```

## Usage
- navigate to the `commands/commands.js` file. <br>
- all your commands should will be objects within the commands array. <br>
a typical command object has a primary keyword, a short keyword (optional) and a handler function. 

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
## Dynamic Commands
dynamic commands do not have any predefined primary or secondary keywords, instead they only have a starting keyword. <br>
eg. `.thank tahlil`, here `.thank` is predefined but anything after it is dynamic.

here, an example command:

```
  {
    dynamic: ".thank",           // dynamic keyword
    handler: (msg) => {
      const message = msg.content.split(" ");
      const person = message.shift();
      
      msg.channel.send(`thank you ${person}`);
    },
  },
```

that's about it.

### Note: 
commands was created before discord.js@12 was deprecated, it was just not published.
