const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5500;
var app_path = '../dist/ng10-template';




app.use('/', express.static(path.join(__dirname, app_path)))
app.get('*', (req,res)=>    res.sendFile(path.join(__dirname, app_path + '/index.html')));


app.listen(PORT, ()=>{
	console.log(`Listening to port, ${PORT}`);
})