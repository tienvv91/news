const express = require('express');
const cors = require('cors');
const apiPrefix = '/v1'
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('compression')());
app.use(require('express-mongo-sanitize')());
app.use(require('xss-clean')());

app.use(cors());

// NOTE Use fake user until we implement proper authentication
app.use(function (req, res, next) {
    req.user = {
        account: 'admin',
    };
    next();
});

app.use(express.static(path.join(__dirname, '../static')));
app.use(require('./middlewares/mongo-params'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../static', 'index.html'))
})

app.use(apiPrefix, require('./routes'));
const port = 9000
const host = '0.0.0.0'
let server = app.listen(port, host, () => {
    console.log(`Listening to requests on ${host}:${port}`);
});


process.on('SIGTERM', () => {
    console.error('SIGTERM received. Exiting...');
    if (server) {
        server.close();
    }
});