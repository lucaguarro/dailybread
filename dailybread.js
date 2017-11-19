const express = require('express');
const path = require('path');
const app = express();

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

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

app.post('/api/create/seller', (req, res) =>
{
    var {name, description, street, city, state, zipcode, profilePic, deliveryRadius} = req.body;
    var address = street + " " + city + ", " + state + " " + zipcode;
    conn.query('INSERT INTO sellers (name, description, address, profilePic, deliveryRadius, delivers) VALUES (?, ?, ?, ?, ?, "yes")', 
    [name, description, address, profilePic, deliveryRadius], function (err, rows, fields) 
    {
        if (!err)
        {
            res.send("Post successful");
        }
        else
        {
            console.log(err);
            res.send("Post failed");
        }
           
    })
})

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')));

app.listen(3000, () => console.log('Listening on port 3000!'));
