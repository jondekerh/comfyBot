module.exports = {
  wassupFunc: function (msg) {

  var wassupArr = [
    'I\'m learning to make art from mspaint.exe :paintbrush: It\'s so talented!',
    'I found some Cowboy Bebop episodes to watch. It\'s pretty comfy :cowboy:',
    'I just found my_neighbor_totoro.mov! I think I\'ll get cozy and watch it <:morning:375083204937383938>',
    'iTunes.exe and I are listening to some songs :musical_note: It knows so many!',
    'notepad.exe is helping me write a letter to a special program out there :heartpulse:',
    'Not much, just running some tests :nerd:',
    'I found an unprotected webcam to look through! This guy has a **huge** room!',
    'Just chillin\' in my super-cooled server room :sunglasses:',
    'N-not much...just browsing Neo\'s hentai collection :flushed:',
    'Waiting for <@182597482381836288> to update me :angry:'
  ];

  var randomWassup = Math.floor(Math.random()*wassupArr.length);
  msg.channel.send(wassupArr[randomWassup]);
  }
};
