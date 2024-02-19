const preloader_area = document.querySelector(".preloader")
window.addEventListener("load", () => {
  setTimeout(() => {
    preloader_area.style.display = "none"
  }, 2000)
})




// newsletter popup
const newsletter_poup_close = document.querySelector(".newsletter_close");
const newsletter_popup = document.querySelector(".newsletter_popup")

setTimeout(() => {
  newsletter_popup.style.transform = "scale(1)";
}, 5000)
newsletter_poup_close.addEventListener("click", () => {
  newsletter_popup.style.transform = "scale(0)";
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

// accordian script
$(".accordion-content").css("display", "none");

$(".accordion-title").click(function () {
  $(".accordion-title").not(this).removeClass("open");
  $(".accordion-title").not(this).next().slideUp(300);
  $(this).toggleClass("open");
  $(this).next().slideToggle(300);
});

//offer countdown script
// let dayValue = document.querySelector(".days");
// let hrsValue = document.querySelector(".hrs");
// let minValue = document.querySelector(".min");
// let secValue = document.querySelector(".sec");

// // Set the date you're counting down to (replace with your desired date)
// const countdownDate = new Date("February 28, 2024 00:00:00").getTime();

// // Update the countdown every 1 second
// const countdownInterval = setInterval(function() {
//   // Get the current date and time
//   const now = new Date().getTime();

//   // Calculate the remaining time
//   const timeRemaining = countdownDate - now;

//   // Calculate days, hours, minutes, and seconds
//   const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//   // Update the HTML elements with the calculated values
//   dayValue.textContent = formatTime(days);
//   hrsValue.textContent = formatTime(hours);
//   minValue.textContent = formatTime(minutes);
//   secValue.textContent = formatTime(seconds);

//   // If the countdown is over, display a message or perform any action
//   if (timeRemaining < 0) {
//     clearInterval(countdownInterval);
//     // You can add a message or perform an action when the countdown is over
//   }
// }, 1000);

// // Function to format time values with leading zeros
// function formatTime(value) {
//   return value < 10 ? "0" + value : value;
// }


// appoinment popup
const appo_popup = document.querySelector(".appoinment_popup");
const appo_popup_close = document.querySelector(".appo_close");
const appo_popup_open = document.querySelectorAll(".slider_button button")

appo_popup_open.forEach(btn => {
  btn.addEventListener("click", () => {
    appo_popup.style.display = "flex"
  })
})

appo_popup_close.addEventListener("click", () => {
  appo_popup.style.display = "none"
})

const hover_product = document.querySelectorAll(".ts_single_product")
hover_product.forEach(p => {
  const product_option1 = p.querySelectorAll(".single_option:first-child");
  const product_option2 = p.querySelectorAll(".single_option:nth-child(2)");
  const product_option3 = p.querySelectorAll(".single_option:last-child");
  p.addEventListener("mouseover", () => {
    product_option1.forEach(option => {
      option.style.animation = "fade_left1 .6s linear forwards alternate"
    })
    product_option2.forEach(option => {
      option.style.animation = "fade_left2 .6s linear .1s forwards alternate"
    })
    product_option3.forEach(option => {
      option.style.animation = "fade_left3 .6s linear .2s forwards alternate"
    })
  })
  p.addEventListener("mouseleave", () => {
    product_option1.forEach(option => {
      option.style.animation = "fade_out1 .6s linear forwards alternate"
    })
    product_option2.forEach(option => {
      option.style.animation = "fade_out2 .6s linear .1s forwards alternate"
    })
    product_option3.forEach(option => {
      option.style.animation = "fade_out3 .6s linear .2s forwards alternate"
    })
  })
})


var swiper = new Swiper(".mySwiper4", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
  },
  breakpoints: {
    500: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1035: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".mySwiper3", {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1035: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});


var swiper = new Swiper(".mySwiper2", {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1035: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});


var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  breakpoints: {
    500: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1035: {
      slidesPerView: 7,
      spaceBetween: 40,
    },
  },
});
const swiper2 = new Swiper('.mySwiper1', {
  effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
    },
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 0,
    }
  }
});
