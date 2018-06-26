/**
 * Created by karthik on 7/14/17.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require("body-parser");
var express = require('express');
var cors = require('cors');
var app = express();

var url='mongodb://root:abcd1234@ds117701.mlab.com:17701/sample';//1.Modify this url with the credentials of your db name and password.
var ObjectID = require('mongodb').ObjectID;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/create', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        insertDocument(db, req.body, function() {
            res.write("Successfully inserted");
            res.end();
        });
    });
});

app.get('/get', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }

        db.collection('icp7').find().toArray(function(err, result){
            if(err)
            {
                res.write("get Failed");
                res.end();
            }else
            {

                res.send(JSON.stringify(result));
            }
            console.log("Got All Documents");

        });
    });

});

app.get('/delete/:toBeDeleted_id', function (req, res) {
    // 2.Connect to MongoDB . Handle the error and write the logic for deleting the desired book
    MongoClient.connect(url, function(err, db) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        //var myquery = { _id: toBeDeleted_id };
        var id = req.params.toBeDeleted_id;
        console.log("ISBN of deleted book: "+id);
        deleteRecord(db, id, function() {
            res.write("Deleted Successfully");
            res.end();
        })
    });
});


app.get('/update/:toBeUpdated_id', function (req, res) {
    //3.connect to MongoDB. Handle the error and write the logic for updating the selected field
    MongoClient.connect(url, function(err, db) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        var oldData = {};
        oldData._id = new ObjectID(req.params.toBeUpdated_id);
        var newData={};
        newData.ISBN = req.query.ISBN;
        newData.bookName = req.query.bookName;
        newData.authorName = req.query.authorName;
        updateRecord(db,oldData,newData,  function() {
            res.write("Deleted Successfully");
            res.end();
        })
    });
});


var insertDocument = function(db, data, callback) {
    db.collection('icp7').insertOne( data, function(err, result) {
        if(err)
        {
            res.write("Registration Failed, Error While Registering");
            res.end();
        }
        console.log("Inserted a document into the books collection.");
        callback();
    });
};

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});

var deleteRecord = function(db, id, callback) {
    var mongodb = require('mongodb');
    db.collection('icp7').deleteOne({_id: new mongodb.ObjectID(id)}, function(err, result) {
        //console.log(id.bookName);
        if(err)
        {
            res.write("Failed to delete the record from collection");
            res.end();
        }
        console.log("One record deleted from the books collection.");
        callback();
    })
}

var updateRecord = function(db,old_data,new_data,callback) {
    //var oldValues=
    db.collection('icp7').updateOne(old_data,{$set:new_data},function(err, result) {
        if(err)
        {
            res.write("Failed to update the record in collection");
            res.end();
        }

        console.log("One record Updated successfully.");
        callback();
    })
}