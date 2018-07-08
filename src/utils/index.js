"use strict";
exports.__esModule = true;
/**
    * 动态加载JS
    * @param {string} url 脚本地址
    * @param {function} callback  回调函数
    */
function load_js(url, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    if (typeof (callback) == 'function') {
        script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                callback();
                script.onload = script.onreadystatechange = null;
            }
        };
    }
    head.appendChild(script);
}
exports.load_js = load_js;
/**
     * 动态加载CSS
     * @param {string} url 样式地址
     */
function load_css(url) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}
exports.load_css = load_css;
function rangeValidator(v, range, name) {
    if (name === void 0) { name = ''; }
    if (range.indexOf(v) > -1) {
        return true;
    }
    else {
        console.error(name + " value should be in " + range.join(',') + ",your value is " + v + ",please check it");
        return false;
    }
}
exports.rangeValidator = rangeValidator;
