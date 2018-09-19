let websockets = {};
let websocketNb = 0;

const websocketBindings = (getModule) => ({
    create(url) {
        websockets[websocketNb++] = new WebSocket(getModule().getString(url));
        return websocketNb - 1;
    },
    onopen(ws, cb) {
        if (websockets[ws] !== undefined)
            websockets[ws].onopen(() => {
                getModule().table.get(cb)();
            });
    },
    onclose(ws, cb) {
        if (websockets[ws] !== undefined)
            websockets[ws].onopen(() => {
                getModule().table.get(cb)();
            });
    },
    onerror(ws, cb) {
        if (websockets[ws] !== undefined)
            websockets[ws].onopen(() => {
                getModule().table.get(cb)();
            });
    },
    onmessage(ws, cb) {
        if (websockets[ws] !== undefined) {
            websockets[ws].onopen((e) => {
                let messagePtr = getModule().newString(e.data);
                getModule().table.get(cb)(messagePtr);
                getModule().freeString(messagePtr);
            });
        }
    },
    send(ws, message) {
        if (websockets[ws] !== undefined)
            websockets[ws].send(getModule().getString(message));
    }
});
module.exports = websocketBindings;