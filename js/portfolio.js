/**
 * Created by melkotoury on 12/29/2015.
 */

function gallery() {
    $('#tbf1').click(function () {
        bootbox.alert('<img src="img/portfolio/TBF/1.jpg" alt=""><h4>Lorem ipsum dolor sit amet</h4>');
    });
    $('#tbf2').click(function () {
        bootbox.alert('<img src="img/portfolio/TBF/2.jpg" alt=""><h4>Lorem ipsum dolor sit amet</h4>');
    });
    $('#tbf3').click(function () {
        bootbox.alert('<img src="img/portfolio/TBF/3.jpg" alt=""><h4>Lorem ipsum dolor sit amet</h4>');
    });
    $('#tbf4').click(function () {
        bootbox.alert('<img src="img/portfolio/TBF/4.jpg" alt=""><h4>Lorem ipsum dolor sit amet</h4>');
    });
    $('#tbf5').click(function () {
        bootbox.alert('<img src="img/portfolio/TBF/5.jpg" alt=""><h4>Lorem ipsum dolor sit amet</h4>');
    });
    $('#tbf6').click(function () {
        bootbox.alert('<img src="img/portfolio/TBF/6.jpg" alt=""><h4>Lorem ipsum dolor sit amet</h4>');
    });
    $('#fash1').click(function () {
        bootbox.alert('<img src="img/portfolio/Fashion/1.jpg" alt=""><h4>Lorem ipsum dolor sit amet</h4>');
    });
    $('#fash2').click(function () {
        bootbox.alert('<img src="img/portfolio/Fashion/2.jpg" alt=""><h4>Lorem ipsum dolor sit amet</h4>');
    });
    $('#fash3').click(function () {
        bootbox.alert('<img src="img/portfolio/Fashion/3.jpg" alt=""><h4>Lorem ipsum dolor sit amet</h4>');
    });
    $('#fash4').click(function () {
        bootbox.alert('<img src="img/portfolio/Fashion/4.jpg" alt=""><h4>Lorem ipsum dolor sit amet</h4>');
    });
    $('#fash5').click(function () {
        bootbox.alert('<img src="img/portfolio/Fashion/5.jpg" alt=""><h4>Lorem ipsum dolor sit amet</h4>');
    });
    $('#fash6').click(function () {
        bootbox.alert('<img src="img/portfolio/Fashion/6.jpg" alt=""><h4>Lorem ipsum dolor sit amet</h4>');
    });

}
var $itemsHolder = $('ul.thumbnails');
var $itemsClone = $itemsHolder.clone();
var $filterClass = "";
$('ul.filter li').click(function(e) {
    e.preventDefault();
    $filterClass = $(this).attr('data-value');
    if($filterClass == 'all'){ var $filters = $itemsClone.find('li'); }
    else { var $filters = $itemsClone.find('li[data-type='+ $filterClass +']'); }
    $itemsHolder.quicksand(
        $filters,
        { duration: 1000 },
        gallery
    );
});
$(document).ready(gallery);