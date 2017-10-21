
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./createStore.prod');
} else {
  module.exports = require('./createStore.dev');
