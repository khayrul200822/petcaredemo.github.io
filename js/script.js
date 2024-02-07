// newsletter popup
const newsletter_poup_close = document.querySelector(".newsletter_close");
const newsletter_popup = document.querySelector(".newsletter_popup")

setTimeout(() => {
  newsletter_popup.style.transform= "scale(1)";
   },5000)
newsletter_poup_close.addEventListener("click", () => {
  newsletter_popup.style.transform= "scale(0)";
})


//add to cart count
const increase_button = document.querySelectorAll(".increase");
const decrease_button = document.querySelectorAll(".decrease");
const cart_value_input = document.querySelectorAll(".cart_value");

increase_button.forEach((btn , index) => {
  btn.addEventListener("click", () => { 
    let inputValue = parseInt(cart_value_input[index].value);
    cart_value_input[index].value = inputValue+1;
   
  })
})
decrease_button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let input_value = parseInt(cart_value_input[index].value);
    if(input_value > 1)
    cart_value_input[index].value = input_value-1;
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

