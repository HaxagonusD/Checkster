import React, { useState } from "react";
import "../Results.css";
import Message from "../Message";
import Progress from "../Message";
import axios from "axios";

import "../../App.css";

export default function Results() {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [imageURL, setImageURL] = useState("");

  const handelFile = (e) => {
    const fileObject = e.target.files[0];
    setFile(fileObject);
    setFilename(fileObject.name);
    const newUrl = URL.createObjectURL(fileObject);
    console.log(newUrl);
    setImageURL(newUrl);
  };

  const handelSumbit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/results", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        },
      });
      console.log(res);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <div className="results-container">
      <div className="upload-section">
        <h2>
          You click a few buttons. <br />
          <span className="number-order">We'll handle the rest.</span>
        </h2>
        <p className="steps">
          Get check image. Upload it. Click validate. <br />
          Easy as one, two, three!
        </p>
        {message ? <Message msg={message} /> : null}
        <form onSubmit={handelSumbit}>
          <div>
            <input type="file" id="customFile" onChange={handelFile} />
            <label htmlFor="customFile">{filename}</label>
          </div>

          <Progress percentage={uploadPercentage} />

          <input type="submit" value="Validate" />
        </form>
        {uploadedFile ? (
          <div>
            <div>
              <h3 className="text-center">{uploadedFile.fileName}</h3>
              <img
                style={{ width: "200px" }}
                src={uploadedFile.filePath}
                alt=""
              />
            </div>
          </div>
        ) : null}
        {uploadedFile.filePath}
      </div>
      <div className="display-section">
        <h1>View Check Below</h1>
        <img alt="Uploaded File" src={imageURL} width="600" height="600" />
      </div>
    </div>
  );
}
