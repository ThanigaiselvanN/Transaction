const transaction = require('./transaction/transaction.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(transaction);
};