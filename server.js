const express = require('express');
const path = require('path');

const app = express();

const dirPath = '/dist/landing';

app.use(express.static(__dirname + dirPath));

app.listen(process.env.PORT || 8080, '192.168.68.114');

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname + dirPath + '/index.html'));
});
