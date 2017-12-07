const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const comfyArr = require('./comfyArr.json');
const rps = require('./minigames/rps.js');
var callOut = "c!";

function autoDelete(msg) {
  msg.delete(5000);
}

client.on('ready', () => {
  console.log(`${client.user.tag} is ready to serve!`);
});

client.on('message', msg => {
  if (msg.content.substring(0, 2) == callOut) {
    //the msg is made into a clean string, then each word after the callout becomes an index in the array argsArr.
    var cleanMsg = msg.cleanContent;
    var argsArr = cleanMsg.substring(2).split(' ');

    switch(argsArr[0]) {
      //command list:
      case 'help':
        msg.channel.send('I respond to the following commands:\n**c!comfy** - this notifies me that you need comfort.');
      break;
      //gives user a random uplifting message:
      case 'comfy':
        var randomComfy = Math.floor(Math.random()*comfyArr.length);
        msg.reply(comfyArr[randomComfy]);
      break;
      //handles invalid commands:
      default:
        msg.channel.send('Sorry, I don\'t recognize that command. If you need help, try \"c!help.\"')
          .then(message => autoDelete(message))
          .catch(console.error);
      break;
      //plays rock paper scissors:
      case 'rps':
        var p1 = argsArr[1];
        rps.rpsCompare(p1, msg);
      break;
      //says hi & tags user (NOT WORKING):
      case 'test':
        msg.channel.send('hi, ' + msg.author.username);
      break;
    }
  }
});

client.login(auth.token);
