import React, { useState, useEffect } from 'react';
import fetchFiles from '@/components/functions/fetchFiles';
import { Loader2 } from "lucide-react";

interface FileDetails {
    fileName: string;
    url: string;
}

interface FileListProps {
    userId: string;
    onChangeData: (newUrl: string) => void;
}

const FileList: React.FC<FileListProps> = ({ userId, onChangeData }) => {
    const [files, setFiles] = useState<FileDetails[]>([]);
    const [login, setLogin] = useState(false);
    const [selectedFile, setSelectedFile] = useState('');

    useEffect(() => {
        const loadFiles = async () => {
            setLogin(true);
            try {
                const fetchedFiles = await fetchFiles(userId);
                setFiles(fetchedFiles);
                setLogin(false);
            } catch (error) {
                console.error('Failed to load files:', error);
            }
        };

        loadFiles();
    }, [userId]);

    const handleFileSelect = (file: FileDetails) => {
        setSelectedFile(file.fileName);
        onChangeData(file.fileName);
    };

    return (
        <div className='container border p-3'>
            <ul className='p-3'>
                {login && <div className="flex justify-center items-center">
                    <Loader2 className="h-8 w-8 animate-spin" />
                    <h2>Data Fetching...</h2>
                </div>}
                {files.map(file => (
                    <li key={file.fileName} style={{
                        display: 'flex', 
                        alignItems: 'center', 
                        marginBottom: '10px',
                        backgroundColor: file.fileName === selectedFile ? '#f0f0f0' : 'transparent'
                    }}>
                        <div style={{ marginRight: '20px' }}>
                            <video src={file.url} style={{ width: '300px', height: 'auto' }}></video>
                        </div>
                        <div>
                            <button onClick={() => handleFileSelect(file)}>{file.fileName}</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;
