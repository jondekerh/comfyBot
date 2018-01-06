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
              obj = JSON.parse(data); //now it an object
              obj.Arr.push(body.input); //add some data
              json = JSON.stringify(obj); //convert it back to json
              fs.writeFile('unindexed_inputs.json', json, 'utf8', (err) => {if(err){console.log(err)}}); //write it back
              }
            });
            msg.channel.send(sResponse);
          break;
          default:
            msg.channel.send(sResponse);
          break;
        }
      };
    });
  }
};
