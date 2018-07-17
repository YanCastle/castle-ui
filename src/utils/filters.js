"use strict";
export const __esModule = true;
var moment = require('moment')

export function money(v, n = 2) {
    return '￥' + (Number(v).toFixed(n))
}

export function substr(v, len = 10) {
    return v.length > 10 ? v.substr(0, 10) + '...' : v;
}

export function date(v, format = 'YYYY-MM-DD HH:mm:ss') {
    return moment(v).format(format)
}