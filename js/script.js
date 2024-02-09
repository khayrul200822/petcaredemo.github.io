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

const swiper = new Swiper('.swiper', {
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
