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
        const av = document.createElement('img');
        const hr = document.createElement('hr');
        const imgCom = document.createElement('img');
        const inputCom = document.createElement('input');
        const sendCom = document.createElement('img');

        h2.innerHTML = "<img src='https://cloud.mysmartjarvis.com/reseausocial/img/Modal1/message2.png' width='30'/>"+" "+"de "+po.post_name;
        p1.innerHTML = po.post_time;
        p.innerHTML = po.post_post;
        av.setAttribute('src', po.post_avatar);
        av.setAttribute('width', "30");
        imgCom.setAttribute('src','https://cloud.mysmartjarvis.com/reseausocial/img/avatar/01.png');
        imgCom.setAttribute('alt','Jean-Denis');
        imgCom.setAttribute('class','pastilleMoyen');
        imgCom.setAttribute('id','avCom');
        imgCom.setAttribute('width','30');
        inputCom.setAttribute('type','text');
        inputCom.setAttribute('id','text1');
        sendCom.setAttribute('src','https://cloud.mysmartjarvis.com/reseausocial/img/svg/envoyer.svg');
        sendCom.setAttribute('width','30');
        sendCom.setAttribute('id','envoyer1');
        sendCom.setAttribute('onclick','sendCom()');
        
        commentDiv.setAttribute('id', 'comment');
        commentDiv.appendChild(h2);
        commentDiv.appendChild(av);
        commentDiv.appendChild(p1);
        commentDiv.appendChild(p);
        commentDiv.appendChild(hr);
        commentDiv.appendChild(imgCom);
        commentDiv.appendChild(inputCom);
        commentDiv.appendChild(sendCom);
        
    
    })
});

$.get('http://localhost:8080/comment', function(response){
    response.forEach(function(com){
        const comment = document.createElement('div');
        container.appendChild(comment);

        picCom = document.createElement('img');
        textCom = document.createElement('h4');
        dateCom = document.createElement('p');

        picCom.setAttribute('src',com.comment_avatar);
        picCom.setAttribute('width','30');
        textCom.innerHTML = com.comment;
        dateCom.innerHTML = com.comment_date;
        comment.setAttribute('id','commentaire');

        comment.appendChild(picCom);
        comment.appendChild(textCom);
        comment.appendChild(dateCom);
    })
})

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

        const h2 = document.createElement('h2');
        const desc1 = document.createElement('h3');
        const av1 = document.createElement('img');
        const desc2 = document.createElement('h3');
        const av2 = document.createElement('img');
        const desc3 = document.createElement('h3');
        const av3 = document.createElement('img');
        const desc4 = document.createElement('h3');
        const av4 = document.createElement('img');
        const desc5 = document.createElement('h3');
        const av5 = document.createElement('img');
        const desc6 = document.createElement('h3');
        const av6 = document.createElement('img');
        const p = document.createElement('p');
        

        
        h2.innerHTML = "<img src='https://cloud.mysmartjarvis.com/reseausocial/img/Modal1/liste.png' width='30' />"+" "+li.liste_name;
        desc1.innerHTML = "<img src='images/unchecked.svg' width='25' id='unchecked' />"+" "+li.liste_desc1;
        desc2.innerHTML = "<img src='images/unchecked.svg' width='25' id='unchecked' />"+" "+li.liste_desc2;
        desc3.innerHTML = "<img src='images/unchecked.svg' width='25' id='unchecked' />"+" "+li.liste_desc3;
        desc4.innerHTML = "<img src='images/unchecked.svg' width='25' id='unchecked' />"+" "+li.liste_desc4;
        desc5.innerHTML = "<img src='images/unchecked.svg' width='25' id='unchecked' />"+" "+li.liste_desc5;
        desc6.innerHTML = "<img src='images/unchecked.svg' width='25' id='unchecked' />"+" "+li.liste_desc6;
        p.innerHTML = li.liste_time;

        av1.setAttribute('src', li.liste_avatar1);
        av2.setAttribute('src', li.liste_avatar2);
        av3.setAttribute('src', li.liste_avatar3);
        av4.setAttribute('src', li.liste_avatar4);
        av5.setAttribute('src', li.liste_avatar5);
        av6.setAttribute('src', li.liste_avatar6);
        av1.setAttribute('width', "30");
        av1.setAttribute('id', "avatar");
        av2.setAttribute('width', "30");
        av2.setAttribute('id', "avatar");
        av3.setAttribute('width', "30");
        av3.setAttribute('id', "avatar");
        av4.setAttribute('width', "30");
        av4.setAttribute('id', "avatar");
        av5.setAttribute('width', "30");
        av5.setAttribute('id', "avatar");
        av6.setAttribute('width', "30");
        av6.setAttribute('id', "avatar");
        desc1.setAttribute('id','descList1');
        desc2.setAttribute('id','descList2');
        desc3.setAttribute('id','descList3');
        desc4.setAttribute('id','descList4');
        desc5.setAttribute('id','descList5');
        desc6.setAttribute('id','descList6');
        listDiv.setAttribute('id', 'liste');
        listDiv.appendChild(h2);
        listDiv.appendChild(p);
        listDiv.appendChild(desc1);
        desc1.appendChild(av1);
        listDiv.appendChild(desc2);
        desc2.appendChild(av2);
        listDiv.appendChild(desc3);
        desc3.appendChild(av3);
        listDiv.appendChild(desc4);
        desc4.appendChild(av4);
        listDiv.appendChild(desc5);
        desc5.appendChild(av5);
        listDiv.appendChild(desc6);
        desc6.appendChild(av6);
        
        })
})

