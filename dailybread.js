const express = require('express');
const path = require('path');
const request = require("request");
const app = express();

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var geoKey = "AIzaSyDzx3H9qPE2t5mBnfS2W8879F1B4gsNp5o";

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
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + geoKey;
    request.get(url, (error, response, body) => {
        let json = JSON.parse(body);
        address = json.results[0].formatted_address;
        var lat = json.results[0].geometry.location.lat;
        var lng = json.results[0].geometry.location.lng;
        console.log(
          `City: ${json.results[0].formatted_address} -`,
          `Latitude: ${json.results[0].geometry.location.lat} -`,
          `Longitude: ${json.results[0].geometry.location.lng}`
        );
        conn.query('INSERT INTO sellers (name, description, address, profilePic, deliveryRadius, delivers, lat, lng) VALUES (?, ?, ?, ?, ?, "yes", ?, ?)', 
        [name, description, address, profilePic, deliveryRadius, lat, lng], function (err, rows, fields) 
        {
            if (!err)
            {
                console.log("Post successful");
                res.redirect("/");
            }
            else
            {
                console.log(err);
                res.send("Post failed");
            }
               
        })
      });
})

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')));

app.listen(3000, () => console.log('Listening on port 3000!'));
