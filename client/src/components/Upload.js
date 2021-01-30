import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState("");
  const [filename, setfilename] = useState("chose file ");
  const [upLoadingFile, setUpLoadingFile] = useState({});
  const handelFile = (e) => {
    setFile(e.target.files[0]);
    setfilename(e.target.files[0].name);
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileName, filePath } = res.data;
      setUpLoadingFile({ fileName, filePath });
    } catch (error) {
      if (error.response.status === 500) {
        console.log("there are problem from the server");
      } else {
        console.log(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input type="file" onChange={handelFile} />
        <label htmlFor="customFile"> {filename}</label>

        <input type="submit" value="Sumbit" />
      </form>
    </div>
  );
};

export default Upload;
