// src/components/TweetWithMedia.tsx
import React, { useState } from 'react';

interface TweetWithMediaProps {
    userId: string;  // Prop olarak userId tanımlanıyor
}

const TweetWithMedia: React.FC<TweetWithMediaProps> = ({ userId }) => {
    const [file, setFile] = useState<File | null>(null);
    const [tweetText, setTweetText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [response, setResponse] = useState<any>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files ? event.target.files[0] : null);
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTweetText(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!file || !tweetText) {
            setError('Please provide both a file and text for the tweet.');
            return;
        }

        const formData = new FormData();
        formData.append('media', file);
        formData.append('tweetText', tweetText);
        formData.append('userId', userId);  // Kullanılan userId prop'u

        setLoading(true);
        setError('');
        try {
            const response = await fetch('https://meropsybackend-production.up.railway.app/twitter/tweet-with-media', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to post tweet');
            }

            setResponse(data);
            setFile(null);
            setTweetText('');
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input className="w-full rounded-md border bg-white border-[#E4E6EF] p-2 mb-5" type="file" onChange={handleFileChange} />
                <textarea className="w-full h-32 rounded-md border bg-white border-[#E4E6EF] p-2" value={tweetText} onChange={handleTextChange} placeholder="Write your tweet here..." />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5" type="submit" disabled={loading}>
                    {loading ? 'Posting...' : 'Post Tweet with Media'}
                </button>
            </form>
            {error && <p className="relative py-3 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg m-4" style={{ color: 'red' }}>{error}</p>}
            {response && <div className="relative py-3 pl-4 pr-10 leading-normal text-blue-700 bg-blue-100 rounded-lg m-4">
                <p>Successfully posted tweet: {response.data.text}</p>
                <p>Tweet ID: {response.data.id}</p>
            </div>}
        </div>
    );
};

export default TweetWithMedia;
