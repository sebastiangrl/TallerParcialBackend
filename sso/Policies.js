"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Policies;
(function (Policies) {
    const key = "a917d01789b58dfd3a702c715496269886f5d363d7445f42ee7b963e9de2a1da7dfbf0b88248ca648e69927353c0a76aaccd1d9b2ef1e32a7fe18ca3710f8929";
    function verifyHost(host, hostValue) {
        return (host != hostValue) ? false : true;
    }
    Policies.verifyHost = verifyHost;
    function verifyApiKey(apiKey) {
        let response = { error: true, msg: "No API Key", status: 403 };
        if (apiKey) {
            if (apiKey !== key) {
                response.status = 401;
                response.msg = "Not a valid API Key";
            }
            else {
                response.error = false;
            }
        }
        return response;
    }
    Policies.verifyApiKey = verifyApiKey;
})(Policies || (Policies = {}));
exports.default = Policies;
