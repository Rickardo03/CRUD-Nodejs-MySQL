const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//importando rutas
const customerRoutes = require ('./routes/customer')

//ajustes
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306,
    database:'crudnodejsmysql'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', customerRoutes);
//app.use('/add', customerRoutes)


//static files
app.use(express.static(path.join(__dirname, 'public')));


// empezando el servidor


app.listen(app.get('port'), () => {
    console.log('Servidor en puerto 3000');
});