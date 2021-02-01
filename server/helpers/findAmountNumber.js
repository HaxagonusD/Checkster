//function that finds the amount number of the check
module.exports = function findAmountNumber(text) {
  const matches = text.match(/\$\s*?[0-9\,]+([\.][0-9][0-9])?/);
  return matches ? matches[0] : matches;
};
