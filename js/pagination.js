$(document).ready(function() {
    // Finding total number of pages
    var pages = $('.pagination__item--page').length;
    var pagesLast = pages - 5;
    var currentPage = $('.pagination__item--page.active').val();

    if (currentPage == 1){
      $('.pagination__item--prev').css('visibility','hidden');
    } else if (currentPage > 1 && currentPage <= 5){
      $('.pagination__item--page').slice(0,10).show();
    } else if (currentPage > 5 && currentPage < pagesLast){
      $('.pagination__item--page').hide();
      $('.active').show();
      $('.active').nextAll().slice(0,4).show();
      $('.active').prevAll().slice(0,5).show();
    } else if (currentPage >= pagesLast && currentPage < pages){
      $('.pagination__item--page').hide();
      $('.active').show();
      $('.pagination__item--page').slice(-10).show();
    } else if (currentPage == pages){
      $('.pagination__item--page').hide();
      $('.pagination__item--page').slice(-10).show();
      $('.pagination__item--next').css('visibility','hidden');
    }

    console.log(currentPage);
    // Clicking on a page number
    $('.pagination__item--page').click(function(){
        $('.pagination__item--page').removeClass('active');
        $('.pagination__item--page').hide();
        $(this).addClass('active');
        $('.pagination__item--prev').css('visibility','visible');
        $('.pagination__item--next').css('visibility','visible');
        if ($(this).val() == 1){
          $('.pagination__item--page').slice(0,10).show();
          $('.pagination__item--prev').css('visibility','hidden');
        } else if ($(this).val() <= 5 && $(this).val() > 1){
          $('.pagination__item--page').slice(0,10).show();
        } else if ($(this).val() < pages && $(this).val() >= pagesLast) {
          $(this).show();
          $('.pagination__item--page').slice(-10).show();
        } else if ($(this).val() == pages){
          $('.pagination__item--next').css('visibility','hidden');
          $('.pagination__item--page').slice(-10).show();
        } else {
          $(this).show();
          $(this).nextAll().slice(0,4).show();
          $(this).prevAll().slice(0,5).show();
        }
    });

    // Clicking on the previous button
    $('.pagination__item--prev').click(function(){
        var currentPage = $('.pagination__item--page.active');
        var currentPageVal = $('.pagination__item--page.active').val();
        $('.active').prev().addClass('active');
        currentPage.removeClass('active');
        $('.pagination__item--next').css('visibility','visible');
        if (currentPageVal === 2){
          $('.pagination__item--prev').css('visibility','hidden');
        } else if (currentPageVal <= 6){
          $('.pagination__item--page').hide();
          $('.pagination__item--page').slice(0,10).show();
        } else if (currentPageVal > 6 && currentPageVal <= pagesLast){
          $('.pagination__item--page').hide();
          $('.active').show();
          $('.active').nextAll().slice(0,4).show();
          $('.active').prevAll().slice(0,5).show();
        } else if (currentPageVal < pagesLast){
          $('.pagination__item--page').slice(-10).show();
        }
    });

    // Clicking on the next button
    $('.pagination__item--next').click(function(){
        var currentPage = $('.pagination__item--page.active');
        var currentPageVal = $('.pagination__item--page.active').val();
        $('.active').next().addClass('active');
        currentPage.removeClass('active');
        $('.pagination__item--prev').css('visibility','visible');
        if (currentPageVal < 5){
          $('.pagination__item--page').hide();
          $('.pagination__item--page').slice(0,10).show();
        } else if (currentPageVal > 5 && currentPageVal < pagesLast){
          $('.pagination__item--page').hide();
          $('.active').show();
          $('.active').nextAll().slice(0,4).show();
          $('.active').prevAll().slice(0,5).show();
        } else if (currentPageVal >= pagesLast && currentPageVal < (pages - 1)){
          $('.pagination__item--page').hide();
          $('.pagination__item--page').slice(-10).show();
        } else if (currentPageVal === (pages - 1)){
          $('.pagination__item--next').css('visibility','hidden');
        }
    });
});
