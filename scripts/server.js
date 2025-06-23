const express = require('express')
const app = express()
const port = 3000

const path = require('path');

app.get('/', function (req, res) {
	// html 파일 경로 설정
	const htmlPath = path.resolve(__dirname + '/index.html');
    
    // html 파일 보여주기
    res.sendFile(htmlPath);
});

app.get('/connect', function (req, res) {
	// html 파일 경로 설정
	const htmlPath = path.resolve(__dirname + '/pages/connect.html');
    
    // html 파일 보여주기
    res.sendFile(htmlPath);
});

// 해당 포트로 서버를 시작하고 들어오는 요청 수신
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
