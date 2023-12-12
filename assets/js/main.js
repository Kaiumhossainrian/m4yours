(function ($) {
    "use strict";

///////////////////////////////////////////////////////
// Preloader

var introSec = document.querySelector(".intro_sec");

// Check if introSec element exists before performing operations
if (introSec) {
  // Add the "animate" class
  introSec.classList.add("animate");

  // Set display to "none" after 1000 milliseconds (1 second)
  setTimeout(function () {
    introSec.style.display = "none";
  }, 1500);

  // Scroll to the top of the page and allow scrolling
  setTimeout(function () {
    window.scrollTo(0, 0);
    document.body.style.overflow = "unset";
  }, 1500);
}

// Preloader End


// Menu

jQuery(document).ready(function () {
	jQuery('header .mainmenu').meanmenu({
    meanScreenWidth: "992",
  });
});


document.querySelectorAll('.menu-anim > li > a').forEach(button => button.innerHTML = '<div class="menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>');

setTimeout(() => {
  var menu_text = document.querySelectorAll(".menu-text span")
  menu_text.forEach((item) => {
    var font_sizes = window.getComputedStyle(item, null);
    let font_size = font_sizes.getPropertyValue("font-size");
    let size_in_number = parseInt(font_size.replace("px", ""));
    let new_size = parseInt(size_in_number / 3)
    new_size = new_size + "px"
    if (item.innerHTML == " ") {
      item.style.width = new_size
    }
  })
}, 1000)

// Menu End


// Search Start
document.addEventListener("click", (event) => {
  const searchToggle = event.target.closest(".search-icon");
  if (searchToggle) {
    searchToggle.classList.toggle("active");
  }
});
// Search End


///////////////////////////////////////////////////////
// Sticky Menu
$(window).on( 'scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $(".menu-area").addClass("sticky");
    } else {
        $(".menu-area").removeClass("sticky");
    }
});
// Sticky Menu End


///////////////////////////////////////////////////////
// Bottom to top start
$(document).ready(function () {
  $(window).on('scroll', (function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll-top').fadeIn();
    } else {
      $('#scroll-top').fadeOut();
    }
  }));
  $('#scroll-top').on( 'click', function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
// Bottom to top End



window.onload = function () {

  // Custom Cursor
  const cursor = document.querySelector('.cursor');

  if (cursor) {
    const editCursor = e => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };
    window.addEventListener('mousemove', editCursor);

    document.querySelectorAll("a, .cursor-pointer").forEach(item => {
      item.addEventListener('mouseover', () => {
        cursor.classList.add('cursor-active');
      });

      item.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor-active');
      });
    });
  }
};

// Custom Cursor End



}(jQuery)); 