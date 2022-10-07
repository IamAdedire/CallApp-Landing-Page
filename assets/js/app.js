const menuToggle = document.getElementById('toggle');
const mobilemenu = document.querySelector('.menu-container');
const overlay = document.querySelector('.overlay');
const footerButton = document.querySelectorAll('.footer__section__head');
const body = document.body;



const toggle = (e) => {
    // console.log(e.target);
    menuToggle.classList.toggle('is-active');
    mobilemenu.classList.toggle('open');
    overlay.classList.toggle('showoverlay');
    body.classList.toggle('no-scroll');
}


for(let i=0; i < footerButton.length; i++) {
    let trigger = footerButton[i];
    trigger.addEventListener('click', (e) => {
        console.log(e);
        trigger.classList.toggle('is-open')
        trigger.nextElementSibling.classList.toggle('is-open');
    })
}


menuToggle.addEventListener('click', toggle);
overlay.addEventListener('click', toggle);
// footerButton.addEventListener('click', toggleContent)