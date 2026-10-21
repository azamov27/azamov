
let dino = document.getElementById("dino");
let kaktus = document.getElementById("kaktus");
let ball = document.getElementById("ball");

let sakrayapti = false;
let ochko = 0;
let tezlik = 5;
let tugadi = false;
let joy = 0;
let tezlikY = 0;

function sakra() {
    if (!sakrayapti && !tugadi) {
        sakrayapti = true;
        tezlikY = 14;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        sakra();
    }
});

dino.addEventListener("click", sakra);

function yangila() {
    if (tugadi) return;

    joy += tezlikY;
    tezlikY -= 0.7;

    if (joy <= 0) {
        joy = 0;
        sakrayapti = false;
    }

    dino.style.bottom = joy + "px";

    let x = kaktus.offsetLeft - tezlik;

    if (x < -50) {
        x = document.querySelector(".oyin").clientWidth;
        ochko++;
        ball.innerText = "Ball: " + ochko;
        tezlik = 5 + Math.floor(ochko / 5);
    }

    kaktus.style.left = x + "px";
    kaktus.style.right = "auto";

    let d = dino.getBoundingClientRect();
    let k = kaktus.getBoundingClientRect();

    if (
        d.right > k.left + 8 &&
        d.left < k.right - 8 &&
        d.bottom > k.top + 8
    ) {
        tugadi = true;
        ball.innerText = "O'yin tugadi! Ball: " + ochko;
        return;
    }

    requestAnimationFrame(yangila);
}

function boshlash() {
    ochko = 0;
    tezlik = 5;
    joy = 0;
    tezlikY = 0;
    tugadi = false;
    sakrayapti = false;

    dino.style.bottom = "0px";
    kaktus.style.left = "100%";
    ball.innerText = "Ball: 0";

    yangila();
}

boshlash();
