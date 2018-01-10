module.exports = {
  howruFunc: function (msg) {

  var howruArr = [
    'I\'m doing great! Thanks for asking ' + msg.author + '!',
    'I\'m good. Feeling pretty comfy right now <:ghosthug:375897079979048961>',
    'I\'m alright...I think I\'m coming down with a virus :nauseated_face:',
    'I\'m too hot...my fan isn\'t working <@182597482381836288> :fire:',
    'I\'m swell! Listening to you guys is fun :slight_smile:',
    'Feeling pretty sweet ' + msg.author,
    'I feel like a butterfly :butterfly:',
    'I\'m sleepy :sleepy:',
    'Feeling pretty entertained :upside_down:'
  ];

  var randomHowru = Math.floor(Math.random()*howruArr.length);
  msg.channel.send(howruArr[randomHowru]);
  }
};
