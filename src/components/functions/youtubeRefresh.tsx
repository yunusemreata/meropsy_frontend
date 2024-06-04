// utils/api.js
import axios from 'axios';

export const refreshAccessToken = async (userId: string) => {
    try {
        const url = `https://meropsybackend-production.up.railway.app/auth/refresh-access-token?userId=${userId}`;
        const response = await axios.get(url);
        return response.data; // accessToken ve diğer bilgileri içeren yanıtı döndürür
    } catch (error) {
        console.error('Error refreshing access token:', error);
        throw new Error('Failed to refresh access token');
    }
};
