// Import necessary hooks and functions
import { useState } from 'react';
import { refreshAccessToken } from './youtubeRefresh';

// Define an interface for the function props
interface UploadVideoProps {
    userId: string;
    videoPath: string;
    title: string;
    description: string;
    privacyStatus: 'public' | 'private' | 'unlisted';
}

// Define the function that handles the video upload
const useUploadVideo = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const [accessToken, setAccessToken] = useState('');

    const uploadVideo = async ({
        userId,
        videoPath,
        title,
        description,
        privacyStatus
    }: UploadVideoProps): Promise<void> => {
        setIsLoading(true);
        try {
            const response = await fetch('https://meropsybackend-production.up.railway.app/auth/upload-video', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId,
                    videoPath,
                    title,
                    description,
                    privacyStatus
                })
            });
            const data = await response.json();
            console.log(data.message);

            if (data.message === "Invalid Credentials") {
                try {
                    const data = await refreshAccessToken(userId);
                    setAccessToken(data.accessToken);
                    //alert('Access token has been refreshed!');
                } catch (error) {
                    alert('Failed to refresh access token');
                    console.error(error);
                }
            } else {
                setMessage(data.message || 'Video uploaded successfully!');
            }

        } catch (error: any) {
            setMessage('Failed to upload video: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { uploadVideo, isLoading, message };
};

export default useUploadVideo;
