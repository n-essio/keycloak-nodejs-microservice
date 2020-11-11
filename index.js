var express = require('express');
var app = express();
const session = require("express-session");

var memoryStore = new session.MemoryStore();
app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));


const keycloak = require('./config/keycloak-config.js').initKeycloak();
app.use(keycloak.middleware());

var testController = require('./controller/test-controller.js');
app.use('/test', testController);

app.get('/', function(req, res){
    res.send("Server is up!");
});

app.listen(3000);
