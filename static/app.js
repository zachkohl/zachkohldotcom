const navSlideAnimation = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');
    let navlinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navlinks.forEach((link, index) => {
//add eventlistener
link.addEventListener('click',()=>{
    console.log('test')
    nav.classList.remove('nav-active');
});

//add animation
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                let time = index / 7 + 0.5;
                link.style.animation = 'navLinkFade 0.5s ease forwards' + time + 's';
            }
        })
    })
};

const entrance = () => {
    const aboutImage = document.querySelector('.aboutImage');
    const examplesImage = document.querySelector('.exampleImage');
    const contactImage = document.querySelector('.contactImageDiv');
    const bluebox = document.querySelector('.bluebox');

    aboutImage.addEventListener('mouseover', () => {
        console.log('mouse over aboutImage')
        removeEffects(aboutImage, examplesImage, contactImage);
        contactImage.classList.add('selectRight');
        aboutImage.classList.add('selectRight');
    })

    examplesImage.addEventListener('mouseover', () => {

        removeEffects(aboutImage, examplesImage, contactImage);
        contactImage.classList.add('selectLeft');
        examplesImage.classList.add('selectLeft');
    })

    contactImage.addEventListener('mouseover', () => {

        removeEffects(aboutImage, examplesImage, contactImage);
        contactImage.classList.add('selectCenter');
        aboutImage.classList.add('selectCenter');

    })

    const addHover = () => {
        aboutImage.addEventListener('mouseenter', () => {
            aboutImage.src = "images/aboutSelected.jpg";
        })
        aboutImage.addEventListener('mouseout', () => {
            aboutImage.src = "images/aboutNormal.jpg";
        })
        examplesImage.addEventListener('mouseenter', () => {
            examplesImage.src = "images/exampleSelected.png";
        })
        examplesImage.addEventListener('mouseout', () => {
            examplesImage.src = "images/exampleNormal.png";
        })
    }
    addHover();

    const removeEffects = (item1, item2, item3) => {
        item1.classList.remove('selectLeft');
        item1.classList.remove('selectRight');
        item1.classList.remove('selectCenter');

        item2.classList.remove('selectCenter');
        item2.classList.remove('selectLeft');
        item2.classList.remove('selectCenter');

        item3.classList.remove('selectRight');
        item3.classList.remove('selectLeft');
        item3.classList.remove('selectCenter');
    }



}

const contactButton = () =>{
    var name = "zkohl";
    var domain = "stargarnet.net";
    var x = "mailto:" + name + "@"+domain;
    let a = '2';
    let b = '0';
    let c = '8';
    let d = '7';
    let e = '5';
    let f = '5';
    let g = '1';
    let h = '3';
    let i = '3';
    let j = '2';
    var y = a + b +c + '-'+  d+e+f+ '-'+  g+h+i+j;
  let button = document.getElementById('contactButton');
  let modalContent = document.querySelector('.modal-body');
  modalContent.innerHTML = `
  <p>Please call or text me at ${y}</p>
  <p>My email is <a href="mailto:${name + domain}">${name+domain}</a></p>
  `
  button.addEventListener('click',()=>{
    
})

}



const initialize = () => {
    contactButton();
    navSlideAnimation();
if(screen.width>768){
   
    entrance();
}

}
initialize();


