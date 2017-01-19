if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  // non production env
  module.exports = require('./configureStore.dev');
}
