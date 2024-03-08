// 发送 HTTP POST 请求
function sendHttpPostRequest(url, data, callback) {
  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      }
  };

  const req = http.request(url, options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
          responseData += chunk;
      });

      res.on('end', () => {
          callback(null, responseData);
      });
  });

  req.on('error', (err) => {
      callback(err, null);
  });

  req.write(JSON.stringify(data));
  req.end();
}

// 设置定时器
function setTimer(callback, delay) {
  setTimeout(callback, delay);
}