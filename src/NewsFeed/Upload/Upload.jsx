import React from "react";
import "./Upload.css";

const Upload = () => {
  const handleUpload = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <div className="Upload">
      <input type="file" onChange={handleUpload} />
    </div>
  );
};

export default Upload;
