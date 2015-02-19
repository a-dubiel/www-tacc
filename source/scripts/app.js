$('.nav-mobile-trigger').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('nav').toggleClass('show');
});