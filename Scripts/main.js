//making my picture link to index.html
let logo = document.getElementById("main-logo");
logo.addEventListener("click", function(){
    window.location.href = "/index.html";
})
//change the cursor to pointer to incite a click
logo.addEventListener("mouseenter", function(){
    logo.style.cursor= "pointer";
});

//changing the name into a link
let name = document.querySelector(".author-info");
name.addEventListener("mouseover", function(){
    name.style.cursor= "pointer";
});
//directing it to the home page
name.addEventListener("click", function(){
    window.location.href = "/index.html";
})

//Hovering over the menu logo
document.getElementById("menu-icon").addEventListener("mouseover", changeMenu);

document.getElementById("menu-icon").addEventListener("mouseout", revertMenu);

function changeMenu(){
 document.getElementById("menu-icon").src = "/Icons/menu_black.png"; //menu logo becomes black
}
function revertMenu(){
document.getElementById("menu-icon").src = "/Icons/menu_white.png"; //reverting the menu logo to white
}

//on click, the menu gives out tabs
let menuClicked = false;
document.getElementById("menu-icon").addEventListener("click", function(){
    //if menu was clicked, hide it then
    if (menuClicked){
        document.querySelector(".menu-tabs").style.display = "none";
        menuClicked = false;
    }
    else{
        document.querySelector(".menu-tabs").style.display = "flex";
        menuClicked = true;
    }
});

//the accessibility icons change when hovered over
document.getElementById("accessibility-icon").addEventListener("mouseover", changeAccessibility);
document.getElementById("accessibility-icon").addEventListener("mouseout", revertAccessibility);

function changeAccessibility(){
 document.getElementById("accessibility-icon").src = "/Icons/settings_accessibility_black.png"; //menu logo becomes black
 menuClicked = true;
}
function revertAccessibility(){
document.getElementById("accessibility-icon").src = "/Icons/settings_accessibility_white.png"; //reverting the menu logo to white
}
//the accessibility icons shows three As
document.getElementById("accessibility-icon").addEventListener("click", function(){
    const controls = document.getElementById("text-resize");
    //show the controls if they weren't visible, otherwise hide them
    if (controls.style.display === "none"){
        controls.style.display = "block";
    } 
    else {
       controls.style.display = "none";
    } 
});

let modifiedCount = 0; //save the number of modifications
//handle the click of the font increase button
document.getElementById("increase-text").addEventListener("click", function(){
    document.querySelectorAll('*').forEach(function(el) {
        //get the computed font size of each element
        let computedFontSize = window.getComputedStyle(el).fontSize;
        //convert the font size to a number
        let currentFontSize = parseFloat(computedFontSize);
        //increase font size by 5 pixels
        el.style.fontSize = (currentFontSize + 5) + "px";
    });
});
//handle the click of the font decrease button
document.getElementById("decrease-text").addEventListener("click", function(){
    document.querySelectorAll('*').forEach(function(el) {
        //get the computed font size of each element
        let computedFontSize = window.getComputedStyle(el).fontSize;
        //convert the font size to a number
        let currentFontSize = parseFloat(computedFontSize);
        //decreasing font size by 5 pixels
        el.style.fontSize = (currentFontSize - 5) + "px";
    });
});


//Hovering over a nav link
var links = document.querySelectorAll(".nav-links a");
var len = links.length;
//use an anonymous function to change all links' style class to bold 
for (var i = 0; i < len; i++){
    links[i].addEventListener("mouseover", function(){
            this.className = "zain-bold";
        });
        //similarly, for mouse hovered out
    links[i].addEventListener("mouseout", function(){
            this.className = "zain-light";
        });
    }
