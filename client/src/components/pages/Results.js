import React, { useState } from "react";
import "../Results.css";
import "../Upload.css";
import "../Display.css";
import Message from "../Message";
import Progress from "../Message";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import checkPlaceholder from "../images/checkPlaceholder.png";

import "../../App.css";

export default function Results() {
	const [file, setFile] = useState("");
	const [filename, setFilename] = useState("");
	const [uploadedFile, setUploadedFile] = useState({});
	const [message, setMessage] = useState("");
	const [uploadPercentage, setUploadPercentage] = useState(0);
	const [imageURL, setImageURL] = useState(checkPlaceholder);
	const [displayInfo, setDisplayInfo] = useState("");

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
					setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));

					// Clear percentage
					setTimeout(() => setUploadPercentage(0), 10000);
				},
			});
			console.log(res);

			const { fileName, filePath } = res.data;

			setUploadedFile({ fileName, filePath });
			setDisplayInfo(res);
			setMessage("Data processed.");
		} catch (err) {
			if (err.response.status === 500) {
				setMessage("There was a problem with the server.");
			} else {
				setMessage(err.response.data.msg);
			}
		}
	};

	console.log(displayInfo?.data, "display info");

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
				<form onSubmit={handelSumbit}>
					<div>
						<input type="file" id="customFile" onChange={handelFile} />
						<label htmlFor="customFile">{filename}</label>
					</div>

					<Progress percentage={uploadPercentage} />

					<input type="submit" value="Validate" />
				</form>

				{message ? <Message msg={message} /> : null}
			</div>
			<div className="display-section">
				<img src={imageURL} width="600" height="600" />
				{displayInfo ? (
					<div className="info">
						<p>
							<span className="info-subhead"> Amount:</span>&ensp; {displayInfo?.data?.extractedData?.amount}
						</p>
						<p>
							<span className="info-subhead"> Amount in Words:</span>&ensp; {displayInfo?.data?.extractedData?.wordsAmount}
						</p>
						<p>
							<span className="info-subhead"> Date:</span>&ensp; {displayInfo?.data?.extractedData?.date}
						</p>
						<p>
							<span className="info-subhead"> Validation:</span>&ensp;
							{displayInfo?.data?.extractedData?.valid?.validation ? "Valid" : "Invalid"}
						</p>
						<p>
							<span className="info-subhead">Data:</span>&ensp;{displayInfo?.data?.extractedData?.text}
						</p>
					</div>
				) : (
					<div className="info-placeholder">
						<h3>Your information will show up here after clicking validating</h3>
					</div>
				)}
			</div>
		</div>
	);
}
