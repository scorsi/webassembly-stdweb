const consoleBindings = (getModule) => ({
    log(strPtr) {
        console.log(getModule().getString(strPtr));
    },
    logi(n) {
        console.log(n);
    },
    logf(n) {
        console.log(Number((n).toFixed(5)));
    }
});
module.exports = consoleBindings;