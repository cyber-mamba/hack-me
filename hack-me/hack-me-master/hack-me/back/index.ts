import express, { Request, Response } from 'express';
import multer from 'multer';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 3001;

// setting file strage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

// const upload = multer({ storage: storage });
const upload = multer({ dest: 'upload/'})

app.post('/upload', upload.single('file'), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }
  return res.status(200).json({
    message: 'File uploaded successfully.',
    filename: req.file.filename
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
