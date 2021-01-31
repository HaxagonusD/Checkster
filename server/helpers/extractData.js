// Helper functions
const findDate = require("./findDate");
const validateCheck = require("./validateCheck");
const currencyToWords = require("./currencyToWords");
const findAmountNumber = require("./findAmountNumber");
const authentication = require("../authentication");
// import libraries
const vision = require("@google-cloud/vision");

async function extractData(filePath) {
  const projectId = "project-id";
  const keyFilename = "./authentication.json";
  const client = new vision.ImageAnnotatorClient({ projectId, keyFilename });
  const [result] = await client.documentTextDetection(filePath);
  const detections = result.fullTextAnnotation;
  const text = detections.text;
  const amount = findAmountNumber(text);
  const date = findDate(text);
  const wordsAmount = currencyToWords(amount);
  const valid = validateCheck(text);
  return { amound, date, wordsAmount, valid };
}

module.exports = extractData;
