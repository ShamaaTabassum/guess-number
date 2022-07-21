let secretNum = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highScore = document.querySelector(".highscore");
let displayScore = document.querySelector(".score");
const displayMsg = msg => {
    return document.querySelector(".message").textContent = msg;
}
document.querySelector(".check").addEventListener("click", () => {
    let guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        displayMsg(`⛔ No Number!`);
    } else if (guess < 1 || guess > 20) {
        displayMsg(`❌ Invalid Number`)
    } else if (guess === secretNum) {
        displayMsg(`🎊 Correct Number`);
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNum;
        if (highScore.textContent < score) {
            highScore.innerHTML = score;
        }
    } else if (guess !== secretNum) {
        if (score > 1) {
            displayMsg(guess > secretNum ? `📈 Too High` : `📉 Too Low`);
            score--;
            displayScore.innerHTML = score;
        } else {
            displayMsg(`💥 You lost the Game`);
            displayScore.innerHTML = 0;
        }

    }
})
document.querySelector(".again").addEventListener("click", () => {
    document.querySelector(".guess").value = "";
    displayMsg(`Start guessing...`);
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    if (highScore.textContent < score) {
        highScore.innerHTML = score;
    }
    score = 20;
    displayScore.innerHTML = score;
})
