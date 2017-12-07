const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const comfyArr = require('./comfyArr.json');
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
        //this is way too big and clutters up the doc. move into its own seperte dir. comfyBot/games/rps.js? json?
        var p1 = argsArr[1].toLowerCase();
        var rpsArr = [
          'rock',
          'paper',
          'scissors'
        ];
        var randomRps = Math.floor(Math.random()*rpsArr.length);
        var p2 = rpsArr[randomRps];
        msg.channel.send('You picked ' + p1 + '!\ncomfyBot picked ' + p2 + '!');
         function rpsCompare(p1, p2) {
          if (p1 === p2) {
            msg.channel.send('tie');
          };
          if (p1 === 'rock' && p2 === 'scissors') {
            msg.channel.send('p1 w/ rock wins');
          }
          else if (p1 === 'rock' && p2 === 'paper') {
            msg.channel.send('p2 w/ paper wins');
          };
          if (p1 === 'paper' && p2 === 'rock') {
            msg.channel.send('p1 w/ paper wins');
          }
          else if (p1 === 'paper' && p2 === 'scissors') {
            msg.channel.send('p2 w/ scissors wins');
          };
          if (p1 === 'scissors' && p2 === 'paper') {
            msg.channel.send('p1 w/ scissors wins');
          }
          else if ( p1 === 'scissors' && p2 === 'rock') {
            msg.channel.send('p2 w/ rock  wins');
          };
        };
        rpsCompare(p1, p2);
      break;
      //says hi & tags user (NOT WORKING):
      case 'test':
        msg.channel.send('hi, ' + msg.author.username);
      break;
    }
  }
});

client.login(auth.token);
