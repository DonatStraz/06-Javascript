var people = [
    {'name':'Deanna I Martin', 'city':' Worthington, Ohio(OH), 43085', 'about':'Zombie ninja. Wannabe internet buff. Proud introvert. Bacon expert. Social media trailblazer.',  'img': './images/16.jpg'},
    {'name':'Sammy M Stoll', 'city':'Wellsville, New York(NY), 14895', 'about':'Social media junkie. Avid food nerd. Professional travel fan. Tv fanatic. Bacon geek. Web fanatic.',  'img': './images/17.jpg'},
    {'name':'Amber C Pantoja', 'city':'  Nashville, Tennessee(TN), 37209', 'about':'Wannabe pop culture expert. Alcohol fanatic. Unapologetic introvert. Subtly charming communicator.',  'img': './images/21.jpg'},
    {'name':'Adriana E Hubert', 'city':'Burlington, North Carolina(NC), 27215', 'about':'Pop culture fanatic. Hardcore analyst. Infuriatingly humble reader. Incurable troublemaker.',  'img': './images/23.jpg'},
    {'name':'Claudette G Hann', 'city':'  Philadelphia, Pennsylvania(PA), 19108', 'about':'Twitter practitioner. Devoted thinker. Hipster-friendly problem solver. Social media expert. ',  'img': './images/34.jpg'},
    {'name':'James C Young', 'city':'2597 Meadowbrook Mall Road ', 'about':'Certified food specialist. Pop culture geek. Typical travel evangelist. Award-winning analyst. Zombie lover.',  'img': './images/46.jpg'},
    {'name':'Robert Langdon', 'city':'15 Eagle Way. AL10 8RD ', 'about':'Typical gamer. Friendly coffee practitioner. Alcohol buff. Extreme pop cultureaholic.',  'img': './images/img123.jpg', 'img': './images/51.jpg'},
    {'name':'Bruce K Collins', 'city':'Westhampton Beach, New York(NY), 11978', 'about':'Wannabe social media aficionado. Thinker. Unapologetic beer guru. Internet lover. Avid food buff.',  'img': './images/55.jpg'},
]

document.body.style.cssText = "background-color:#EDF0F5";

let header = document.createElement('h1');
var text = document.createTextNode("Find, Connect, Enjoy.");
header.appendChild(text);


let paragraph = document.createElement('p');
var paragraphText = document.createTextNode("New way to meet people");
paragraph.appendChild(paragraphText);


let title = document.createElement('div');
title.id = 'title'; //Priskiriu Id;
title.appendChild(header);
title.appendChild(paragraph);
document.body.appendChild(title);
title.style.cssText = "text-align:center; color:grey;";


let cards = document.createElement('div'); //Sukuriu Cards Div klase
cards.id = 'cards'; //Priskiriu Id 
cards.setAttribute('title', 'Hello Div');
document.body.appendChild(cards);

document.getElementById("cards").style.cssText = "display:flex; justify-content:space-between; flex-wrap:wrap; ";

buildCards(people)

function buildCards(data){
    var cards = document.getElementById('cards');

    for(var i = 0; i < data.length; i++){
        var row = `<div class="card">
        <img src=" ${data[i].img}">
        <p>${data[i].name}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${data[i].city}</p>
        <p>${data[i].about}</p>
        <a href="#">Get Connect</a>
        <div><i class="fab fa-facebook-f"></i><i class="fab fa-twitter"></i><i class="fab fa-google"></i><i class="fab fa-instagram"></i></div>
        </div>
        `
        cards.innerHTML += row
    }
}

let cardStyle = document.getElementsByClassName("card"); //Korteles
//let cardParagraphs = docuemnt.querySelectorAll('div.card > p');
//let cardParagraphs = document.querySelectorAll("div.card img");

for(i=0;i<cardStyle.length;i++){
    cardStyle[i].style.cssText = "background-color:white; width:420px; margin:20px; text-align:center; border-radius:5px; color:grey;"
    cardStyle[i].querySelectorAll('p')[0].style.cssText = "color:black; padding:5px 40px; font-weight: bold; "
    cardStyle[i].querySelectorAll('p')[1].style.cssText = "padding:10px 40px; font-size:14px;"
    cardStyle[i].querySelectorAll('p')[2].style.cssText = "padding:5px 40px; line-height:20px; font-size:14px;"
    cardStyle[i].querySelectorAll('img')[0].style.cssText = "border-radius:200px; margin-top:30px;"
    cardStyle[i].querySelectorAll('a')[0].style.cssText = "text-decoration:none; color:grey;"
    cardStyle[i].querySelectorAll('i')[1].style.cssText = "margin:40px 5px; padding:10px 15px; border:1px solid grey; border-radius:100%;"
    cardStyle[i].querySelectorAll('i')[2].style.cssText = "margin:40px 5px;  padding:10px 10px; border:1px solid grey; border-radius:100%;"
    cardStyle[i].querySelectorAll('i')[3].style.cssText = "margin:40px 5px;  padding:10px 10px; border:1px solid grey; border-radius:100%;"
    cardStyle[i].querySelectorAll('i')[4].style.cssText = "margin:40px 5px; padding:10px 10px; border:1px solid grey; border-radius:100%;"
    
}
