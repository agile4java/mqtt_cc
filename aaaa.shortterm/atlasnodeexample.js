var MongoClient = require('mongodb').MongoClient;

var uri =
  'mongodb://kay:myRealPassword@mycluster0-shard-00-00.mongodb.net:27017,mycluster0-shard-00-01.mongodb.net:27017,mycluster0-shard-00-02.mongodb.net:27017/admin?ssl=true&replicaSet=Mycluster0-shard-0';
MongoClient.connect(
  uri,
  function(err, client) {
    const collection = client.db('test').collection('devices');
    // perform actions on the collection object
    client.close();
  }
);
