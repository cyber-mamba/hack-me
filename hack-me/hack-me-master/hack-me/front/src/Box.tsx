import * as React from 'react';
import Button from '@mui/material/Button';

interface UploadButtonProps {
    onFileUpload: () => void;
}

export default function UploadButton(props: UploadButtonProps) {
    return (
        <Button variant="contained" component="span" onClick={props.onFileUpload}>
            Upload your shell...
        </Button>
    );
}
