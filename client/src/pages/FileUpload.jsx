import React, { useState } from 'react';
import axios from 'axios';

export default function FileUpload() {
    const [file, setFile] = useState(null);
    // const [foi, setFoi] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle file selection
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Function to handle file upload
    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', file);

            // Make a POST request to the server to upload the file
            const response = await axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setMessage(response.data);
        } catch (error) {
            setMessage('File upload failed');
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className='flex flex-col gap-2 mt-12 max-w-[450px] justify-center items-center mx-auto'>
            {/* <input type="text" placeholder='Field of Interest' value={foi} onChange={ev => setFoi(ev.target.value)} /> */}
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} className='w-full justify-center items-center mx-auto mt-4'>Upload File</button>
            {message && <p>{message}</p>}
        </div>
    );
}
