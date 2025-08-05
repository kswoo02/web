const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// ✅ 정적 파일 서빙 (scripts → ../)
app.use(express.static(path.join(__dirname, "..")));

// ✅ 홈 페이지
app.get(["/", "/Home"], (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});

// ✅ 하위 페이지 라우팅
app.get("/About", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../pages/About.html"));
});

app.get("/Project", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../pages/Project.html"));
});

app.get("/Travel", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../pages/Travel.html"));
});

app.get("/Contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../pages/Contact.html"));
});

// ✅ 서버 실행
app.listen(port, () => {
  console.log(`✅ Server listening at http://localhost:${port}`);
});
