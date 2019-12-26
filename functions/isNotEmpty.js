const { isEmpty } = require("./isEmpty");

const isNotEmpty = arg => !isEmpty(arg);
module.exports.isNotEmpty = isNotEmpty;
