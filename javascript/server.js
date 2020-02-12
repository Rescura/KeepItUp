const http = require('http');
const path = require('path');
const fs = require('fs');
const fb  = require('firebase/app')

const mimeType = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ttf' : 'application/font-sfnt'
}
const rootDir = path.join(__dirname, '..\\.\\');
console.log(rootDir);

var app = http.createServer(function (req, res) {
  var url = req.url;
  console.log("요청한 url : " + url)
  if (url = '/') {
    url = '\\html\\index.html';
  }
  var pathObj = path.parse(url);

  //pathObj 객체의 속성 확인
  for (var a in pathObj) { 
    console.log("속성 : " + a + ", 값 : " + pathObj[a]);
  }

  var reqExt = pathObj.ext;


  var reqAbUrl = rootDir + url;
  console.log("요청한 파일의 확장자 : " + reqExt);
  console.log("요청한 url의 절대경로 : " + reqAbUrl);

  if (Object.keys(mimeType).includes(reqExt)) {
    fs.readFile(reqAbUrl, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('Not found');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', mimeType[reqExt]);
        res.end(data);
      }
    });
  } else {
    res.statusCode = 200;
  }
});

app.listen(80, '127.0.0.1');

console.log('Server running at http://127.0.0.1:80/');