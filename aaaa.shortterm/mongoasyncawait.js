const mongoHookup = {
  
  const MongoClient = require('mongodb').MongoClient;
  const assert = require('assert');

  mongoConnect: async function() {
    // Connection URL
    const url = 'mongodb+srv://';
    // Database Name
    const dbName = 'myproject';
    const client = new MongoClient(url);

    try {
      // Use connect method to connect to the Server
      await client.connect();

      const db = client.db(dbName);
    } catch (err) {
      console.log(err.stack);
    }
    client.close();
  }
}