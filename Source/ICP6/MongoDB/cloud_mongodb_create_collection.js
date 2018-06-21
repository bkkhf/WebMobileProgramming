/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://root:abcd1234@ds117929.mlab.com:17929/sample';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("sample");
    dbase.createCollection("icp6", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
