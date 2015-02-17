/*
 * tacc-website
 * v. 0.0.1
 * Monday, February 16th, 2015, 2:42:25 PM
 * 
 * 2015 Andrzej Dubiel | http://adubiel.me/
 */

$('.nav-mobile-trigger').click(function(){
    $(this).toggleClass('active');
    $('nav').toggleClass('show');
});