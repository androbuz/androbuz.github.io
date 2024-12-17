//create some animated text on profile page
let text = "Hey there! I’m Andric Ishami, your friendly game designer. I’ve spent countless hours turning caffeine into code and making sure pixels align just right. My journey started at school where I learned the secrets of game magic and probably how to survive on instant noodles. From epic quests to quirky indie games, I’ve been around the block and back, always on the lookout for the next big idea (or just the next excuse to play games all day).";
let paragraph = document.querySelector(".profile-text p");
let index = 0;
function textWriter(){
    if (index < text.length){    
        paragraph.innerHTML += text[index];
        index++;
        setTimeout(textWriter, 37);               
    }
}
textWriter();
