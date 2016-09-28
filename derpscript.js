$(document).ready(function() {
    window.vidrows = [$('#vidrow0'), $('#vidrow1'), $('#vidrow2')];
    window.shownrow = 0;

    vidrows[1].hide();
    vidrows[2].hide();
    $('#morevideos').bind('click', shownextrow);
});

shownextrow = function() {
  /* if already on the last element, do this: */
    if ((vidrows.length - 1) === shownrow) {
      vidrows[shownrow].hide();
      window.shownrow = 0;
      vidrows[shownrow].show();
    }
  /*if you're anywhere else in the list, do this: */
    else {
      vidrows[shownrow].hide();
      shownrow = shownrow + 1;
      vidrows[shownrow].show();
  }
}
