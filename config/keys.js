// here we need to decide which set of keys to use prod or dev?

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod.js');
} else {
  module.exports = require('./dev.js');
}
// cleint id

// secret bayv3yDyr5h6DTC0LnEq8Zmk
