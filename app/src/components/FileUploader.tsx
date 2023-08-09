import React, { useState, useRef } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { handleNotification } from "../utils/handleNotifications";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { setIsLoading } = useAppContext();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.error) {
        setIsLoading(false);
        return handleNotification({ success: false, message: data.error });
      }

      setIsLoading(false);
      return handleNotification({ success: true, message: data.message });
    }
    return handleNotification({ success: false, message: "File is required" });
  };

  return (
    <div className="shadow-md p-6 bg-white flex flex-col items-center space-y-4">
      <input
        type="file"
        id="fileInput"
        data-testid="fileInput"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      <button
        onClick={openFileDialog}
        className="px-4 py-2 bg-white text-black border border-black rounded cursor-pointer"
      >
        Choose File
      </button>
      <div className="flex items-center space-x-4">
        {selectedFile && (
          <div className="text-black text-lg">{selectedFile.name}</div>
        )}
        <button
          className="px-4 py-2 bg-gray-200 text-black rounded cursor-pointer"
          onClick={handleUpload}
        >
          Upload File
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
