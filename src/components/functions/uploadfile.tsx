import axios from 'axios';

interface UploadFileProps {
  userId: string;
  file: File;
}

const uploadFile = async ({ userId, file }: UploadFileProps): Promise<void> => {
  const url = `https://meropsybackend-production.up.railway.app/medya/file/upload/${userId}`;

  // FormData nesnesi oluştur
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    // Başarılı yükleme sonucu
    console.log('File uploaded successfully:', response.data);
  } catch (error) {
    // Hata durumunda
    console.error('Error uploading file:', error);
  }
};

export default uploadFile;
