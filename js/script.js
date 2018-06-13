$(document).ready(function(){
    // Side nav 
    $('.sidenav').sidenav();

    const header = $('header');
    const range = 200;
    // Adds opacity on scroll
    $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop(),
        height = header.outerHeight(),
        offset = height / 1.1,
        calc = 1 - (scrollTop - offset + range) / range;

        header.css({ 'opacity': calc });

        if (calc > '1') {
            header.css({ 'opacity': 1 });
            $('nav .brand-logo, nav ul a, nav a').css({color:'black'});
        } else if ( calc < '0' ) {
            header.css({ 'opacity': 0 });
            $('nav .brand-logo, nav ul a, nav a').css({color:'white'});
        }

    });

});