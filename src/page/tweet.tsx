import React, { useState } from 'react';

interface ITweetResponse {
    data: {
        edit_history_tweet_ids: string[];
        id: string;
        text: string;
    }
}

interface IFailResponse {
    message: string;
}

interface TweetSenderProps {
    userId: string;  // Assuming `userId` is a string
}

const TweetSender: React.FC<TweetSenderProps> = ({ userId }) => {
    const [tweetText, setTweetText] = useState<string>('');
    const [response, setResponse] = useState<ITweetResponse | null>(null);
    const [error, setError] = useState<string>('');

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTweetText(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = 'https://meropsybackend-production.up.railway.app/twitter/tweet';
        const body = JSON.stringify({
            tweetText: tweetText,
            user_id: userId  // Using the passed prop
        });

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const data: ITweetResponse | IFailResponse = await res.json();
            if (!res.ok) {
                throw new Error('Failed to post tweet');
            }
            setResponse(data as ITweetResponse);
            setTweetText('');
        } catch (error: any) {
            setError(error.message || 'Failed to post tweet');
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={tweetText}
                    onChange={handleTextChange}
                    placeholder="What’s happening?"
                    rows={4}
                    className="w-full h-32 rounded-md border bg-white border-[#E4E6EF] p-2"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">
                    Tweet
                </button>
            </form>
            {response && (
                <p className="relative py-3 pl-4 pr-10 leading-normal text-blue-700 bg-blue-100 rounded-lg m-4">Successfully posted tweet: {response.data.text} (ID: {response.data.id})</p>
            )}
            {error && (
                <p className="relative py-3 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg m-4">{error}</p>
            )}
        </div>
    );
};

export default TweetSender;
