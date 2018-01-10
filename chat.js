const wassup = require('./arrays/wassupArr.js');
const howru = require('./arrays/howruArr.js');
const jokes = require('./arrays/jokesArr.js');

//code for making http requests to the chat API service and posting a response in chat:
module.exports = {
  chatRequest: function (cleanMsg, request, msg) {
    var userInput= cleanMsg.substring(7);
    var payload = {
      "currentNode": "",
      "complete": null,
      "context":{},
      "parameters": [],
      "extractedParameters": {},
      "speechResponse": "",
      "intent": {},
      "input": '',
      "missingParameters": []
    };
    payload["input"] = userInput;

    var options = {
       uri: 'http://52.14.246.78:8001/api/v1',
       headers: {
         'Content-Type': 'application/json'
       },
       json: payload
    };

    request.post(options, function(err, res, body) {
      console.log('ERROR: \n', err);
      console.log('JSON OBJ SENT: \n', options.json);
      console.log('RESPONSE: \n', body);

      var story = body.intent.storyId;
      var sResponse = body.speechResponse;
      
      //allows a unique tag to tag the user in JSON response
      if (sResponse.indexOf('#usrName#') != -1) {
        var splitResArr = sResponse.split(' ');
        var usrNameIndex = splitResArr.indexOf('#usrName#');
        splitResArr.splice(usrNameIndex, 1, msg.author);
        var splitResString = splitResArr.toString();
        var finalString = splitResString.replace(/,/g , ' ');
        msg.channel.send(finalString);
      }
      else {
        switch (story) {
          //the "fallback" response. The message that triggered it will be written to a json doc so it can be integrated into a story later.
          case '59aae7bd26f6f60007b06fb3':
            var fs = require('fs');
            fs.readFile('unindexed_inputs.json', 'utf8', function readFileCallback(err, data){
              if (err){
                console.log(err);
              } 
              else {
              var obj = JSON.parse(data); //make it an object
              obj.Arr.push(body.input); //add another item to the array
              var json = JSON.stringify(obj); //convert it back to json
              fs.writeFile('unindexed_inputs.json', json, 'utf8', (err) => {if(err){console.log(err)}}); //write it back
              }
            });
            msg.channel.send(sResponse);
          break;
          //for "what's up" story
          case '5a544d2622d3a7003abd4289':
            wassup.wassupFunc(msg);
          break;
          case '5a54587d22d3a7003abd4302':
            howru.howruFunc(msg);
          break;
          case '5a55cb1022d3a7003abd48a2':
            jokes.jokesFunc(msg);
          break;
          default:
            msg.channel.send(sResponse);
          break;
        }
      }
    });
  }
};
