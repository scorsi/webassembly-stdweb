const fs = require('fs');
const loader = require('../src/loader');

let wasmModule = undefined;
const getModule = () => wasmModule;

let imports = {};
imports["_console"] = require('../bindings/console')(getModule);
imports["_websocket"] = require('../bindings/websocket')(getModule);

wasmModule = loader.instantiateBuffer(fs.readFileSync('./build/optimized.wasm'), imports);

wasmModule.main();