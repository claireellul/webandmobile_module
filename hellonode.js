// code adapted from:  http://www.theprojectspot.com/tutorial-post/Node-js-for-beginners-part-1-hello-world/2  (28th December 2017)


// this is a web server so we require the http component of nodejs to set up the server 
// require is the javascript equivalent of pythons import or importlib
var http = require('http');

// create the server
// as we will see later on (Week 5), the request object is what you send TO  the server, the response is what comes back to your browser
http.createServer(function (request, response) {

    // send out the HTML header as part of the response
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // now write the text that we want to display on screen
    response.end('Hello World\n');

  // 8080 is the port that we want the server to listen on - this means that when we type in the URL of the server it will listen out for the request and process it  
}).listen(8080);


// send a message out to the console
console.log('Server started');