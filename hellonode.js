// *********************************
// DO NOT CHANGE THIS CODE

// express is the server that forms part of the nodejs program
var express = require('express');
var app = express();


// start the server - we listen on local port 8080
var server = app.listen(8080);
// *********************************

// ************************************************
// CHANGE THIS CODE EACH TIME 
//this is the code that decides what happens when you type in a URL in the browser

// the / indicates the path that you type into the server - in this case, what happens when you type in:  http://developer.cege.ucl.ac.uk:32560/
app.get('/', function (req, res) {
  // run some server-side code
  // the console is the command line of your server - you will see the console.log values in the terminal window
  console.log('basic hello world');

  // the res is the response that the server sends back to the browser - you will see this text in your browser window
  res.send('Hello Wor3ld!');
});


// the / indicates the path that you type into the server - in this case, what happens when you type in:  http://developer.cege.ucl.ac.uk:32560/dosomething
app.get('/dosomething', function (req, res) {
  // run some server-side code
  // the console is the command line of your server - you will see the console.log values in the terminal window
  console.log('do something else');

  // the res is the response that the server sends back to the browser - you will see this text in your browser window
  res.send('Do something else!');
});


// the / indicates the path that you type into the server - in this case, what happens when you type in:  http://developer.cege.ucl.ac.uk:32560/
app.get('/:name', function (req, res) {
  // run some server-side code
  // the console is the command line of your server - you will see the console.log values in the terminal window
  console.log('basic hello world');

  // the res is the response that the server sends back to the browser - you will see this text in your browser window
  res.send('Hello Wor3ld!' + req.params.name);
});


app.get('/:name1/:name2', function (req, res) {
  // run some server-side code
  // the console is the command line of your server - you will see the console.log values in the terminal window
  console.log('basic hello world');

  // the res is the response that the server sends back to the browser - you will see this text in your browser window
  res.send('Hello Wor3ld!' + req.params.name2 + "/" + req.params.name2);
});



app.get('/:name1/:name2/:name3', function (req, res) {
  // run some server-side code
  // the console is the command line of your server - you will see the console.log values in the terminal window
  console.log('basic hello world');

  // the res is the response that the server sends back to the browser - you will see this text in your browser window
  res.send('Hello Wor3ld!' + req.params.name2 + "/" + req.params.name2+ "/"+ req.params.name3);
});



// *********************************
// DO NOT CHANGE THIS CODE

// this code is required to shut down the server - e.g. when you want to make a change to the code
// and can't simply stop the server at command line using ctrl-c 
// in the browser type:  http://developer.cege.ucl.ac.uk:32560/shutdown32560   (NB: change the port to your own port as otherwise you might have other people shutting your server down by mistake)
app.get('/shutdown32560', function (req, res) {  // change the port here too!
  // run some server-side code
  console.log('shutdown received');
  gracefulShutdown();
});


// this function is called when you want the server to die gracefully
// i.e. wait for existing connections
function gracefulShutdown()  {
  console.log("Received kill signal, shutting down gracefully.");
  server.close(function() {
    console.log("Closed out remaining connections.");
    process.exit()
  });
  
   // if after 
   setTimeout(function() {
       console.error("Could not close connections in time, forcefully shutting down");
       process.exit()
  }, 10*1000);
}

// *********************************

