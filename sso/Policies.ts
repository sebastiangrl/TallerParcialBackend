module Policies {
    const key:string = "a917d01789b58dfd3a702c715496269886f5d363d7445f42ee7b963e9de2a1da7dfbf0b88248ca648e69927353c0a76aaccd1d9b2ef1e32a7fe18ca3710f8929";
    
    export function verifyHost(host: string | undefined, hostValue: string) {
        return (host != hostValue) ? false : true;
    }

    export function verifyApiKey(apiKey: string | undefined) {
        let response = { error: true, msg: "No API Key", status: 403 };

        if (apiKey) {
            if (apiKey !== key) {
                response.status = 401;
                response.msg = "Not a valid API Key";
            } else {
                response.error = false;
            }
        }

        return response;
    }
}

export default Policies;