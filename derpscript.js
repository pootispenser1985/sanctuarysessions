$(document).ready(function() {
    window.vidrows = [$('#vidrow0'), $('#vidrow1')];
    window.shownrow = 0;

    vidrows[1].hide();
    $('#morevideos').bind('click', shownextrow);
});

shownextrow = function() {
    vidrows[shownrow].hide();
    
    shownrow = shownrow + 1; 
    vidrows[shownrow].show();
}