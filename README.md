 ```
# File Compression App

This app allows users to upload files and compress them using gzip compression. 

## How to use

### Step 1: Install dependencies

```
npm install express multer zlib fs body-parser
```

### Step 2: Run the app

```
node app.js
```

### Step 3: Upload a file

Visit http://localhost:3000 in your browser and select a file to upload. The file will be compressed and saved to the 'compressed' directory.

## Code walkthrough

The app is built using Express and Multer. The multer middleware is used to handle file uploads. The zlib library is used to compress the files.

The app has two routes:

* The root route ('/') serves the index page.
* The '/upload' route handles file uploads.

The '/upload' route uses the multer middleware to parse the uploaded file. The file is then compressed using zlib.gzipSync() and saved to the 'compressed' directory. The compressed file is then sent to the client.

## Conclusion

This app demonstrates how to use multer and zlib to compress files in a Node.js app.
```