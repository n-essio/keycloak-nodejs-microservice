var session = require('express-session');
var Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    clientId: 'cps_timbrature_ng',
    bearerOnly: false,
    serverUrl: 'https://sso.n-ess.it/auth',
    // realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAO...'
    realm: 'lab'
    // ,
    // credentials: {
    //     secret: '18adcdad-1a96-4066-9217-6cab0e7b461e'
    // }
};


function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    }
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    }
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};
