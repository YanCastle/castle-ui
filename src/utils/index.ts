/**
    * 动态加载JS
    * @param {string} url 脚本地址
    * @param {function} callback  回调函数
    */
export function load_js(url: string, callback: Function) {
    var head = document.getElementsByTagName('head')[0];
    var script: any = document.createElement('script');
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
/**
     * 动态加载CSS
     * @param {string} url 样式地址
     */
export function load_css(url: string) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}
export function rangeValidator(v: any, range: any[], name: string = '') {
    if (range.indexOf(v) > -1) {
        return true;
    } else {
        console.error(`${name} value should be in ${range.join(',')},your value is ${v},please check it`)
        return false;
    }
}