const navSlideAnimation =()=>{
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav-links');
let navlinks = document.querySelectorAll('.nav-links li');


burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');

navlinks.forEach((link,index)=>{
    if(link.style.animation){
        link.style.animation='';
    }else{
        let time = index/7 + 0.5;
        link.style.animation='navLinkFade 0.5s ease forwards' +time+'s';
    }
})

})



};

navSlideAnimation();