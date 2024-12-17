let blog = document.querySelectorAll(".blog-post");
let button = document.querySelectorAll(".blog-button");
for (let i = 0; i < blog.length; i++){
    blog[i].addEventListener("mouseover", function(){
        //adding a border on the left
        blog[i].style.borderLeft = "1px solid #1C6EA4";
        //adding some padding between text and border
        blog[i].style.paddingLeft = "1.5rem";
        //show the button
        button[i].style.display = "block";
        button[i].style.cursor = "pointer";
    });
    //resetting everything on mouse out
    blog[i].addEventListener("mouseout", function(){
        blog[i].style.borderLeft = "0";
        blog[i].style.paddingLeft = "0";
        button[i].style.display = "none";
    });
}
//button.addEventListener("mouseover", function(){
//    
//})