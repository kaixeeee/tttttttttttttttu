const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`ZeRvX Niver Die`,'https://www.twitch.tv/By:A7MD');
  console.log('BOT ONLINE');
});
client.login('NDMxNTUzMTE1MjkzMjIwODc2.DzgQ4w.UFocOWXRiEYSb3iHd9c0JZhwM_Q');