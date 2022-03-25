const express = require('express');
const path = require('path');
const fs = require('fs');
let app = express();

app.use((req, res, next) => {
    fs.appendFileSync('log.txt', `${req.url}\n`);
    next();
});



// app.get('/', (req, res) => {
//     res.send('hellow world');
// });

app.use(express.static(path.join(__dirname, '../public')));


app.listen(3000);