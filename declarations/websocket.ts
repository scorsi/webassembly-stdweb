declare namespace webapi {
    namespace _websocket {
        function create(url: string): i32;

        function onopen(ws: i32, callback: () => void): void;

        function onclose(ws: i32, callback: () => void): void;

        function onerror(ws: i32, callback: () => void): void;

        function onmessage(ws: i32, callback: (message: string) => void): void;

        function send(ws: i32, message: string): void;
    }
}

export class WebSocket {
    ws: i32;

    constructor(url: string) {
        this.ws = webapi._websocket.create(url);
    }

    registerCallbackOnOpen(callback: () => void): void {
        webapi._websocket.onopen(this.ws, callback);
    }

    registerCallbackOnError(callback: () => void): void {
        webapi._websocket.onerror(this.ws, callback);
    }

    registerCallbackOnClose(callback: () => void): void {
        webapi._websocket.onclose(this.ws, callback);
    }

    registerCallbackOnMessage(callback: (message: string) => void): void {
        webapi._websocket.onmessage(this.ws, callback);
    }

    sendMessage(message: string): void {
        webapi._websocket.send(this.ws, message);
    }
}