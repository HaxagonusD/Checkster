import React, { useState } from "react";
import axios from "axios";
import "../css/Upload.css";

const Upload = () => {
	const [file, setFile] = useState("");
	const [filename, setfilename] = useState("");
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
			const res = await axios.post("/uploads", formData, {
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
		<div className="upload-form">
			<form onSubmit={handleSumbit}>
				<input type="file" onChange={handelFile} />
				<label htmlFor="customFile"> {filename}</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default Upload;
