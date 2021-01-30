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
  const fileName = "../ai/validation/0429.jpg";
  // Performs text detection on the local file
  const [result] = await client.documentTextDetection(fileName);
  const detections = result.fullTextAnnotation;
  console.log("Text:");
  console.log(detections);
})();
