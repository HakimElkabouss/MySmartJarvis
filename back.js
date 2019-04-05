const sqlite3 = require('sqlite3');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const dbFile = 'post.db';

const db = new sqlite3.Database(dbFile);

const app= express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

db.serialize( () => {

        db.run('CREATE TABLE IF NOT EXISTS Users (user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name TEXT, user_img TEXT)');
        db.run('INSERT INTO Users (user_name, user_img) VALUES (?, ?)',"Jean-Denis","https://cloud.mysmartjarvis.com/reseausocial/img/avatar/01.png");
        db.run('INSERT INTO Users (user_name, user_img) VALUES (?, ?)',"Pascale","https://cloud.mysmartjarvis.com/reseausocial/img/avatar/04.png");
        db.run('INSERT INTO Users (user_name, user_img) VALUES (?, ?)',"Elodie","https://cloud.mysmartjarvis.com/reseausocial/img/avatar/08.png");
        db.run('INSERT INTO Users (user_name, user_img) VALUES (?, ?)',"Micheal","https://cloud.mysmartjarvis.com/reseausocial/img/avatar/05.png");


        db.run('CREATE TABLE IF NOT EXISTS Posts (post_id INTEGER PRIMARY KEY AUTOINCREMENT, post_name TEXT, post_post TEXT)');
        
        db.run('CREATE TABLE IF NOT EXISTS Agenda (agenda_id INTEGER PRIMARY KEY AUTOINCREMENT, date DATETIME, agenda_name TEXT UNIQUE, agenda_user TEXT, agenda_lieu TEXT)');

        db.run('CREATE TABLE IF NOT EXISTS Listes (liste_id INTEGER PRIMARY KEY AUTOINCREMENT, liste_name TEXT, liste_desc TEXT, liste_user TEXT)');

})

app.get('/', function(request, response){
    db.all('SELECT * FROM Posts', function(error, data){
        response.send(data);
    });
});

app.post('/', function(request,response){
    db.run('INSERT INTO Posts (post_name, post_post) VALUES (?, ?)', request.body.post_name, request.body.post_post, function(error, data){
        console.log(request.body.post_name);
        console.log(request.body.post_post);
    });
});

app.get('/agenda', function(request,response){
    db.all('SELECT * FROM Agenda', function(error, data){
        response.send(data);
    });
});

app.post('/agenda', function(request, response){
    db.run('INSERT INTO Agenda (date, agenda_name, agenda_user, agenda_lieu) VALUES (?, ?, ?, ?)', request.body.date, request.body.agenda_name, request.body.agenda_user, request.body.agenda_lieu, function(error, data){
        console.log(request.body.date);
        console.log(request.body.agenda_name);
        console.log(request.body.agenda_user);
        console.log(request.body.agenda_lieu);
    })
})

app.get('/listes', function(request,response){
    db.all('SELECT * FROM Listes', function(error, data){
        response.send(data);
    });
});

app.post('/listes', function(request, response){
    db.run('INSERT INTO Listes (liste_name, liste_desc, liste_user) VALUES (?, ?, ?)',request.body.liste_name, request.body.liste_desc, request.body.liste_user, function(error, data){
        console.log(request.body.liste_name);
        console.log(request.body.liste_desc);
        console.log(request.body.liste_user);
    })
})

app.listen(8080, function(error){
    if(!error) console.log("everything works");
});