import React from 'react';
import { useState, useEffect } from 'react'

import useUploadVideo from '@/components/functions/youtubeUpload';

interface VideoUploaderProps {
    userId: string;
    videoPath: string;
}

const VideoUploaderComponent: React.FC<VideoUploaderProps> = ({ userId, videoPath }) => {
    const { uploadVideo, isLoading, message } = useUploadVideo();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [privacyStatus, setPrivacyStatus] = useState('public');

    const handleTitleChange = (event: any) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: any) => {
        setDescription(event.target.value);
    };

    const handlePrivacyStatusChange = (event: any) => {
        setPrivacyStatus(event.target.value);
    };

    const handleUpload = () => {
        uploadVideo({
            userId: userId,
            videoPath: "uploads/" + userId + "/" + videoPath,
            title: title,
            description: description,
            privacyStatus: privacyStatus as 'public' | 'private' | 'unlisted'
        });
    };

    return (
        <div className='container mt-5'>

            <div className="flex justify-between">
                <input className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    type="text"
                    placeholder='Title'
                    value={message == "Video uploaded successfully!" ? "" : title}
                    onChange={handleTitleChange} />

                <input className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3  ml-3"
                    type="text"
                    placeholder='Description'
                    value={message == "Video uploaded successfully!" ? "" :description}
                    onChange={handleDescriptionChange} />
            </div>



            <select className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                name="privacyStatus"
                value={message == "Video uploaded successfully!" ? "" : privacyStatus}
                onChange={handlePrivacyStatusChange}>
                <option value="public" selected>Select Privacy Status</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="unlisted">Unlisted</option>
            </select>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5 mt-5" onClick={handleUpload} disabled={isLoading}>
                {isLoading ? 'Uploading...' : 'Upload Video'}
            </button>
            {message == "Video uploaded successfully!" ? <p className="relative py-3 pl-4 pr-10 leading-normal text-blue-700 bg-blue-100 rounded-lg m-4">{message}</p> : <p className="relative py-3 pl-4 pr-10 leading-normal text-blue-700 bg-blue-100 rounded-lg m-4">Please Try Again</p>}
        </div>
    );
};

export default VideoUploaderComponent;
