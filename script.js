 //FONCTIONNALITE 1
 // 1. Find and store the element we want to listen to events on.
var footer = document.querySelector("footer")
clickCount = 0

// 2. Add the event listener for the element and function
 footer.addEventListener('click', clickFooter)

 // 3. Define the function that will respond to the event.
function clickFooter (footer){
    clickCount ++
    console.log("click numéro " + clickCount)
 };

 //FONCTIONNALITE 2
 var header = document.getElementById("navbarHeader")
 var buttonNavbar = document.querySelector("button")

 buttonNavbar.addEventListener('click', function(){
	header.classList.toggle('collapse');
});

//FONCTIONNALITE 3
var card = document.getElementsByClassName("card mb-4 box-shadow")[0]
var edit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]


edit.addEventListener('click', function(){
   card.style ="color: red"  
});


//FONCTIONNALITE 4 
var card2 = document.getElementsByClassName("card mb-4 box-shadow")[1]
var edit2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]

edit2.addEventListener('click', function(){  

    if (card2.style.color === 'green'){
    card2.style.color = '' ;
    } 
    else card2.style.color = 'green'
});


//FONCTIONNALITE 5 
var navbar = document.getElementsByClassName("navbar")[0];
link = document.getElementsByTagName("link")[0];
navbar.addEventListener('dblclick', function(){

link.remove();

});

//FONCTIONNALITE 6
var card = document.querySelectorAll(".box-shadow");
var view = document.querySelectorAll(".btn-success");
var text = document.querySelectorAll(".card-text")

view[0].addEventListener("mouseover", () => {text[0].style.display = "none"; card[0].style.width = "20%";});
view[0].addEventListener("mouseout", () => {text[0].style.display = "block";});

//FONCTIONNALITE 7
var btnGrey = document.getElementsByClassName("btn btn-secondary my-2");
var rowDiv = document.getElementsByClassName("row");
var lastCard = document.getElementsByClassName(".card")[5];
var firstCard = document.getElementsByClassName(".card")[1];

btnGrey[0].addEventListener("click", function(){
rowDiv[0].insertBefore(lastCard, firstCard);

});