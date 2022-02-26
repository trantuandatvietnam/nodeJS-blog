const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
// Khi submit mặc định bằng html
app.use(express.urlencoded({ extended: true }));
// Khi sử dụng Js submit, hoặc thư viện nào đó viết bằng JS (XMLHttpRequest/ fetch/ axios/...)
app.use(express.json());

// template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// http logger
app.use(morgan('combined'));

// Routes init
route(app);

// listen port
app.listen(port, () => {
    console.log('localhost:' + port);
});
