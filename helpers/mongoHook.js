const mongoHookup = {
  mongoConnect: async function() {
    // Connection URL
    // const rootURL = 'mongodb+srv://';
    // Database Name
    const dbDatabase = process.env.DB_DATABASE;
    const dbUser = process.env.DB_USERNAME;
    const dbPasswd = process.env.DB_PASSWORD;
    const fullUrl = `mongodb+srv:// + ${dbUser} + : + ${dbPasswd} + @nextdaycode001-kbsxd.mongodb.net/ + ${dbDatabase}`;
    const client = new MongoClient(fullUrl);

    try {
      // Use connect method to connect to the Server
      // ***************Test Code Below************
      console.log('Attempting db connection to ' + fullUrl);
      // ***************Test Code Above************
      await client.connect();

      const db = client.db(dbName);
    } catch (err) {
      console.log(err.stack);
    }
  }
};
