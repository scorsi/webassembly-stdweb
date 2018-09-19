import "allocator/tlsf";
import {Console} from "../../declarations/console";
import {WebSocket} from "../../declarations/websocket";
// @ts-ignore
export {memory};

let ws = new WebSocket("ws://localhost:8080");

export function onClose(): void {
    Console.log("AS: CLOSE!");
}

export function onError(): void {
    Console.log("AS: ERROR!");
}

export function onMessage(message: string): void {
    Console.log("AS: MESSAGE! " + message);
}

export function onOpen(): void {
    Console.log("AS: OPEN!");
}

ws.registerCallbackOnOpen(onOpen);
ws.registerCallbackOnClose(onClose);
ws.registerCallbackOnError(onError);
ws.registerCallbackOnMessage(onMessage);

export function main(): void {
    Console.log("hello");
    Console.log(42);
    Console.log(0.18);
    ws.sendMessage("Test");
}