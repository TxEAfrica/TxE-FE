import React, { useState } from 'react';
import { BsCloudUpload } from 'react-icons/bs'; // Cloud icon from react-icons/bs
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ onImageChange }) => {
  const [image, setImage] = useState('');

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64String = reader.result;
      setImage(base64String);
      onImageChange(base64String);
    };
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop,
  });

  return (
    <div className="w-full flex justify-around h-36 p-4 mx-auto border-2 border-orange-300 rounded-md text-center overflow-hidden">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="text-gray-500">
          <BsCloudUpload className="mx-auto w-12 h-12" />
          <p>Drag & drop or click to upload</p>
        </div>
      </div>
      {image && (
        <div className="">
          <img src={image} alt="Uploaded" loading='lazy' className="w-36 mx-auto rounded-md" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
