//rock paper scissors game. user (p1) enters a rps position, then the bot (p2) selects one randomly and this func compares them.
module.exports = {
  rpsCompare: function (p1, msg) {
    var rpsArr = [
      'rock',
      'paper',
      'scissors'
    ];
    if (p1 == null) {
      msg.channel.send("If you wanna play you have to type \"c!rps [rock||paper||scissors]\"");
      return false;
    }
    else {
      p1 = p1.toLowerCase();
    }
    var randomRps = Math.floor(Math.random()*rpsArr.length);
    var p2 = rpsArr[randomRps];
      if (!rpsArr.includes(p1)) {
        msg.channel.send("If you wanna play you have to type \"c!rps [rock||paper||scissors]\"");
      }
      else {
        msg.channel.send('You picked ' + p1 + '!\ncomfyBot picked ' + p2 + '!');
        if (p1 === p2) {
          msg.channel.send('tie');
        }
        if (p1 === 'rock' && p2 === 'scissors') {
          msg.channel.send('p1 w/ rock wins');
        }
        else if (p1 === 'rock' && p2 === 'paper') {
          msg.channel.send('p2 w/ paper wins');
        }
        if (p1 === 'paper' && p2 === 'rock') {
          msg.channel.send('p1 w/ paper wins');
        }
        else if (p1 === 'paper' && p2 === 'scissors') {
          msg.channel.send('p2 w/ scissors wins');
        }
        if (p1 === 'scissors' && p2 === 'paper') {
          msg.channel.send('p1 w/ scissors wins');
        }
        else if ( p1 === 'scissors' && p2 === 'rock') {
          msg.channel.send('p2 w/ rock  wins');
        }
      }
    }
};
