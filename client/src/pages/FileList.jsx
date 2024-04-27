import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FileList() {
    const [fileList, setFileList] = useState([]);

    useEffect(() => {
        async function fetchFiles() {
            try {
                const response = await axios.get('/files'); // Adjust the endpoint based on your API setup
                setFileList(response.data);
            } catch (error) {
                console.error('Error fetching files:', error);
            }
        }

        fetchFiles();
    }, []);

    return (
        <div>
            <h2>File List</h2>
            <ul>
                {fileList.map((fileName, index) => (
                    <li key={index}>
                        <a href={`/uploads/${encodeURIComponent(fileName)}`} target="_blank" rel="noopener noreferrer">{fileName}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
