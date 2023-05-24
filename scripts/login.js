const startBtn = document.querySelector("#startBtn")
const userInfo = [];

startBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const name = document.querySelector("#name")
    const email = document.querySelector("#email")
    userInfo.push(name.value, email.value)
    // console.log(userInfo)
    localStorage.setItem("user", name.value)
    window.location.href = "index.html"
})

// users = []

// user = { 
//     username:"Mikael",
//     password:"1234"
// }
// users.push(user);

// user = { 
//     username:"Espinola",
//     password:"12345"
// }
// users.push(user);

// localStorage.users = JSON.stringify(users)