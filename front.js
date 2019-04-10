var container = document.getElementById('results');
var contAg = document.getElementById('agenda_resultas');
var contLi = document.getElementById('listes_resultas');

$.get('http://localhost:8080/', function(response){
    response.forEach(function(po){
        const commentDiv = document.createElement('div');
        container.appendChild(commentDiv);

        const h2 = document.createElement('h2');
        const p = document.createElement('h4');
        const p1 = document.createElement('p');

        h2.innerHTML = "De "+po.post_name;
        p1.innerHTML = " à "+new Date().getHours()+"H"+new Date().getMinutes()+"min";
        p.innerHTML = po.post_post;
        
        commentDiv.setAttribute('id', 'comment');
        commentDiv.appendChild(h2);
        commentDiv.appendChild(p1);
        commentDiv.appendChild(p);
    
    })

});

$.get('http://localhost:8080/agenda', function(response){
    response.forEach(function(ag){
        const agendaDiv = document.createElement('div');
        contAg.appendChild(agendaDiv);

        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        
        h1.innerHTML = "Par "+ag.agenda_user;
        h3.innerHTML = "Nom d'événement : "+ag.agenda_name;
        h4.innerHTML = ag.date;
        p.innerHTML = "A "+ag.agenda_lieu;

        agendaDiv.setAttribute('id', 'event');
        agendaDiv.appendChild(h1);
        agendaDiv.appendChild(h3);
        agendaDiv.appendChild(h4);
        agendaDiv.appendChild(p);
    })
})

$.get('http://localhost:8080/listes', function(response){
    response.forEach(function(li){
        const listDiv = document.createElement('div');
        contLi.appendChild(listDiv);

        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const desc1 = document.createElement('h3');
        const desc2 = document.createElement('h3');
        const desc3 = document.createElement('h3');
        const desc4 = document.createElement('h3');
        const desc5 = document.createElement('h3');
        const desc6 = document.createElement('h3');

        
        h2.innerHTML = "<img src='https://cloud.mysmartjarvis.com/reseausocial/img/Modal1/liste.png' width='30' />"+" "+li.liste_name;
        h1.innerHTML = "Par "+li.liste_user;
        desc1.innerHTML = "<img src='images/unchecked.svg' width='25' id='unchecked' />"+" "+li.liste_desc1;
        desc2.innerHTML = "<img src='images/unchecked.svg' width='25' id='unchecked' />"+" "+li.liste_desc2;
        desc3.innerHTML = "<img src='images/unchecked.svg' width='25' id='unchecked' />"+" "+li.liste_desc3;
        desc4.innerHTML = "<img src='images/unchecked.svg' width='25' id='unchecked' />"+" "+li.liste_desc4;
        desc5.innerHTML = "<img src='images/unchecked.svg' width='25' id='unchecked' />"+" "+li.liste_desc5;
        desc6.innerHTML = "<img src='images/unchecked.svg' width='25' id='unchecked' />"+" "+li.liste_desc6;

        desc1.setAttribute('id','descList');
        listDiv.setAttribute('id', 'panel panel-default fenetre');
        listDiv.appendChild(h2);
        listDiv.appendChild(h1);
        listDiv.appendChild(desc1);
        listDiv.appendChild(desc2);
        listDiv.appendChild(desc3);
        listDiv.appendChild(desc4);
        listDiv.appendChild(desc5);
        listDiv.appendChild(desc6);
        })
})

function send(){
    var name = document.querySelector('#select').value;
    var pub = document.querySelector('#text').value;
    
    console.log(name);
    console.log(pub);

    $.post('http://localhost:8080/', {post_name : name, post_post : pub}, function(response){
        console.log(response);
    })
}

function sendAg(){
    var date = document.querySelector('#date').value;
    var name = document.querySelector('#eventName').value;
    var user = document.querySelector('#participant').value;
    var lieu = document.querySelector('#place').value;

    $.post('http://localhost:8080/agenda', {agenda_name : name, agenda_user : user, date : date, agenda_lieu : lieu}, function(response){
        console.log(response);
    })

}

function sendLi(){
    var name = document.querySelector('#listName').value;
    var user = document.querySelector('#selectUser').value;
    var desc1 = document.querySelector('#newTask').value;
    var desc2 = document.querySelector('#newTask1').value;
    var desc3 = document.querySelector('#newTask2').value;
    var desc4 = document.querySelector('#newTask3').value;
    var desc5 = document.querySelector('#newTask4').value;
    var desc6 = document.querySelector('#newTask5').value;

    $.post('http://localhost:8080/listes', {liste_user : user, liste_name : name, liste_desc1 : desc1, liste_desc2 : desc2, liste_desc3 : desc3, liste_desc4 : desc4, liste_desc5 : desc5, liste_desc6 : desc6}, function(response){
        console.log(response);
    })
}




$(document).ready(function(){
    
    $('.Agenda').click(function(){
        $('#modal1').css('display', 'block');
        $('#modal2').css('display', 'none');
    })
    $('#close').click(function(){
        $('#modal1').css('display', 'none');
    })

    $('.Listes').click(function(){
        $('#modal2').css('display', 'block');
        $('#modal1').css('display', 'none');
    })
    $('#close1').click(function(){
        $('#modal2').css('display', 'none');
    })

    $('#terminer').click(function(){
        $('#modal2').css('display','none');
    })

    $('#createList').click(function(){
        if($('#listName').val() == ""){
            $('#add-element').css('display','none');
        }else{
            $('#add-element').css('display','block');
        }
    })

    $('#ajouterCase').click(function(){
        $('#newTask1').css('display','block');
        $('#ajouterCase').css('display','none');
        $('#ajouterCase1').css('display','block');
    })

    $('#ajouterCase1').click(function(){
        $('#newTask2').css('display','block');
        $('#ajouterCase1').css('display','none');
        $('#ajouterCase2').css('display','block');
    })

    $('#ajouterCase2').click(function(){
        $('#newTask3').css('display','block');
        $('#ajouterCase2').css('display','none');
        $('#ajouterCase3').css('display','block');
    })

    $('#ajouterCase3').click(function(){
        $('#newTask4').css('display','block');
        $('#ajouterCase3').css('display','none');
        $('#ajouterCase4').css('display','block');
    })

    $('#ajouterCase4').click(function(){
        $('#newTask5').css('display','block');
        $('#ajouterCase4').css('display','none');
    })

})