// Simple example connecting to two different databases sharing the socket connections below using a Promise.

var MongoClient = require('mongodb').MongoClient,
  test = require('assert');
MongoClient.connect(
  'mongodb://localhost:27017/test',
  function(err, db) {
    // Reference a different database sharing the same connections
    // for the data transfer
    var secondDb = db.db('integration_tests_2');

    // Fetch the collections
    var multipleColl1 = db.collection('multiple_db_instances_with_promise');
    var multipleColl2 = secondDb.collection(
      'multiple_db_instances_with_promise'
    );

    // Write a record into each and then count the records stored
    multipleColl1.insertOne({ a: 1 }, { w: 1 }).then(function(result) {
      multipleColl2.insertOne({ a: 1 }, { w: 1 }).then(function(result) {
        // Count over the results ensuring only on record in each collection
        multipleColl1.count().then(function(count) {
          test.equal(1, count);

          multipleColl2.count().then(function(count) {
            test.equal(1, count);

            db.close();
          });
        });
      });
    });
  }
);
