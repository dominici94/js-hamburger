const iconaMenu = document.querySelector('.fas.fa-bars');
const hambMenu = document.querySelector('.hamburger-menu');


iconaMenu.addEventListener('click', function(){
    hambMenu.classList.add('active'); 
});

const croce = document.querySelector('.fas.fa-times');

croce.addEventListener('click', function(){ 
    hambMenu.classList.remove('active');
});

// document.querySelector('.fas.fa-bars').addEventListener('click', function(){
//     document.querySelector('.hamburger-menu').classList.add('active');
// });
// document.querySelector('.fas.fa-times').addEventListener('click', function(){
//     document.querySelector('.hamburger-menu').classList.remove('active');
// });