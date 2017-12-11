module.exports = {
  comfyFunc: function (msg) {

  var comfyArr = [
    'I know you got this ' + msg.author + '!',
    msg.author + ' being under a comfy blanket always makes things better :morning:',
    'Don\'t forget to take a breather and relax ' + msg.author + '. Maybe we could play a game!',
    'We appreciate you ' + msg.author + '! :ghosthug:',
    'Hey, you\'re doing a really great job ' + msg.author + '!',
    'You can do it :happee:',
    'You\'ve got friends here if you need someone to talk to ' + msg.author + '(but take it to the vent channel :fingerguns:)',
    'It\'s good to know your limits - I know you\'re doing the best you can ' + msg.author + ':sparkling_heart:',
    msg.author + ' why be moody when you can shake yo booty :hotboi:',
    'Are you holding any tension in your body right now? Relax your shoulders, stretch your neck, and take a deep breath. You got this ' + msg.author + ' :kissing_heart:',
    'Hydration is key. Have you been drinking enough water today ' + msg.author + '?',
    'You\'re not too hungry are you ' + msg.author + '? You should get something good to eat - you earned it!',
    'Don\'t stay up too late ' + msg.author + ', you\'ll earn more exp with the well-rested perk :sunglasses:',
  ];

  var randomComfy = Math.floor(Math.random()*comfyArr.length);
  msg.channel.send(comfyArr[randomComfy]);
  }
};
