//making my slider picture link to another pic
let image = document.querySelector(".game-image");
let images = ["/Images/board_game.jpeg","/Images/board_game_showcase1.jpeg", "/Images/board_game_showcase2.jpeg"];
let index = 0;
let left_slider = document.querySelector(".left-slider");
let right_slider = document.querySelector(".right-slider");
let image_div = document.querySelector(".image-slider");

//game texts hangling
let game_text = document.querySelector(".game-description span");
let texts = ["An epic strategy game where players assemble legendary heroes, build powerful alliances, and engage in thrilling battles to conquer mystical realms. Unleash unique abilities, develop tactics, and rise through the ranks to become a legend in this captivating adventure.", "This concept drawing illustrates the initial phase of my creative process for Echelon of Legends. I begin by sketching out the core elements that define the game’s theme and mechanics. In this stage, I focus on the visual storytelling and how each component interacts with the player’s imagination. Inspiration comes from a blend of mythological lore and modern fantasy, ensuring each character and setting has a unique backstory. By visualizing these elements early, I can refine the game’s aesthetic and ensure it aligns with the strategic depth I aim to provide.", "In this concept art, you can see the evolution of the game board and player pieces for Echelon of Legends. My creative process often involves merging different art styles and cultural references to craft a world that feels both familiar and innovative. I draw inspiration from a mix of historical designs and futuristic elements, balancing detail with functionality. Each piece is designed not just for visual appeal, but to enhance gameplay mechanics and strategy. This approach ensures the game is both visually captivating and engaging, offering a fresh experience each time it's played."]

//change the cursor to pointer to incite a click
right_slider.addEventListener("mouseenter", function(){
    right_slider.style.cursor= "pointer";
});

//when right slider is clicked
right_slider.addEventListener("click", function(){
    //increase the index to pick the next image
    index++;
    if (index < 0){
        //handle the modulus operation of a negative number
        let absolute = Math.abs(index);
        index = 3 - absolute;
    }
    image.src = images[index%3];
    //changing the description text to match the image
    game_text.innerHTML = texts[index%3];
    image_div.style.backgroundImage = `url(${images[index%3]})`;
})

//change the cursor to pointer to incite a click
left_slider.addEventListener("mouseenter", function(){
    left_slider.style.cursor= "pointer";
});

//when left slider is clicked
left_slider.addEventListener("click", function(){
    //decrease the index to pick the next image
    index--;
    if (index < 0){
        //handle the modulus operation of a negative number
        let absolute = Math.abs(index);
        index = 3 - absolute;
    }
    image.src = images[index%3];
    //changing the description text to match the image
    game_text.innerHTML = texts[index%3];
})