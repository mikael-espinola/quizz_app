const startBtn = document.querySelector("#startBtn")
const userInfo = [];

startBtn.addEventListener("click", (e) => {
    const quantity = document.querySelector("#quantity")
    localStorage.setItem("quantity", quantity.value)
    if(quantity.value < 1 || quantity.value > 50) {
        
    } else {
        e.preventDefault()
        const name = document.querySelector("#name")
        const email = document.querySelector("#email")
        localStorage.setItem("user", name.value)
        localStorage.setItem("email", email.value)
        
        window.location.href = "quiz.html"
    }
})