'use strict';
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const port = 3000;

//älä tee näin projektissa!!

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const username = 'foo';
const password = 'bar';

app.use(cookieParser());
app.use(session({
  secret: '1234',
  resave: false,
  saveUninitialized: true,
}));

app.set('views', './views');
app.set('view engine', 'pug');

app.post('/login', (req, res) => {
  const uname = req.body.username;
  const passwd = req.body.password;
  if (uname === username && passwd === password) {
    req.session.authenticated = true;
    res.redirect('/secret');
  } else {
    res.redirect('/form');
  }
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.get('/secret', (req, res) => {
  if(req.session.authenticated) {
    res.render('secret');
  }else {
    res.redirect('/form');
  };
  res.render('secret');
});

//älä tee näin projektissa!!

app.get('/setCookie/:clr', (req, res) => {
  res.cookie('color', req.params.clr, {httpOnly: true}).send('Cookie set');
});

app.get('/getCookie', (req, res) => {
  console.log('Cookies', req.cookies);
  res.send('Cookie read');
});

app.get('/deleteCookie', (req, res) => {
  res.clearCookie('color');
  res.send('Cookie deleted');
});

//älä tee näin projektissa!!

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
