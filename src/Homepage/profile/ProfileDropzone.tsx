import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  modifyImg: (imgData: any) => void;
}

export function ProfileDropzone(props: any) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        props.modifyImg(binaryStr);
        console.log(binaryStr);
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const files = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section id="profile_image_dropzone">
      <div {...getRootProps({ id: "dropzone" })}>
        <input {...getInputProps()} />
        <p id="dropzone_text">Drag and drop here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}
