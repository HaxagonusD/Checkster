// Helper functions
const findDate = require("./helpers/findDate");
const validateCheck = require("./helpers/validateCheck");
const currencyToWords = require("./helpers/currencyToWords");
const findAmountNumber = require("./helpers/findAmountNumber");
const authentication = require("./authentication");
// import libraries
const vision = require("@google-cloud/vision");
const fs = require("fs");

//These are the settings for creating the google vision client
const projectId = "project-id";
const keyFilename = "./authentication.json";

const validateChecksInDirectory = async (path, client) => {
  // const dir = await fs.promises.opendir(path);
  // for await (const dirent of dir) {
  //   const fullPath = `${path}${dirent.name}`;
  //
  const [result] = await client.documentTextDetection(path);
  //
  const detections = result.fullTextAnnotation;
  //   const thisCheckValidation = validateCheck(detections.text);
  //   console.log(`${fullPath} - validation: ${thisCheckValidation}`);
  // }
  //   const fileName = "../ai/images/image_13.jpg";
  //   // Performs text detection on the local file

  console.log(validateCheck(detections.text));
};

(async () => {
  const client = new vision.ImageAnnotatorClient({ projectId, keyFilename });
  validateChecksInDirectory(
    /*"../ai/images/"*/ "../ai/images/image_20.jpg",
    client
  );
})();
