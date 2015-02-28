/*
 * tacc-website
 * v. 0.0.1
 * Saturday, February 28th, 2015, 12:41:32 AM
 * 
 * 2015 Andrzej Dubiel | http://adubiel.me/
 */

$('.nav-mobile-trigger').click(function(e){
  e.preventDefault();
  $(this).toggleClass('active');
  $('nav').toggleClass('show');
});

var win = $(window);
var timeline = $('.timeline-wrap'); 


$(document).on('touchstart mousedown', '[data-timeline]', function(){
  var direction = $(this).data('timeline'); 
  int00 = setInterval(function() { moveTimeline(direction); }, 100);
});

$(document).on('touchend mouseup', '[data-timeline]', function(){
  clearInterval(int00); 
});

function moveTimeline(direction) {
  var timeline = $('.timeline-wrap'); 
  var matrix = matrixToArray(timeline.css('transform')) ;
  var current = parseInt(matrix[4]);
  var move = (direction === 'future') ? current -= 250 : current += 250;

  if(current > 0 && (timeline.width() - win.width() > current - 100)) { 
    timeline.attr('style', '-webkit-transform: translateX(' + move + 'px);-ms-transform: translateX(' + move + 'px);-moz-transform: translateX(' + move + 'px); transform: translateX(' + move + 'px)');
  }
}

function matrixToArray(str) {
  return str.match(/(-?[0-9\.]+)/g);
}

$('.form-contact').submit(function(e){
  //prevent submit
  e.preventDefault();

  //gather data
  var email = $('#email').val();
  var name = $('#name').val();
  var checkbox = $('.checkbox-list input:checked').map(function() {
    return this.value;
  }).get().join('|');

  // validate
  if(email.length > 0 && name.length > 0) {


    // get data
    var formData = {
      name: name,
      email: email,
      checkbox: checkbox
    };

    // submit it
    $.ajax({
      type: 'POST',
      url: '',
      data: formData,
      success: function(data) {
        // go to thank you on success
        $('#contact').cycle('goto', 3);
      }
    }); 
  }
  else {
    // go back to first form if validation fails
    $('#contact').cycle('goto', 1);
  }
});

google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 11,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: false,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(40.4612861, -79.9233424), // New York

      // How you would like to style the map. 
      // This is where you would paste any style found on Snazzy Maps.
      styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    };

  // Get the HTML DOM element that will contain your map 
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);
  var image = 'images/map-pin.svg'; 
  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.4612861, -79.9233424),
    map: map,
    title: 'tACC',
    icon: image

  });
}
