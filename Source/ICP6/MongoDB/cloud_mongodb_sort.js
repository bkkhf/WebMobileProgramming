/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://root:abcd1234@ds117929.mlab.com:17929/sample';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("sample");
    dbase.collection("icp6").find().sort({"name":1})
});
