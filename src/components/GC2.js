const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://admin:password@ds249605.mlab.com:49605/sdg';

MongoClient.connect(MONGO_URL, (err, db) => {  
  if (err) {
    return console.log(err);
  }

  // Do something with db here, like inserting a record
  db.collection('notes').insertOne(
    {
      title: 'Hello MongoDB',
      text: 'Hopefully this works!'
    },
    function (err, res) {
      if (err) {
        db.close();
        return console.log(err);
      }
      // Success
      db.close();
    }
  )
});
