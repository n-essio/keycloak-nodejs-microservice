var express = require('express');
var router = express.Router();

const keycloak = require('../config/keycloak-config.js').getKeycloak();

router.get('/anonymous', (req, res) => {
    res.send("Hello Anonymous");
});
router.get('/user', keycloak.protect('user'), (req, res) => {
    res.send("Hello User");
});

router.get('/admin', keycloak.protect('admin'), (req, res) => {
    res.send("Hello Admin");
});

router.get('/all-user', keycloak.protect(['user','admin']), (req, res) => {
    res.send("Hello All User");
});

module.exports = router;
