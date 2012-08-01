
//script for the navigation bar

var timeout    = 500;
var closetimer = 0;
var ddmenuitem = 0;

function menu_open()
{  menu_canceltimer();
   menu_close();
   ddmenuitem = $(this).find('ul').css('visibility', 'visible');}

function menu_close()
{  if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function menu_timer()
{  closetimer = window.setTimeout(menu_close, timeout);}

function menu_canceltimer()
{  if(closetimer)
   {  window.clearTimeout(closetimer);
      closetimer = null;}}

$(document).ready(function()
{  $('#menu > li').bind('mouseover', menu_open)
   $('#menu > li').bind('mouseout',  menu_timer)});

document.onclick = menu_close;






//script for slideshow



function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 2000 );
});


