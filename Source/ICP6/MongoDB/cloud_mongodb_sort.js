/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://root:abcd1234@ds117929.mlab.com:17929/sample';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sample");
    //Sort the result by name:
    var sort = { name: -1 };
    dbo.collection("icp6").find().sort(sort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
