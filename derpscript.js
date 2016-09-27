$(document).ready(function() {
    window.vidrows = [$('#vidrow0'), $('#vidrow1')];
    $('#morevideos').bind('click', shownextrow);
});

shownextrow = function() { 
    vidrows[0].addClass('gallery-hidden');
}