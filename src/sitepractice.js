const hamburger=document.querySelector('.menu-ham-icon');

hamburger.addEventListener("click", function(){
    document.querySelector('.learnify-full-menu').style.display="block";
})

const hamburgerClose=document.querySelector('.menu-ham-close');
hamburger.addEventListener("click", function(){
    document.querySelector('.learnify-full-menu').style.display="none";
})

const x=document.querySelector(".world-sci-btn");
const x_sub=document.querySelector(".world-sci");
const y= document.querySelector(".hurst-btn");
const y_sub=document.querySelector(".hurst");
const z=document.querySelector(".reaktion-btn");
const z_sub=document.querySelector(".reaktion");

x.addEventListener("click",function(){
    x_sub.style.display="block";
    y_sub.style.display="none";
    z_sub.style.display="none";
})

y.addEventListener("click",function(){
    x_sub.style.display="none";
    y_sub.style.display="block";
    z_sub.style.display="none";
})

z.addEventListener("click",function(){
    x_sub.style.display="none";
    y_sub.style.display="none";
    z_sub.style.display="block";
})




