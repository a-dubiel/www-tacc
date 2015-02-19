/*
 * tacc-website
 * v. 0.0.1
 * Wednesday, February 18th, 2015, 5:13:51 PM
 * 
 * 2015 Andrzej Dubiel | http://adubiel.me/
 */

$('.nav-mobile-trigger').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('nav').toggleClass('show');
});