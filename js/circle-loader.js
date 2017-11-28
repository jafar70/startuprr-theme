// JavaScript 
$(document).ready(function() {
var progressbar = $('#progress_bar');
max = progressbar.attr('max');
time = (1000 / max) * 5;
value = progressbar.val();

var progressbar2 = $('#progress_bar2');
max2 = progressbar2.attr('max');
time2 = (1000 / max2) * 5;
value2 = progressbar2.val();

var progressbar3 = $('#progress_bar3');
max3 = progressbar3.attr('max');
time3 = (1000 / max3) * 5;
value3 = progressbar3.val();

var progressbar4 = $('#progress_bar4');
max4 = progressbar4.attr('max');
time4 = (1000 / max4) * 5;
value4 = progressbar4.val();

var progressbar5 = $('#progress_bar5');
max5 = progressbar5.attr('max');
time5 = (1000 / max5) * 5;
value5 = progressbar5.val();

var progressbar6 = $('#progress_bar6');
max6 = progressbar6.attr('max');
time6 = (1000 / max6) * 5;
value6 = progressbar6.val();

var loading = function() {
if (value < max) {
value += 1;
addValue = progressbar.val(value);
}
if (value2 < max2) {
value2 += 1;
addValue2 = progressbar2.val(value2);
}
if (value3 < max3) {
value3 += 1;
addValue3 = progressbar3.val(value3);
}
if (value4 < max4) {
value4 += 1;
addValue4 = progressbar4.val(value4);
}
if (value5 < max5) {
value5 += 1;
addValue5 = progressbar5.val(value5);
}
if (value6 < max6) {
value6 += 1;
addValue6 = progressbar6.val(value6);
}

$('#progress_bar').html(value + '%');
$('#progress_bar2').html(value2 + '%');
$('#progress_bar3').html(value3 + '%');
$('#progress_bar4').html(value4 + '%');
$('#progress_bar5').html(value5 + '%');
$('#progress_bar6').html(value6 + '%');

var $ppc = $('#pbar'),
deg = 360 * value / 100;
if (value > 50) {
$ppc.addClass('gt-50');
}

var $ppc2 = $('#pbar2'),
deg2 = 360 * value2 / 100;
if (value2 > 50) {
$ppc2.addClass('gt-50');
}

var $ppc3 = $('#pbar3'),
deg3 = 360 * value3 / 100;
if (value3 > 50) {
$ppc3.addClass('gt-50');
}

var $ppc4 = $('#pbar4'),
deg4 = 360 * value4 / 100;
if (value4 > 50) {
$ppc4.addClass('gt-50');
}

var $ppc5 = $('#pbar5'),
deg5 = 360 * value5 / 100;
if (value5 > 50) {
$ppc5.addClass('gt-50');
}

var $ppc6 = $('#pbar6'),
deg6 = 360 * value6 / 100;
if (value6 > 50) {
$ppc6.addClass('gt-50');
}

$('#progress-fill').css('transform', 'rotate(' + deg + 'deg)');
$('#progress-fill2').css('transform', 'rotate(' + deg2 + 'deg)');
$('#progress-fill3').css('transform', 'rotate(' + deg3 + 'deg)');
$('#progress-fill4').css('transform', 'rotate(' + deg4 + 'deg)');
$('#progress-fill5').css('transform', 'rotate(' + deg5 + 'deg)');
$('#progress-fill6').css('transform', 'rotate(' + deg6 + 'deg)');

$('#ppc-percents span').html(value + '%');
$('#ppc-percents2 span').html(value2 + '%');
$('#ppc-percents3 span').html(value3 + '%');
$('#ppc-percents4 span').html(value4 + '%');
$('#ppc-percents5 span').html(value5 + '%');
$('#ppc-percents6 span').html(value6 + '%');
};

   
$(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $('#pbar').offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
          var animate = setInterval(function() {
            loading();
          }, time);
					 // unbind event
            $(document).unbind('scroll');
        }
    });    
});
