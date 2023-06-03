// localStorage application
const user = localStorage.getItem("user")
const score = localStorage.getItem("score")

document.querySelector("#userName").innerHTML = `${user}'s score:`
document.querySelector("#score").innerHTML = score
// localStorage application

// buttons section
const replayBtn = document.querySelector("#replayBtn")
const finishBtn = document.querySelector("#finishBtn")

replayBtn.addEventListener("click", () => {
    console.log("passei aqui")
    window.location.href = "index.html";
    localStorage.clear();
})
finishBtn.addEventListener("click", () => {
    window.location.href = "https://youtube.com";
    localStorage.clear();
})
// buttons section