const handler = document.querySelector(".handler")
const prices = document.querySelectorAll(".price")
handler.addEventListener("click", () =>{
    handler.classList.toggle("buttonStart")
    handler.classList.toggle("buttonEnd")
    if (handler.classList.contains("buttonStart")) {       
        prices[0].innerHTML = 199.9
        prices[1].textContent = 249.9
        prices[2].textContent = 399.9
    } else if (handler.classList.contains("buttonEnd")){
        prices[0].innerHTML = 19.99
        prices[1].textContent = 24.99
        prices[2].textContent = 39.99
    }
})