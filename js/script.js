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
