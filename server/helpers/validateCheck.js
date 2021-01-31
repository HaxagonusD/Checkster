//Create a function that takes in a check file name and returns whether or not it's valid
//What does it mean for a check to be valid?
//Find the number
//turn the number into words
//match the hand written name of number to created number to words
// The check is valid if these 2 things match
//
const findAmountNumber = require("./findAmountNumber");
const currencyToWords = require("./currencyToWords");
module.exports = (text) => {
  const textArray = text.split("\n");
  let textArrayToWords = textArray
    .map((currentLine) => {
      return currentLine.split(" ");
    })
    .flat();
  textArrayToWords = textArrayToWords.map((current) => {
    return current.toLowerCase();
  });

  textArrayToWords = textArrayToWords
    .map((current) => {
      return current.split("-");
    })
    .flat();

  console.log(textArrayToWords);
  const currency = currencyToWords(findAmountNumber(text));
  let individualWords = currency.split(" ");
  individualWords = individualWords.map((current) => current.split("-")).flat();
  const filteredTextWords = textArrayToWords.filter((current) => {
    return individualWords.includes(current);
  });
  console.log(filteredTextWords);
  return JSON.stringify(individualWords) === JSON.stringify(filteredTextWords);
  // const allInThere = individualWords.map((currentWord) => {
  //   return textArrayToWords.includes(currentWord);
  // });
  // const isValid = allInThere.reduce((acc, curr) => {
  //   return acc && curr;
  // });
  // return isValid;
};
