const https = require('https');

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts/1',
  method: 'GET',
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('API Response:', JSON.parse(data));
  });
});

req.on('error', (error) => {
  console.error('Error fetching data:', error);
});

req.end();
