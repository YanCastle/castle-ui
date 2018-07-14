"use strict";
exports.__esModule = true;
var moment = require('moment')

function money(v, n = 2) {
    return '￥' + (Number(v).toFixed(n))
}

function substr(v, len = 10) {
    return v.length > 10 ? v.substr(0, 10) + '...' : v;
}

function date(v, format = 'YYYY-MM-DD HH:mm:ss') {
    return moment(v).format(format)
}
exports.money = money;
exports.substr = substr;
exports.date = date;