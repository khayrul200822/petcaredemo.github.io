const preloader_area = document.querySelector(".preloader")
window.addEventListener("load", () => {
  setTimeout(() => {
    preloader_area.style.display = "none"
  }, 2000)
})


//for select item
const select_option = document.querySelectorAll(".category_option ul li")
const select_field = document.querySelectorAll(".field_value");
select_option.forEach(option => {
  option.addEventListener("click", () => {
    // Remove style from previously selected option
    select_option.forEach(otherOption => {
      otherOption.style.background = "";
      otherOption.style.color = "";
    });
    option.style.background = "var(--color-two)";
    option.style.color = "var(--color-three)";

    select_field.forEach(field => {
      field.textContent = option.textContent;
    });
  });
});

//get elements
const optionMenu = document.querySelectorAll(".currency_option li");
const option_value = document.querySelector(".value_area");
const language_option = document.querySelectorAll(".ln_option li")
const language_value =document.querySelector(".ln_value");
optionMenu.forEach(item => {
    item.addEventListener("click" , () => {
        option_value.textContent = item.textContent;
    })
})
language_option.forEach(ln_item => {
    ln_item.addEventListener("click" , () => {
        language_value.textContent = ln_item.textContent;
    })
})
//add to cart count
const increase_button = document.querySelectorAll(".increase");
const decrease_button = document.querySelectorAll(".decrease");
const cart_value_input = document.querySelectorAll(".cart_value");

increase_button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let inputValue = parseInt(cart_value_input[index].value);
    cart_value_input[index].value = inputValue + 1;

  })
})
decrease_button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let input_value = parseInt(cart_value_input[index].value);
    if (input_value > 1)
      cart_value_input[index].value = input_value - 1;
  })
})


// //sticky header script
// $(document).ready(() => {
//   const heroSectionBottom = $(".comming_soon").offset().top + $(".comming_soon").outerHeight();
//   $(window).on("scroll", () => {
//     const scrollPosition = $(window).scrollTop();

//     if (scrollPosition >= (heroSectionBottom -1200)) {
//       $("header").addClass("sticky_animation");
//       $(".top-haeder").addClass("hide_top_header")
//     } else {
//       $("header").removeClass("sticky_animation");
//       $(".top-haeder").removeClass("hide_top_header");
//     }
//   });
// });





//cout down for offer
let dayValue = document.querySelector(".day_value");
let hrsValue = document.querySelector(".hrs_value");
let minValue = document.querySelector(".min_value");
let secValue = document.querySelector(".sec_value");

// Set the date you're counting down to (replace with your desired date)
const countdownDate = new Date("May 10, 2024 04:04:40").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function () {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const timeRemaining = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the HTML elements with the calculated values
  dayValue.textContent = formatTime(days);
  hrsValue.textContent = formatTime(hours);
  minValuetextContent = formatTime(minutes);
  secValue.textContent = formatTime(seconds);

  // If the countdown is over, display a message or perform any action
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    // You can add a message or perform an action when the countdown is over
    console
  }
}, 1000);

// Function to format time values with leading zeros
function formatTime(value) {
  return value < 10 ? "0" + value : value;
}




// accordian script
$(".accordion-content").css("display", "none");

$(".accordion-title").click(function () {
  $(".accordion-title").not(this).removeClass("open");
  $(".accordion-title").not(this).next().slideUp(300);
  $(this).toggleClass("open");
  $(this).next().slideToggle(300);
});


const quick_view_area = document.querySelector(".quick_view_popup")
const quick_view_btn = document.querySelector(".close_quick_view")
const quick_view_open = document.querySelectorAll(".quick_view_btn");
quick_view_open.forEach(btn => {
  btn.addEventListener("click", () => {
    quick_view_area.style.display = "flex"
  })
})
// const quick_view_btn = document.querySelector(".close_quick_view")
quick_view_btn.addEventListener("click" , () => {
  quick_view_area.style.display = "none"
})

 // scroll to top button
 var $button = $.backToTop({

  // background color
  backgroundColor: '#ED6436',

  // text color
  color: '#FFFFFF',

  // container element
  container: this._body, 

  // 'nonn', 'spin', 'fade', 'zoom', or 'spin-inverse'
  effect: 'spin',

  // enable the back to top button
  enabled: true, 

  // width/height of the back to top button
  height: 70,  
  width: 70,

  // icon
  icon: 'fas fa-chevron-up',

  // margins 
  marginX: 20,
  marginY: 20,  

  // bottom/top left/right
  position: 'bottom right',           

  // trigger position
  pxToTrigger: 600,

  // or 'fawesome'
  theme: 'default',

  // z-index
  zIndex: 999
  
});


//script for adding gallary
var swiper = new Swiper(".mySwiper7", {
  spaceBetween: 1,
  slidesPerView: 4,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination7",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    380: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    // when window width is >= 480px
    668: {
      slidesPerView: 5,
      spaceBetween: 10
    },

  }
})
var swiper2 = new Swiper(".mySwiper8", {
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next8",
    prevEl: ".swiper-button-prev8",
  },
  thumbs: {
    swiper: swiper,
  }
}
);



//script for adding gallary
var swiper = new Swiper(".mySwiper6", {
  spaceBetween: 1,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination6",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    380: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 480px
    668: {
      slidesPerView: 3,
      spaceBetween: 10
    },

  }
})
var swiper2 = new Swiper(".mySwiper5", {
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next5",
    prevEl: ".swiper-button-prev5",
  },
  thumbs: {
    swiper: swiper,
  }
}
);

