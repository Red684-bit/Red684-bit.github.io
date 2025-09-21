// Homepage JavaScript for Red684-bit.github.io

$(document).ready(function() {
  // Animated progress bar
  function updateProgress() {
    var d = new Date();
    var com = d.getMonth() + 1;
    var m = (d.getMonth() + 11) % 12;
    var ran = com == 2 ? (d.getFullYear() % 4 == 0 ? 29 : 28) : 
              ((com % 2 == 0 && com >= 8) || (com % 2 == 1 && com < 8) ? 31 : 30);
    var bar = (m % 7 + (d.getDate() / ran)) * 25;
    
    // Animate progress bar
    $('#progressbar').animate({
      width: bar + '%'
    }, 1500, 'easeOutQuart');
    
    // Update text
    $('#progress-text').text(Math.round(bar) + '%');
    $('#semester-progress').text(Math.round(bar) + '%');
    
    // Update aria value
    $('#progressbar').attr('aria-valuenow', Math.round(bar));
  }
  
  // Initialize progress
  setTimeout(updateProgress, 1000);
  
  // Add smooth scrolling
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 80
      }, 1000);
    }
  });
  
  // Add hover effects to course cards
  $('.course-card').hover(
    function() {
      $(this).find('.course-icon').css('transform', 'scale(1.1) rotate(5deg)');
    },
    function() {
      $(this).find('.course-icon').css('transform', 'scale(1) rotate(0deg)');
    }
  );
});
