// Initializes the `contact` service on path `/contacts`
const createService = require('feathers-mongoose');
const createModel = require('../../models/transaction.model');
const hooks = require('./transaction.hooks');
const filters = require('./transaction.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'transaction',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/transactions', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('transactions');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
