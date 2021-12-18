const express = require("express");
const mysql = require('mysql2');

const app = express();
const jsonParse = express.json();

const connectionOptions = {
    host: "localhost",
    user: "root",
    password: "qwerty334455",
    database: "expertsurveys"
};


const con = mysql.createConnection(connectionOptions);

app.get("/api/getsurveys", function (req, res) {
    con.connect(function (err) {
        if (err) throw err;

        con.query(`SELECT * from Survey`, (err, result, fields) => {
            if (err) throw err;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});

app.post("/api/addsurvey", jsonParse, function (req, res) {        
    if (!req.body)
    return res.sendStatus(400);
    const sql = `INSERT INTO Survey (id, text, type, topic, date) VALUES (${req.body.id},\"${req.body.text}\", \"${req.body.type}\", \"${req.body.topic}\", \"${req.body.date}\")`;

    con.connect(function (err) {
        if (err) throw err;

        con.query(sql, (err, result, fields) => {
            if (err) throw err;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});

app.delete("/api/deletesurvey/:surveyid", function (req, res) {
    const sql = `DELETE FROM Survey WHERE id = ${req.params.surveyid}`

    con.connect(function (err) {
        if (err) throw err;

        con.query(sql, (err, result, fields) => {
            if (err) throw err;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});

app.put("/api/survey/update/:surveyid", jsonParse, function (req, res) {
    if (!req.body)
    return res.sendStatus(400);

    con.connect(function (err) {
        if (err) throw err;

    const sql = `UPDATE Survey SET text = \"${req.body.text}\" , type = \"${req.body.type}\", topic = \"${req.body.topic}\", date = \"${req.body.date}\" WHERE id = ${req.params.surveyid} `
        con.query(sql, (err, result, fields) => {
            if (err) throw err;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});

app.get("/api/survey/getquestions/:surveyid", function (req, res) {
    con.connect(function (err) {
        if (err) throw err;

        con.query(`SELECT * from Question WHERE Survey_id = ${req.params.surveyid}`, (err, result, fields) => {
            if (err) throw err;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});


app.get("/api/survey/getsurveystatus/:surveyid", function (req, res) {
    con.connect(function (err) {
        if (err) throw err;

        con.query(`SELECT name from Surveystate WHERE Survey_id = ${req.params.surveyid}`, (err, result, fields) => {
            if (err) throw err;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});

app.put("/api/survey/changesurveystatus/:surveyid", function (req, res) {           // Шлак
    con.connect(function (err) {
        if (err) throw err;

        con.query(`SELECT name from Surveystate WHERE Survey_id = ${req.params.surveyid}`, (err, result, fields) => {
            if (err) throw err;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});

app.post("/api/survey/addsurveyquestion/", jsonParse, function (req, res) {        
    if (!req.body)
    return res.sendStatus(400);
    const sql = `INSERT INTO Question (id, type, text, Survey_id) VALUES (${req.body.id},\"${req.body.type}\", \"${req.body.text}\", ${req.body.survey_id})`;

    con.connect(function (err) {
        if (err) throw err;

        con.query(sql, (err, result, fields) => {
            if (err) throw err;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});

app.delete("/api/survey/deletesurveyquestion/:questionid", function (req, res) {
    const sql = `DELETE FROM Question WHERE id = ${req.params.questionid}`

    con.connect(function (err) {
        if (err) throw err;

        con.query(sql, (err, result, fields) => {
            if (err) throw err;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});

app.put("/api/survey/question/update/:questionid", jsonParse, function (req, res) {
    if (!req.body)
    return res.sendStatus(400);

    con.connect(function (err) {
        if (err) throw err;

    const sql = `UPDATE Question SET type = \"${req.body.type}\", text = \"${req.body.text}\" , Survey_id = ${req.body.survey_id} WHERE id = ${req.params.questionid} `
        con.query(sql, (err, result, fields) => {
            if (err) throw err;
            result ? res.send(result) : res.sendStatus(404);
        });
    });
});

app.listen(1111);