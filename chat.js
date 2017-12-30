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
      console.log('JSON OBJ SENT: \n', options['json']);
      console.log('RESPONSE: \n', body);
      msg.channel.send(body.speechResponse);
    });
  }
};
