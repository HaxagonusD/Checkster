const validateCheck = require("./helpers/validateCheck");
const currencyToWords = require("./helpers/currencyToWords");
const findAmountNumber = require("./helpers/findAmountNumber");
const authentication = require("./authentication");
const vision = require("@google-cloud/vision");
const projectId = "project-id";
const keyFilename = "./authentication.json";
// Creates a client
(async () => {
  const client = new vision.ImageAnnotatorClient({ projectId, keyFilename });

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  const fileName = "../ai/images/image_13.jpg";
  // Performs text detection on the local file
  const [result] = await client.documentTextDetection(fileName);
  const detections = result.fullTextAnnotation;
  console.log("Text:");
  console.log("Dections", detections);
  console.log("Dectections.text", detections.text);
  console.log(currencyToWords(findAmountNumber(detections.text)));
  console.log(validateCheck(detections.text));
})();
