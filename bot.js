const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const comfyArr = require('./comfyArr.js');
const rps = require('./minigames/rps.js');
const chat = require('./chat.js');
const request = require('request');
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
      //currently newline using \n isn't producing desired effect. Minor bug.
      case 'help':
        msg.channel.send('```I respond to the following commands:\nc!comfy, c!rps [rock/paper/scissors]\nc!chat [your message here]```');
      break;
      //gives user a random uplifting message:
      case 'comfy':
        comfyArr.comfyFunc(msg);
      break;
      //plays rock paper scissors:
      case 'rps':
        var p1 = argsArr[1];
        rps.rpsCompare(p1, msg);
      break;
      //attempts to "chat" with the user using ai-chatbot-framework (https://github.com/alfredfrancis/ai-chatbot-framework):
      case 'chat':
        chat.chatRequest(cleanMsg, request, msg);
     break;
      //says hi & tags user (no longer needed, feel free to replace):
      case 'test':
        msg.channel.send('hi, ' + msg.author);
      break;
      //handles invalid commands:
      default:
        msg.channel.send('Sorry, I don\'t recognize that command. If you need help, try \"c!help.\"')
          .then(message => autoDelete(message))
          .catch(console.error);
      break;
    }
  }
});

client.login(auth.token);
