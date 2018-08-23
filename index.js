const botconfig = require("./botconfig");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Im a little baby :D`, {type: `listening`})
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch (console.error);
});

bot.on("message", async message => {
    const logsCommands = bot.channels.get(botconfig.logsChannelID);

  if(message.channel.type == "dm") {
    console.log(`${message.author.tag} שלח לי הודעה פרטית!`);
    return logsCommands.send(`${message.author.tag} שלח לי הודעה פרטית!`);
}

let prefix = botconfig.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

//test command
if(cmd === `${prefix}hello`){
    message.channel.send("Hi there!")
}
//youtube channel command
if(cmd === `${prefix}yt`){
  let embed = new Discord.RichEmbed()
  .setDescription("My youtube channel")
  .addField("קישור לערוץ", "https://www.youtube.com/channel/UCzxJ__JTqeOM2GecOxGIcLA?view_as=subscriber")
  .setFooter("bot made by avishaiDV")
  .setColor('RANDOM');
  message.channel.send(embed)
}
  
//server members count
if(cmd === `${prefix}Gang`){
  let icon = message.guild.iconURL;
  let embed = new Discord.RichEmbed()
  .setDescription("מספר האנשים בשרת")
  .setColor('RANDOM')
  .setThumbnail(icon)
  .addField("מספר אנשים הוא:", message.guild.memberCount)
  .setFooter("bot made by avishaiDV");
  message.channel.send(embed)
}
  

});

bot.login(process.env.BOT_TOKEN);
