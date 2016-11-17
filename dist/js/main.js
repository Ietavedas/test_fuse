$(document).ready(function(){
	

$('.name').focus(function() {
    $('.hint').hide();
});

$('.name').blur(function() {
    if ($(this).val().trim() === '') {
        $('.hint').show();
    }
});


$('.last_name').focus(function() {
    $('.lhint').hide();
});

$('.last_name').blur(function() {
    if ($(this).val().trim() === '') {
        $('.lhint').show();
    }
});


$('.email').focus(function() {
    $('.ehint').hide();
});

$('.email').blur(function() {
    if ($(this).val().trim() === '') {
        $('.ehint').show();
    }
});


$('.telephone').focus(function() {
    $('.thint').hide();
});

$('.telephone').blur(function() {
    if ($(this).val().trim() === '') {
        $('.thint').show();
    }
});


$('.massage').focus(function() {
    $('.mes').hide();
});

$('.massage').blur(function() {
    if ($(this).val().trim() === '') {
        $('.mes').show();
    }
});

});