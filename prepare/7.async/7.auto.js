var async = require('async');
console.time('cost');
async.auto({
    //米饭
    rice: function (callback) {
        setTimeout(function () {
            callback(null, 'rice');
        }, 1000);
    },
    //鸡蛋
    egg: function (callback) {
        setTimeout(function () {
            callback(null, 'egg');
        }, 2000);
    },
    cook: ['rice', 'egg', function (data,callback) {
        console.log(arguments);
        setTimeout(function () {
            callback(null, data.rice + '+' + data.egg + '+cook');
        }, 3000);
    }],
    eat: ['cook', function (data,callback) {
        setTimeout(function () {
            callback(null, data.cook + '+eat');
        }, 5000);
    }]
}, function (err, result) {
    console.log(err);
    console.log(result);
    console.timeEnd('cost')
});
