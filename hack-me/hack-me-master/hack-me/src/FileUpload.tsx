import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadButton from './Box';
import React, { useState } from 'react';

interface PostFormProps {
    file: File;
}

function PostForm({ file }: PostFormProps) {
    // フォームの送信ロジック
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // デフォルトの送信動作を防止

        const formData = new FormData();
        formData.append('file', file);

        fetch('http://localhost/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
    };

    return null;
}
export default PostForm;

export function MyDropzoneBasic() {

    // invoke ondrop when file is droped
    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log(acceptedFiles);
        if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
            setFileName(acceptedFiles[0].name);
            uploadFile(acceptedFiles[0]);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState('');
    
    const uploadFile = (file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        fetch('http://localhost/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => console.log('Upload success:', data))
        .catch(error => console.error('Upload error:', error));
    };

    return (
        <div>
            <div {...getRootProps()}>{/* (3) */}
                <input {...getInputProps()} />{/* (3) */}
                <p>
                    <UploadButton onFileUpload={() => {}} />
                    {fileName && <p>{fileName} is uploaded! </p>}
                    {file && <PostForm file={file} />}
                </p>
            </div>
        </div>
    );
}


