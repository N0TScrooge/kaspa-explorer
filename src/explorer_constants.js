let SOCKET_SERVER = process.env.WS_SERVER || "wss://api.kaspa.org";
let SUFFIX = ""
let API_SERVER = process.env.REACT_APP_API_SERVER || ""
let ADDRESS_PREFIX = "kaspa:"


switch (process.env.REACT_APP_NETWORK) {
    case "testnet-10":
        SOCKET_SERVER = "wss://api-tn10.kaspa.org";
        ADDRESS_PREFIX = "kaspatest:"
        if (!API_SERVER) {
            API_SERVER = "https://api-tn10.kaspa.org"
        }
        SUFFIX = " TN10"
        break;
    case "testnet-11":
        SOCKET_SERVER = "wss://api-tn11.kaspa.org";
        ADDRESS_PREFIX = "kaspatest:"
        if (!API_SERVER) {
            API_SERVER = "https://api-tn11.kaspa.org"
        }
        SUFFIX = " TN11"
        break;

    // mainnet
    default:
        SOCKET_SERVER = "wss://api.kaspa.org";
        if (!API_SERVER) {
            API_SERVER = "https://api.kaspa.org"
        }
        break;
}

export { SOCKET_SERVER, SUFFIX, API_SERVER, ADDRESS_PREFIX }