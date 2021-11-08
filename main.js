const clicca = document.querySelector('.fas.fa-bars');

clicca.addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.add('active'); 
});

const remove = document.querySelector('.fas.fa-times');

remove.addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.remove('active');
});