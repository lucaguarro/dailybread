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


app.get('/api/reviews/:sellerid', (req, res) => 
{
    //conn.connect()
    var sellerid = req.params['sellerid'];
    conn.query('SELECT * from reviews WHERE sellerID="' + sellerid + '"', function(err, rows, fields) {
        if (!err)
        {
            console.log('The solution is: ', rows);
            res.send(rows);
        }
        else
          console.log(err);
      });
      //conn.end();
});

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')));

app.listen(3000, () => console.log('Listening on port 3000!'));
