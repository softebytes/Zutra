const hamburger=document.querySelector('.menu-ham-icon');

hamburger.addEventListener("click", function(){
    document.querySelector('.learnify-full-menu').style.display="block";
})

const hamburgerClose=document.querySelector('.menu-ham-close');
hamburger.addEventListener("click", function(){
    document.querySelector('.learnify-full-menu').style.display="none";
})