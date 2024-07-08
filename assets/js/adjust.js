$(document).ready(function() {
    var prevScrollPos = $(window).scrollTop();

    $(window).scroll(function() {
        var currentScrollPos = $(this).scrollTop();
        
        // Determine scroll direction
        if (currentScrollPos > prevScrollPos) {
            // Scrolling down, hide the header
            $('#site-header').css('top', '-100px'); // Adjust the distance to hide
        } else {
            // Scrolling up, show the header
            $('#site-header').css('top', '0');
        }
        
        prevScrollPos = currentScrollPos;
    });
});
