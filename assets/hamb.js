$(document).ready(function() {
    $('.burger_btn').click(function(event) {
        $('.nav_wrapper,.burger_btn').toggleClass('active');
    });
});
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});
document.querySelectorAll('.nav_link ul li a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.burger_btn').classList.remove("active")
      document.querySelector('.nav_wrapper').classList.remove("active")
    })
  })