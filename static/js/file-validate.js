function assertFilesValid(fileList) {
  const allowedTypes = ['image/webp', 'image/jpeg', 'image/png'];
  const sizeLimit = 1024 * 1024; // 1 megabyte

  for (const file of fileList) {
    const { name: fileName, size: fileSize } = file;

    if (!allowedTypes.includes(file.type)) {
      throw new Error(`❌ File "${fileName}" could not be uploaded. Only images with the following types are allowed: WEBP, JPEG, PNG.`);
    }

    // ↓ the new condition ↓
    if (fileSize > sizeLimit) {
      throw new Error(`❌ File "${fileName}" could not be uploaded. Only images up to 1 MB are allowed.`);
    }
  }
}