//function that finds the amount number of the check
module.exports = function findAmountNumber(text) {
  return text.match(/\$?\s+\d+\.\d+/)[0];
};
