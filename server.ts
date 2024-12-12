import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;

// Phục vụ các tệp tĩnh từ thư mục 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Điều hướng tất cả các yêu cầu khác đến index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Bắt đầu server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
