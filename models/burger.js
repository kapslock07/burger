const orm = require('../config/orm');

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", cb)
    },
    insertOne: function (obj, cb) {
        orm.insertOne("burgers", obj, cb)
    },
    updateOne: function (obj, condition, cb) {
        //orm.updateOne("burgers", {devoured: true}, condition, cb)
        orm.updateOne("burgers", obj, condition, cb)
    },
};

module.exports = burger;