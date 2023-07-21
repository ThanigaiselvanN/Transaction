// transaction-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

require('mongoose-type-email');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const transaction = new mongooseClient.Schema({
    userName : {
        type: String,
        required: [true, 'User Name is required']
    },
    paymentMode : {
      type: String,
      required: [true, 'Payment mode is required']
    },
    amount : {
      type: String,
      required: [true, 'Amount is required'],
    },
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
  });

  return mongooseClient.model('transaction', transaction);
};
