module.exports = {
  jokesFunc: function (msg) {

  var jokesArr = [
    'Did you hear about the guy whose whole left side was cut off? He\'s all right now.',
    'I wondered why the baseball was getting bigger. Then it hit me.',
    'I wasn\'t originally going to get a brain transplant, but then I changed my mind.',
    'Why don\'t some couples go to the gym? Because some relationships don\'t work out.',
    'A friend of mine tried to annoy me with bird puns, but I soon realized that toucan play at that game.',
    'I\'d tell you a chemistry joke but I know I wouldn\'t get a reaction.',
    'Have you ever tried to eat a clock? It\'s very time consuming.',
    'I got hit in the head with a can of soda! Luckily it was a soft drink.',
    'I used to be a banker but I lost interest',
    'A prisoner\'s favorite punctuation mark is the period. It marks the end of his sentence.',
    'I\'m reading a book about anti-gravity. It\'s impossible to put down.',
    'He drove his expensive car into a tree and found out how the Mercedes bends.',
    'I don\'t trust these stairs because they\'re always up to something.',
    'When William joined the army he disliked the phrase \'fire at will\'.',
    'Show me a piano falling down a mineshaft and I\'ll show you A-flat minor.',
    'Something about subtraction just doesn\'t add up.',
    'Claustrophobic people are more productive thinking outside the box.',
    'Why don\'t programmers like nature? It has too many bugs.',
    'So what if I don\'t know what apocalypse means!? It\'s not the end of the world!',
    'It\'s not that the man did not know how to juggle, he just didn\'t have the balls to do it.',
    'I couldn\'t quite remember how to throw a boomerang, but eventually it came back to me.',
    'Atheists don\'t solve exponential equations because they don\'t believe in higher powers.',
    'The other day I held the door open for a clown. I thought it was a nice jester.',
    'I\'m glad I know sign language, it\'s pretty handy.',
    'What is the difference between a nicely dressed man on a tricycle and a poorly dressed man on a bicycle? A tire.',
    'A small boy swallowed some coins and was taken to a hospital. When his grandmother telephoned to ask how he was a nurse said \'No change yet\'.'
  ];

  var randomJokes = Math.floor(Math.random()*jokesArr.length);
  msg.channel.send(jokesArr[randomJokes]);
  }
};
