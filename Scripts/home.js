//changing the home page works to right images
var images = document.querySelectorAll(".main-work img");
var elements = document.querySelectorAll(".main-work h2");
var headings = document.querySelectorAll(".main-work h2");

titles = ["Galactic Femme Fury", "Echelon of Legends", "Orb Eater", "Chrono Clash", "Robo Rebellion: Battle for Survival", "Neon Velocity"];

//on mouseover
//changing card image to approprite image and add title 
images[0].addEventListener("mouseover", function(){
    this.src = "/Images/android_game.jpeg";
    elements[0].innerHTML = titles[0];
    headings[0].style.display = "block";
    images[0].style.cursor = "pointer";
});
images[1].addEventListener("mouseover", function(){
    this.src = "/Images/board_game.jpeg";
    elements[1].innerHTML = titles[1];
    headings[1].style.display = "block";
    images[1].style.cursor = "pointer";
});
images[2].addEventListener("mouseover", function(){
    this.src = "/Images/PC_game2.jpeg";
    elements[2].innerHTML = titles[2];
    headings[2].style.display = "block";
    images[2].style.cursor = "pointer";
    });
images[3].addEventListener("mouseover", function(){
    this.src = "/Images/playstation_game.jpeg";
    elements[3].innerHTML = titles[3];
    headings[3].style.display = "block";
    images[3].style.cursor = "pointer";
    });
images[4].addEventListener("mouseover", function(){
    this.src = "/Images/PC_game.jpeg";
    elements[4].innerHTML = titles[4];
    headings[4].style.display = "block";
    images[4].style.cursor = "pointer";
    });
images[5].addEventListener("mouseover", function(){
    this.src = "/Images/playstation_game2.jpeg";
    elements[5].innerHTML = titles[5];
    headings[5].style.display = "block";
    images[5].style.cursor = "pointer";
    });

//resetting to card image on mouseout
for (let j = 0; j < images.length; j++){
    images[j].addEventListener("mouseout", function(){
    this.src = "/Icons/card-game1.png";
    headings[j].style.display = "none";
    });
}

//make all images link to my game.html once clicked
for (let i = 0; i < images.length; i++){
    images[i].addEventListener("click", function(){
        window.location.href = "/Pages/game.html";
    })
}