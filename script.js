const wishes = [

    "You make life beautiful 💖",
    "Your smile is magical ✨",
    "I’m lucky to have you ❤️",
    "You deserve endless happiness 🌸",
    "You are truly special 💕",
    "Every moment with you is precious 🌹",
    "You are my favorite person 💖"

];

let index = 0;

/* Typing */

function typeWish() {

    const typing =
    document.querySelector(".typing");

    typing.innerHTML =
    wishes[index];

    index++;

    if(index >= wishes.length) {

        index = 0;

    }

}

setInterval(typeWish, 2000);

typeWish();

/* Celebrate */

function celebrate() {

    alert(
    "🎉 HAPPY BIRTHDAY 🎂✨"
    );

    /* Confetti */

    for(let i = 0; i < 100; i++) {

        let confetti =
        document.createElement("div");

        confetti.innerHTML = "🎊";

        confetti.style.position =
        "fixed";

        confetti.style.left =
        Math.random() * 100 + "vw";

        confetti.style.top =
        "-50px";

        confetti.style.fontSize =
        Math.random() * 30 + 20 + "px";

        confetti.style.animation =
        "fall 4s linear forwards";

        document.body.appendChild(
        confetti);

        setTimeout(() => {

            confetti.remove();

        }, 4000);

    }

    /* Hearts */

    for(let i = 0; i < 40; i++) {

        let heart =
        document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position =
        "fixed";

        heart.style.left =
        Math.random() * 100 + "vw";

        heart.style.top =
        Math.random() * 100 + "vh";

        heart.style.fontSize =
        Math.random() * 30 + 20 + "px";

        heart.style.animation =
        "heartFloat 4s linear forwards";

        document.body.appendChild(
        heart);

        setTimeout(() => {

            heart.remove();

        }, 4000);

    }

}

/* Popup */

function showMessage() {

    const popup =
    document.getElementById("popup");

    const popupWish =
    document.getElementById(
    "popupWish");

    const randomWish =
    wishes[
    Math.floor(
    Math.random() *
    wishes.length
    )];

    popupWish.innerHTML =
    randomWish;

    popup.style.display =
    "block";

}

/* Close */

function closePopup() {

    document.getElementById(
    "popup"
    ).style.display =
    "none";

}

/* Gift */

function openGift() {

    const giftMessage =
    document.getElementById(
    "giftMessage");

    const messages = [

        "💖 Surprise Love For You 💖",
        "🎂 Cake For You 🎂",
        "🌹 Endless Happiness 🌹",
        "✨ Dreams Come True ✨",
        "💝 Lots Of Love 💝"

    ];

    const randomMessage =
    messages[
    Math.floor(
    Math.random() *
    messages.length
    )];

    giftMessage.innerHTML =
    randomMessage;

}

/* Secret Love */

function secretLove() {

    alert(
    "No matter what happens,\nI will always care for you ❤️"
    );

}

/* Letter */

function showLetter() {

    document.getElementById(
    "letterPopup").style.display =
    "block";

}

function closeLetter() {

    document.getElementById(
    "letterPopup").style.display =
    "none";

}