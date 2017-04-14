/* 
Section title: Bootstrap Slider
GitHub: https://github.com/seiyria/bootstrap-slider
Documentation: http://seiyria.com/bootstrap-slider/
*/

/* Volume slider */
$('#volume').slider({
    formatter: function(value) {
        return value;
    }
});

/* Playback slider */
$('#playback').slider({
    formatter: function(value) {
        return value + ":" + value;
    }
});