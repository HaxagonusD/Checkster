const converter = require("number-to-words");
module.exports = (currencyString) => {
  if (!currencyString) {
    return null;
  }
  const noDollarSignString = currencyString.replace(/\$\s*?/, "");
  const withDecimal = Number(noDollarSignString);
  const noDecimal = Math.trunc(withDecimal);
  let justDecimal = withDecimal - Math.floor(withDecimal);
  justDecimal = justDecimal.toFixed(2);
  const noDecimalWords = converter.toWords(noDecimal);
  const justDecimalWords = converter.toWords(justDecimal * 100);
  console.log(justDecimal);
  return `${noDecimalWords} ${justDecimal != 0 ? justDecimalWords : ""}`;
};
