//jquery-click-scroll
//by syamsul'isul' Arifin

// var sectionArray = [1, 2, 3, 4, 5, 6];

// $.each(sectionArray, function(index, value){
          
//      $(document).scroll(function(){
//          var offsetSection = $('#' + 'section_' + value).offset().top - 83;
//          var docScroll = $(document).scrollTop();
//          var docScroll1 = docScroll + 1;
         
        
//          if ( docScroll1 >= offsetSection ){
//              $('.navbar-nav .nav-item .nav-link').removeClass('active');
//              $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
//              $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
//              $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
//          }
         
//      });
    
//     $('.click-scroll').eq(index).click(function(e){
//         var offsetClick = $('#' + 'section_' + value).offset().top - 83;
//         e.preventDefault();
//         $('html, body').animate({
//             'scrollTop':offsetClick
//         }, 300)
//     });
    
// });

// $(document).ready(function(){
//     $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
//     $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
//     $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
// });
$(document).ready(function(){
    // 获取当前页面的 URL
    var currentPageUrl = window.location.href;

    // 根据不同的页面 URL 设置导航栏的激活状态
    if (currentPageUrl.includes('prs.html')) {
        setActiveButton('prs.html');
    } else if (currentPageUrl.includes('page2.html')) {
        setActiveButton('page2.html');
    } else if (currentPageUrl.includes('page3.html')) {
        setActiveButton('page3.html');
    } else if (currentPageUrl.includes('page4.html')) {
        setActiveButton('page4.html');
    } else if (currentPageUrl.includes('page5.html')) {
        setActiveButton('page5.html');
    } else if (currentPageUrl.includes('page6.html')) {
        setActiveButton('page6.html');
    } else if (currentPageUrl.includes('page6.html')) {
        setActiveButton('page7.html');
    }
});

function setActiveButton(pageUrl) {
    $('.navbar-nav .nav-item .nav-link').removeClass('active');
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link[href="' + pageUrl + '"]').addClass('active');
    $('.navbar-nav .nav-item .nav-link[href="' + pageUrl + '"]').removeClass('inactive');
}