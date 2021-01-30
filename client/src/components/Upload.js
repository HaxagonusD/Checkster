import React from "react";

function FileUpload() {
	const [file, setFile] = React.useState("");
	function handleUpload(event) {
		setFile(event.target.files[0]);
	}

	return (
		<div id="upload-box">
			<input type="file" onChange={handleUpload} />
			<p>Filename: {file.name}</p>
			<p>File type: {file.type}</p>
			<p>File size: {file.size} bytes</p>
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
