let express = require('express');
let PORT = 1563;
let exphbs = require('express-handlebars');
let path = require('path');
let bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

let mgmapp = express();

mgmapp.use('/static', express.static(path.join(__dirname, 'public')))
mgmapp.use(bodyParser.json());
mgmapp.use(bodyParser.urlencoded({
    extended: true
}));
mgmapp.use(cookieParser())

mgmapp.engine('hbs', exphbs({
    extname: 'hbs',
    partialsDir: path.join(__dirname, 'views/partials'),
    defaultLayout: 'layout.hbs'
}));

mgmapp.set('view engine', 'hbs');
mgmapp.set('views', path.join(__dirname, 'views'));

mgmapp.get('/', (req, res) => {
    res.render('home');
});

mgmapp.listen(`${PORT}`, () => {
    console.log(`localhost:${PORT}`);
});