import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  modifyImg: (imgData: any) => void;
}

export const ProfileDropzone: React.FC<Props> = (props) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onload = () => {
        const binaryStr = reader.result;
        props.modifyImg(binaryStr);
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <section id="profile_image_dropzone">
      <div {...getRootProps({ id: "dropzone" })}>
        <input {...getInputProps()} />
        <p id="dropzone_text">Drag and drop here, or click to select files</p>
      </div>
    </section>
  );
};
