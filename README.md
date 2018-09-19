# webassembly-stdweb
A library for binding standard javascript function to WebAssembly language such as AssemblyScript

## Actual bindings

| namespace | status          |
|-----------|-----------------|
| console   | partially       |
| websocket | partially       |
| document  | not started yet |

## How to use

### Console

```typescript
import {Console} from "../../declarations/console";

Console.log("Hello World !");
Console.log(42);
Console.log(0.0);
```

### WebSocket

```typescript
import {WebSocket} from "../../declarations/websocket";

let ws = new WebSocket("ws://localhost:8080");

export function onClose(): void {
    // DO SOMETHING
}

export function onError(): void {
    // DO SOMETHING
}

export function onMessage(message: string): void {
    // DO SOMETHING
}

export function onOpen(): void {
    // DO SOMETHING
}

ws.registerCallbackOnOpen(onOpen);
ws.registerCallbackOnClose(onClose);
ws.registerCallbackOnError(onError);
ws.registerCallbackOnMessage(onMessage);

ws.sendMessage("Hello World !")
```