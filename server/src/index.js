var MongoClient = require('mongodb').MongoClient;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var url = "mongodb+srv://qerbate:6r6Wq2aMqssXVQJF@cluster0.yvhro.mongodb.net/mydb?retryWrites=true&w=majority";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.listen(5000, function () {
    console.log('listening on 5000')
})
app.use(express.static(__dirname))

MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.post("/GetData", (req, res) => {
        dbo.collection('ScheduleData').find({}).toArray((err, cus) => {
            res.send(cus);
        });
    });
    app.post("/BatchData", (req, res) => {
        console.log(req.body);
        var eventData = [];
        if (req.body.action == "insert" || (req.body.action == "batch" && req.body.added.length > 0)) {
            (req.body.action == "insert") ? eventData.push(req.body.value) : eventData = req.body.added;
            for (var i = 0; i < eventData.length; i++) {
                var sdate = new Date(eventData[i].StartTime);
                var edate = new Date(eventData[i].EndTime);
                eventData[i].StartTime = sdate;
                eventData[i].EndTime = edate;
                dbo.collection('ScheduleData').insertOne(eventData[i]);
            }
        }
        if (req.body.action == "update" || (req.body.action == "batch" && req.body.changed.length > 0)) {
            (req.body.action == "update") ? eventData.push(req.body.value) : eventData = req.body.changed;
            for (var i = 0; i < eventData.length; i++) {
                delete eventData[i]._id;
                var sdate = new Date(eventData[i].StartTime);
                var edate = new Date(eventData[i].EndTime);
                eventData[i].StartTime = sdate;
                eventData[i].EndTime = edate;
                dbo.collection('ScheduleData').updateOne({ "Id": eventData[i].Id }, { $set: eventData[i] });
            }
        }
        if (req.body.action == "remove" || (req.body.action == "batch" && req.body.deleted.length > 0)) {
            (req.body.action == "remove") ? eventData.push({ Id: req.body.key }) : eventData = req.body.deleted;
            for (var i = 0; i < eventData.length; i++) {
                dbo.collection('ScheduleData').deleteOne({ "Id": eventData[i].Id });
            }
        }
        
        res.send(req.body);
    });
});

        
  


