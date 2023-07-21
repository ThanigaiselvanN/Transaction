const mongoose = require('mongoose');

module.exports = function () {
  const app = this;
  var uri = "mongodb://lyncspace:ssaug%4029@cluster0-shard-00-00-b3lls.mongodb.net:27017,cluster0-shard-00-01-b3lls.mongodb.net:27017,cluster0-shard-00-02-b3lls.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

  mongoose.connect(uri);
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
