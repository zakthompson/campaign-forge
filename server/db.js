const mongo = require('mongodb').MongoClient;
const config = require('./config');

const dbName = 'campaignforge';

module.exports = {
  db: null,
  init: (done) => {
    mongo.connect(`${config.db.url}:${config.db.port}/${dbName}`, (err, client) => {
      this.db = client.db();
      done(err);
    });
  },
  getDB: () => this.db,
  getCollection: collection => this.db.collection(collection),
};
