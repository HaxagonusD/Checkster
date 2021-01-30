import React, { useState } from "react";
import axios from "axios";

function FileUpload() {
	const [file, setFile] = useState("");

	function handleUpload(event) {
		setFile(event.target.files[0]);
	}

	console.log(file);

	return (
		<div id="upload-box">
			<input type="file" onChange={handleUpload} />
			{file && <ImageThumb image={file} />}
		</div>
	);
}

const ImageThumb = ({ image }) => {
	return <img src={URL.createObjectURL(image)} alt={image.name} />;
};

export default function App() {
	return <FileUpload />;
}
