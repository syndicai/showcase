const craco = require("@craco/craco");

module.exports = {
  style: {
    postcss: {
      mode: craco.POSTCSS_MODES.file
    }
  }
};
