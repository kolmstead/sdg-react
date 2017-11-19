const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://admin:password@ds249605.mlab.com:49605/sdg';

app.options('*', cors());

app.use(cors());

// var whitelist = ['//r77-kolmstead.c9users.io:8081/api/notes', '//r77-kolmstead.c9users.io:8081/api/quotes', '//r77-kolmstead.c9users.io:8081/api/quoteList'];
// var whitelist = ['//r77-kolmstead.c9users.io:8081'];
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   if (whitelist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response 
//   }else{
//     corsOptions = { origin: false } // disable CORS for this request 
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options 
// }

var corsOptionsDelegate = { //**********THISisn't right -- trying to make GET method work, but it's not
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
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

// app.get('/api/quoteList', (req, res, next) => {
//   db.collection('quotes').find({}, (err, docs)=>{
//     if (err) return next(err);
//     docs.each((err, doc)=> {
//       if (doc) {
//         console.log(doc);
//         res.send(doc);
//       } else {
//         res.end();
//       }
//     });
//   });
// });

// app.get('/api/quoteList', cors(corsOptionsDelegate), (req, res) => {
// app.get('/api/quoteList', (req, res) => {
//   db.collection('quotes').find().toArray((err, docs)=> {
//     if (err) return(err);
//     return res.render('quotes', {quotes:docs});
//   });
// });

app.get('/api/quoteList', cors(), (req, res) => {
  var cursor = db.collection('quotes').find();
  cursor.toArray(function(err, doc) {
    if (err) return (err);
    res.send(doc);
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


//TODO: try putting api in another c9 instance to see if that solves CORS issues.
app.post('/api/quotes2', (req,res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return res.send(err);
    res.send(req.body);
  });
});



// app.listen(8081, () => console.log('Example app listening on port 8081'));