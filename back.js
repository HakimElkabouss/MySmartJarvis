const sqlite3 = require('sqlite3');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const MongoClient = require("mongodb").MongoClient;

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


        db.run('CREATE TABLE IF NOT EXISTS Posts (post_id INTEGER PRIMARY KEY AUTOINCREMENT, post_name TEXT, post_post TEXT, post_time DATETIME, post_avatar TEXT)');
        
        db.run('CREATE TABLE IF NOT EXISTS Agenda (agenda_id INTEGER PRIMARY KEY AUTOINCREMENT, date DATETIME, agenda_name TEXT UNIQUE, agenda_user TEXT, agenda_lieu TEXT)');

        db.run('CREATE TABLE IF NOT EXISTS Listes (liste_id INTEGER PRIMARY KEY AUTOINCREMENT, liste_name TEXT, liste_desc1 TEXT, liste_avatar1 TEXT, liste_desc2 TEXT, liste_avatar2 TEXT, liste_desc3 TEXT, liste_avatar3 TEXT, liste_desc4 TEXT, liste_avatar4 TEXT, liste_desc5 TEXT, liste_avatar5 TEXT, liste_desc6 TEXT, liste_avatar6 TEXT, liste_user1 TEXT, liste_user2 TEXT, liste_user3 TEXT, liste_user4 TEXT, liste_user5 TEXT, liste_user6 TEXT, liste_time DATETIME)');

        db.run('CREATE TABLE IF NOT EXISTS Comments (comment_id INTEGER PRIMARY KEY AUTOINCREMENT, comment TEXT, comment_avatar TEXT, comment_date DATETIME)');

})

app.get('/', function(request, response){
    db.all('SELECT * FROM Posts', function(error, data){
        response.send(data);
    });
});

app.post('/', function(request,response){
    db.run('INSERT INTO Posts (post_name, post_post, post_time, post_avatar) VALUES (?, ?, ?, ?)', request.body.post_name, request.body.post_post, request.body.post_time, request.body.post_avatar, function(error, data){
        console.log(request.body.post_name);
        console.log(request.body.post_post);
        console.log(request.body.post_time);
        console.log(request.body.post_avatar);
    });
});

app.get('/comment', function(request,response){
   db.all('SELECT * FROM Comments', function(error, data){
       response.send(data);
   })
})

app.post('/comment', function(request,response){
    db.run('INSERT INTO Comments (comment, comment_avatar, comment_date) VALUES (?, ?, ?)', request.body.comment, request.body.comment_avatar, request.body.comment_date, function(error, data){
        console.log(request.body.comment);
        console.log(request.body.comment_avatar);
        console.log(request.body.comment_date);
    })
})
 
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
    db.run('INSERT INTO Listes (liste_name, liste_desc1, liste_avatar1, liste_desc2, liste_avatar2, liste_desc3, liste_avatar3, liste_desc4, liste_avatar4, liste_desc5, liste_avatar5, liste_desc6, liste_avatar6, liste_user1, liste_user2, liste_user3, liste_user4, liste_user5, liste_user6, liste_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',request.body.liste_name, request.body.liste_desc1, request.body.liste_avatar1, request.body.liste_desc2, request.body.liste_avatar2, request.body.liste_desc3, request.body.liste_avatar3, request.body.liste_desc4, request.body.liste_avatar4, request.body.liste_desc5, request.body.liste_avatar5, request.body.liste_desc6, request.body.liste_avatar6, request.body.liste_user1, request.body.liste_user2, request.body.liste_user3, request.body.liste_user4, request.body.liste_user5, request.body.liste_user6, request.body.liste_time, function(error, data){
        console.log(request.body.liste_name);
        console.log(request.body.liste_desc1);
        console.log(request.body.liste_avatar1);
        console.log(request.body.liste_desc2);
        console.log(request.body.liste_avatar2);
        console.log(request.body.liste_desc3);
        console.log(request.body.liste_avatar3);
        console.log(request.body.liste_desc4);
        console.log(request.body.liste_avatar4);
        console.log(request.body.liste_desc5);
        console.log(request.body.liste_avatar5);
        console.log(request.body.liste_desc6);
        console.log(request.body.liste_avatar6);
        console.log(request.body.liste_user1);
        console.log(request.body.liste_user2);
        console.log(request.body.liste_user3);
        console.log(request.body.liste_user4);
        console.log(request.body.liste_user5);
        console.log(request.body.liste_user6);
        console.log(request.body.liste_time);
        
    })
})

// MongoClient.connect("mongodb://localhost/MySmartJarvis", function(error, db) {
//     if (error) return funcCallback(error);

//     console.log("Connecté à la base de données 'MySmartJarvis'");
// });

app.listen(8080, function(error){
    if(!error) console.log("everything works");
});