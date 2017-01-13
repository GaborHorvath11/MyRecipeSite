
var $grid = $('.recipe-items').isotope('layout');

// filter items on button click
$('.recipe-filter').on( 'click', 'a', function(event) {
event.preventDefault();
var filterValue = $(this).attr('data-filter');
$grid.isotope({ filter: filterValue });

$('.recipe-filter li').removeClass('active');
$(this).closest('li').addClass('active');
});
