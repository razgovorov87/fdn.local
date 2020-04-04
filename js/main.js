const sidebarToggle = document.querySelector('.sidebar__toggler'),
    sidebarClose = document.querySelector('#sidebar__close');

let sliderCount = document.querySelector('.count span');

sidebarToggle.addEventListener('click', () => {
    
    $('#sidebar').toggleClass("open");
    
});


sidebarClose.addEventListener('click', () => {
    
    $('#sidebar').removeClass("open");
    
});

function dropcartClass(){
    $('.dropcart').toggleClass("dg");
}

$('.menu__item.cart').click(function() {
    $('.cart__wrapper').toggleClass("open");
    setTimeout(dropcartClass, 500);
});