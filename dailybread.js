const express = require('express');
const path = require('path');
const app = express();


app.get('/api/', (req, res) => 
{
    let {id, user} = req.params;
    res.write("Your id is " + id + ".<br>");
    res.end("Your user is " + user + ".")

});

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')));

app.listen(3000, () => console.log('Listening on port 3000!'));
