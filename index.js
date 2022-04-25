const Discord = require("discord.js");
const token = process.env.TOKEN;

const commander = require("./commands/commander");

const client = new Discord.Client();

client.once("ready", () => {
  console.log(client.user.tag + " running!");
  client.user.setActivity(`!b --help`, { type: "WATCHING" });
});

client.on("message", (msg) => {
  if (msg.author.bot) return;

  commander(msg);
});

client.login(token);
