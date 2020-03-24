const connection = require('./connection');


var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    insertOne: function (tableInput, obj, cb) {
        var queryString =`INSERT INTO ${tableInput} SET ?`;
        connection.query(queryString, obj, function (err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
    },
    updateOne: function (tableInput, obj, condition, cb) {
        var queryString =`UPDATE ${tableInput} SET ? WHERE ${condition}`;
        connection.query(queryString, obj, function (err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
    },
};

module.exports = orm;