function send(){
    var name = document.querySelector('#select').value;
    var pub = document.querySelector('#text').value;

    var ladate = new Date();
    var h=ladate.getHours();
    if (h<10) {h = "0" + h}
    var m=ladate.getMinutes();
    if (m<10) {m = "0" + m}
    var time = h+":"+m+" - "+ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear();

    var avatar = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/01.png";

    if(name == "Pascale"){
        avatar = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/04.png";
    }else if(name == "Elodie"){
        avatar = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/08.png";
    }else if(name == "Michael"){
        avatar = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/05.png";
    }else{
        console.log('Rien');
    }

    
//     var xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = function(){
//         console.log(this);
//         if(this.readyState == 4 && this.status == 200){
//         container.innerHTML = xhttp.responseText;
//     } 
// }
//     xhttp.open("GET", "http://localhost:8080/");
//     // xhttp.responseType = "text";
//     xhttp.send();
    
    
    
    console.log(name);
    console.log(pub);
    console.log(time);
    console.log(avatar);

    $.post('http://localhost:8080/', {post_name : name, post_post : pub, post_time : time, post_avatar : avatar}, function(response){
        console.log(response);
    })
}

function sendCom(){
    var name1 = document.querySelector('#select').value;
    var pub1 = document.querySelector('#text1').value;

    var ladate1 = new Date();
    var h=ladate1.getHours();
    if (h<10) {h = "0" + h}
    var m=ladate1.getMinutes();
    if (m<10) {m = "0" + m}
    var time1 = h+":"+m+" - "+ladate1.getDate()+"/"+(ladate1.getMonth()+1)+"/"+ladate1.getFullYear();

    var avatar1 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/01.png";

    if(name1 == "Pascale"){
        avatar1 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/04.png";
    }else if(name1 == "Elodie"){
        avatar1 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/08.png";
    }else if(name1 == "Michael"){
        avatar1 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/05.png";
    }else{
        console.log('Rien');
    }
    
    console.log(name1);
    console.log(pub1);
    console.log(time1);
    console.log(avatar1);

    $.post('http://localhost:8080/comment', {comment : pub1, comment_avatar : avatar1, comment_date : time1}, function(response){
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
    var desc1 = document.querySelector('#newTask').value;
    var user1 = document.querySelector('#selectUser').value;
    var desc2 = document.querySelector('#newTask1').value;
    var user2 = document.querySelector('#selectUser1').value;
    var desc3 = document.querySelector('#newTask2').value;
    var user3 = document.querySelector('#selectUser2').value;
    var desc4 = document.querySelector('#newTask3').value;
    var user4 = document.querySelector('#selectUser3').value;
    var desc5 = document.querySelector('#newTask4').value;
    var user5 = document.querySelector('#selectUser4').value;
    var desc6 = document.querySelector('#newTask5').value;
    var user6 = document.querySelector('#selectUser5').value;

    var ladate = new Date();
    var h=ladate.getHours();
    if (h<10) {h = "0" + h}
    var m=ladate.getMinutes();
    if (m<10) {m = "0" + m}
    var time = h+":"+m+" - "+ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear();

    var avatar1 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/01.png";

    if(user1 == "Pascale"){
        avatar1 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/04.png";
    }else if(user1 == "Elodie"){
        avatar1 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/08.png";
    }else if(user1 == "Michael"){
        avatar1 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/05.png";
    }else{
        console.log('Rien');
    }

    var avatar2 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/01.png";

    if(user2 == "Pascale"){
        avatar2 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/04.png";
    }else if(user2 == "Elodie"){
        avatar2 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/08.png";
    }else if(user2 == "Michael"){
        avatar2 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/05.png";
    }else{
        console.log('Rien');
    }

    var avatar3 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/01.png";

    if(user3 == "Pascale"){
        avatar3 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/04.png";
    }else if(user3 == "Elodie"){
        avatar3 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/08.png";
    }else if(user3 == "Michael"){
        avatar3 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/05.png";
    }else{
        console.log('Rien');
    }

    var avatar4 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/01.png";

    if(user4 == "Pascale"){
        avatar4 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/04.png";
    }else if(user4 == "Elodie"){
        avatar4 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/08.png";
    }else if(user4 == "Michael"){
        avatar4 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/05.png";
    }else{
        console.log('Rien');
    }

    var avatar5 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/01.png";

    if(user5 == "Pascale"){
        avatar5 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/04.png";
    }else if(user5 == "Elodie"){
        avatar5 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/08.png";
    }else if(user5 == "Michael"){
        avatar5 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/05.png";
    }else{
        console.log('Rien');
    }

    var avatar6 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/01.png";

    if(user6 == "Pascale"){
        avatar6 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/04.png";
    }else if(user6 == "Elodie"){
        avatar6 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/08.png";
    }else if(user6 == "Michael"){
        avatar6 = "https://cloud.mysmartjarvis.com/reseausocial/img/avatar/05.png";
    }else{
        console.log('Rien');
    }

    $.post('http://localhost:8080/listes', {liste_user1 : user1, liste_user2 : user2, liste_user3 : user3, liste_user4 : user4, liste_user5 : user5, liste_user6 : user6, liste_name : name, liste_desc1 : desc1, liste_desc2 : desc2, liste_desc3 : desc3, liste_desc4 : desc4, liste_desc5 : desc5, liste_desc6 : desc6, liste_time : time, liste_avatar1 : avatar1,  liste_avatar2 : avatar2, liste_avatar3 : avatar3,  liste_avatar4 : avatar4, liste_avatar5 : avatar5, liste_avatar6 : avatar6}, function(response){
        console.log(response);
    })
}




$(document).ready(function(){

    $('#envoyer').click(function(){
        $("input:text").val('');
    });

    $('#validList').click(function(){
        $("input:text").val('');
    })

    
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
        $('#selectUser1').css('display','block');
    })

    $('#ajouterCase1').click(function(){
        $('#newTask2').css('display','block');
        $('#ajouterCase1').css('display','none');
        $('#ajouterCase2').css('display','block');
        $('#selectUser2').css('display','block');
    })

    $('#ajouterCase2').click(function(){
        $('#newTask3').css('display','block');
        $('#ajouterCase2').css('display','none');
        $('#ajouterCase3').css('display','block');
        $('#selectUser3').css('display','block');
    })

    $('#ajouterCase3').click(function(){
        $('#newTask4').css('display','block');
        $('#ajouterCase3').css('display','none');
        $('#ajouterCase4').css('display','block');
        $('#selectUser4').css('display','block');
    })

    $('#ajouterCase4').click(function(){
        $('#newTask5').css('display','block');
        $('#ajouterCase4').css('display','none');
        $('#selectUser5').css('display','block');
    })

    $('#Jean').click(function(){
        $('.pastilleMoyen').replaceWith('<img src="https://cloud.mysmartjarvis.com/reseausocial/img/avatar/01.png" alt="Jean-Denis" style="width:30" class="pastilleMoyen">');
    })

    $('#Pascale').click(function(){
        $('.pastilleMoyen').replaceWith('<img src="https://cloud.mysmartjarvis.com/reseausocial/img/avatar/04.png" alt="Pascale" style="width:30" class="pastilleMoyen"></img>');
    })

    $('#Elodie').click(function(){
        $('.pastilleMoyen').replaceWith('<img src="https://cloud.mysmartjarvis.com/reseausocial/img/avatar/08.png" alt="Elodie" style="width:30" class="pastilleMoyen"></img>');
    })

    $('#Michael').click(function(){
        $('.pastilleMoyen').replaceWith('<img src="https://cloud.mysmartjarvis.com/reseausocial/img/avatar/05.png" alt="Michael" style="width:30" class="pastilleMoyen"></img>');
    })

    // $('#descList1').click(function(){
    //     $('#unchecked').replaceWith('<img src="https://cloud.mysmartjarvis.com/reseausocial/img/svg/checked.svg" width="30" />');
    // })

})

