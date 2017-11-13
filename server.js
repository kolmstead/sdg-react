const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://admin:password@ds249605.mlab.com:49605/sdg';

app.options('*', cors());

app.use(cors());

var whitelist = ['//r77-kolmstead.c9users.io:8081/api/notes', '//r77-kolmstead.c9users.io:8081/api/quotes'];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response 
  }else{
    corsOptions = { origin: false } // disable CORS for this request 
  }
  callback(null, corsOptions) // callback expects two parameters: error and options 
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var db;

MongoClient.connect(MONGO_URL, (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(8081, ()=> {console.log('listening on 8081');
  });
});



app.get('/api', (req, res) => res.send("Hello?"));

app.get('/api/knowlton', (req, res) => res.sendFile(__dirname + '/bob.html'));

app.post('/api/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);
    
    console.log('saved to database');
    res.redirect('/api/knowlton');
  });
});

app.post('/api/notes', cors(corsOptionsDelegate), (req,res) => {
  db.collection('notes').save(req.body, (err, result) => {
    if (err) return console.log(err);
     
    console.log('notes saved to database');
    res.redirect('/api/knowlton');
  });
});

app.post('/api/notes2', cors(corsOptionsDelegate), (req,res) => {
  db.collection('notes').save(req.body, (err, result) => {
    if (err) return res.send(err);
    console.log("req.body is", req.body);
    console.log('notes saved to database');
    res.send(req.body);
  });
});

app.post('/api/quotes2', cors(corsOptionsDelegate), (req,res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return res.send(err);
    res.send(req.body);
  });
});

// app.listen(8081, () => console.log('Example app listening on port 8081'));