import axios from 'axios';

// Dosya bilgileri için interface tanımlaması
interface FileDetails {
  fileName: string;
  url: string;
}

// Kullanıcıya ait dosyaları çekmek için fonksiyon
const fetchFiles = async (userId: string): Promise<FileDetails[]> => {
  const url = `https://meropsybackend-production.up.railway.app/medya/file/list/${userId}`;
  try {
    const response = await axios.get<FileDetails[]>(url);
    console.log('Files fetched successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching files:', error);
    throw error;
  }
};

export default fetchFiles;
