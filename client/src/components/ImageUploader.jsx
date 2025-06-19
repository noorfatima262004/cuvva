import React from 'react';

function ImageUploader() {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Uploaded file:", file.name);
    }
  };

  
  return (
    <div className="image-upload-container">
      <input
        type="file"
        id="upload"
        className="image-upload-input"
        onChange={handleImageChange}
        accept="image/*"
      />
      
      <label htmlFor="upload" className="image-upload-label">
        Upload Image
      </label>
    </div>
  );
}

export default ImageUploader;