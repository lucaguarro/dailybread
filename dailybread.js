const express = require('express');
const path = require('path');
const app = express();


var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : '138.68.227.178',
  user     : 'root',
  password : 'root',
  database : 'dailybread'
});

app.get('/api/sellers', (req, res) => 
{
    conn.query('SELECT * from sellers', function(err, rows, fields) {
        if (!err)
        {
            res.send(rows);
        }
        else
            console.log(err);
    });
});

app.get('/api/sellers/:sellerid', (req, res) => 
{
    var sellerid = req.params['sellerid'];
    conn.query('SELECT * from sellers WHERE sellerID=?', [sellerid], function(err, rows, fields) {
        if (!err)
        {
            res.send(rows);
        }
        else
            console.log(err);
    });
});

app.get('/api/reviews/:sellerid', (req, res) => 
{
    var sellerid = req.params['sellerid'];
    conn.query('SELECT * from reviews WHERE sellerID=?', [sellerid], function(err, rows, fields) {
        if (!err)
        {
            res.send(rows);
        }
        else
          console.log(err);
    });
});

app.get('/api/menu/:sellerid', (req, res) =>
{
    var sellerid = req.params['sellerid'];
    conn.query('SELECT * from fooditems WHERE sellerID=?', [sellerid], function(err, rows, fields) {
        if (!err)
        {
            res.send(rows);
        }
        else
            console.log(err);
    });
})

app.post('/api/newseller', (req, res) =>
{
    var {sellerid, name, description, street, city, state, zipcode} = req.params;
    var address = street + " " + city + ", " + state + " " + zipcode;
    conn.query('INSERT INTO sellers (sellerID, name, description, address) VALUES (?, ?, ?, ?)', [sellerid, name,
            description, address], function (err, rows, fields) 
    {
        if (!err)
        {
            res.send("Post successful");
        }
        else
            console.log(err);
    })
})

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')));

app.listen(3000, () => console.log('Listening on port 3000!'));
