declare namespace webapi {
    namespace _console {
        function log(s: string): void;

        function logi(n: i32): void;

        function logf(n: f32): void;
    }
}

export class Console {
    static log<T>(arg: T): void {
        if (isString<T>()) {
            webapi._console.log(arg);
        } else if (isInteger<T>()) {
            webapi._console.logi(arg as i32);
        } else if (isFloat<T>()) {
            webapi._console.logf(arg as f32);
        }
    }
}
