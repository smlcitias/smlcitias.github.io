function main() {
  (function () {
     'use strict';

      $('a.page-scroll').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top - 40
              }, 500);
              return false;
            }
          }
        });

    // affix the navbar after scroll below header
    $('#nav').affix({
          offset: {
            top: $('header').height()
          }
    });
  }());

  // Add navigator listener to jump to different sections.
  let navigators = document.getElementsByClassName('change-sect');
  let sectionArr = [document.getElementById('news'),
                    document.getElementById('about'),
                    document.getElementById('research'),
                    document.getElementById('publication')];
  for (let i = 0; i < navigators.length; ++i) {
    navigators[i].addEventListener('click', function() {
      for (let j = 0; j < sectionArr.length; ++j) {
        if (navigators[i].innerHTML.toLowerCase() != sectionArr[j].id) {
          sectionArr[j].style.display = 'none';
          continue;
        }
        sectionArr[j].style.display = 'block';
      }
    })
  }

  // Add anchor listener of news.
  let newsPeople = document.getElementsByClassName('to-people');
  for (let i = 0; i < newsPeople.length; ++i) {
    newsPeople[i].addEventListener('click', function() {
      // Hide news section and show about section
      sectionArr[0].style.display = 'none';
      sectionArr[1].style.display = 'block';
    })
  }
  let newsPublication = document.getElementsByClassName('to-publication');
  for (let i = 0; i < newsPublication.length; ++i) {
    newsPublication[i].addEventListener('click', function() {
      // Hide news section and show publication section
      sectionArr[0].style.display = 'none';
      sectionArr[3].style.display = 'block';
    })
  }
}
main();
