"use client"
import React, { useState } from 'react';

function UploadForm() {
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState('');

    const handleFileChange = (event:any) => {
        setFile(event.target.files[0]);  // Selecting the file
    };

    const handleCaptionChange = (event:any) => {
        setCaption(event.target.value);  // Updating the caption
    };

    const handleSubmit = async (event:any) => {
        event.preventDefault();

        if (!file) {
            alert('Lütfen bir dosya seçin.');
            return;  // Ensure there's a file before submitting
        }

        const formData = new FormData();
        formData.append('file', file);

        if (caption) {
            formData.append('caption', caption);
        }

        const userId = localStorage.getItem('userId');  // Replace 'USER_ID' with the actual user ID

        try {
            const response = await fetch('https://meropsybackend-production.up.railway.app/instagram/upload-post/' + userId, {
                method: 'POST',
                credentials: 'include',
                body: formData
            });
            const data = await response.json();
            console.log(data);
            alert('Yükleme başarılı!');
        } catch (error) {
            console.error('Yükleme sırasında bir hata oluştu:', error);
            alert('Yükleme başarısız.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fileInput">Dosya Seçin:</label>
            <input type="file" id="fileInput" onChange={handleFileChange} required />
            <br />
            <label htmlFor="captionInput">Açıklama (isteğe bağlı):</label>
            <input type="text" id="captionInput" value={caption} onChange={handleCaptionChange} />
            <br />
            <button type="submit">Yükle</button>
        </form>
    );
}

export default UploadForm;
