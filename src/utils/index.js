"use strict";
export const __esModule = true;
export const types = ['', 'primary', 'success', 'info', 'warning', 'danger']
export const types2layui = ['primary', 'normal', '', 'normal', 'warm', 'danger']
export const size = ['', 'lg', 'md', 'xs', 'sm']
/**
 * 动态加载JS
 * @param {string} url 脚本地址
 * @param {function} callback  回调函数
 */
export function load_js(url, callback) {
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
/**
 * 动态加载CSS
 * @param {string} url 样式地址
 */
export function load_css(url) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}

export function rangeValidator(v, range, name) {
    if (name === void 0) {
        name = '';
    }
    if (range.indexOf(v) > -1) {
        return true;
    } else {
        console.error(name + " value should be in " + range.join(',') + ",your value is " + v + ",please check it");
        return false;
    }
}

export function find(objs, obj) {
    if (undefined === objs || null === objs) {
        return false;
    }
    let k = Object.keys(objs)
    for (let v of k) {
        if (objs[k] == obj) {
            return k;
        }
    }
    return false;
}