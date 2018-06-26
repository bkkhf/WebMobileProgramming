/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://root:abcd1234@ds117701.mlab.com:17701/sample';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("sample");
    var myobj = [
        { _id: 1, name: 'Bala'},
        { _id: 2, address: 'chandar'},
    ];
    dbase.collection("mobileweb").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of records inserted: " + res.insertedCount);
        db.close();
    });
});