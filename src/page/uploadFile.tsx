import React, { useState } from 'react';
import uploadFile from '@/components/functions/uploadfile';
import { set } from 'react-hook-form';

interface FileUploaderProps {
  userId: string;  // Assuming `userId` is a string
}

const FileUploader: React.FC<FileUploaderProps> = ({ userId }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  //const userId = 'your-user-id'; // Kullanıcı ID'nizi buraya girin

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    setUploading(true);
    if (file) {
      try {
        await uploadFile({ userId, file });
        //alert('File uploaded successfully');
      } catch (error) {
        alert('Error uploading file');
      } finally {
        setUploading(false);
      }

      
    }
  };

  return (
    <div className='container border p-3'>
      <input className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" type="file" onChange={handleFileChange} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5 mt-5" onClick={handleUpload}>{ uploading == false ? "Upload File" : "Uploading..." }</button>
    </div>
  );
};

export default FileUploader;
