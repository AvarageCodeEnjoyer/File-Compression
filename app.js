const express = require('express');
const multer = require('multer');
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

// Set up multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve static files from the 'public' directory

// Set Views
app.set('./views', 'views')
app.set('view engine', 'ejs')
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: false }));


// Route for the file upload form
app.get('/', (req, res) => {
  res.render('index');
});

// Route to handle file upload and compression
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const inputBuffer = req.file.buffer;
  const compressedBuffer = zlib.gzipSync(inputBuffer);
  const fileName = `${Date.now()}_compressed.gz`;

  // Save the compressed file to the 'compressed' directory
  fs.writeFileSync('compressed', fileName);

  res.attachment(fileName);
  res.send(compressedBuffer);
});

app.listen(port, () => {
  console.log(`Server is running on: http://127.0.0.1/${port}`);
});
