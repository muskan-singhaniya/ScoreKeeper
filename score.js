const p1 = {
    score: 0,
    button: document.querySelector("#p1btn"),
    display: document.querySelector("#p1dis")
};

const p2 = {
    score: 0,
    button: document.querySelector("#p2btn"),
    display: document.querySelector("#p2dis")
};

const resetBtn = document.querySelector("#resetBtn");
const winScoreSelect = document.querySelector("#playto");
let isGameOver = false;
let winScore = 3;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2)
});

p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
});

winScoreSelect.addEventListener('change', function () {
    winScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.button.disabled = false;
        p.display.classList.remove("has-text-success", "has-text-danger");
    }
}
