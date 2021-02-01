const converter = require("number-to-words");
module.exports = (currencyString) => {
  console.log(currencyString);
  if (!currencyString) {
    return null;
  }
  const noDollarSignString = currencyString
    .replace(/\$\s*?/, "")
    .replace(/[,]/g, "");
  const withDecimal = Number(noDollarSignString);
  const noDecimal = Math.trunc(withDecimal);
  let justDecimal = withDecimal - Math.floor(withDecimal);
  justDecimal = justDecimal.toFixed(2);
  const noDecimalWords = converter.toWords(noDecimal);
  const justDecimalWords = converter.toWords(justDecimal * 100);
  return `${noDecimalWords} ${justDecimal != 0 ? justDecimalWords : ""}`;
};
