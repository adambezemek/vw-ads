var adDiv;

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {
    adDiv = document.getElementById("ad");

    addEventListeners();
    animate();
}

function addEventListeners() {
    document.getElementById("ad").addEventListener("click", clickthrough);
}

function clickthrough() {
    EB.clickthrough();
    window.location.href = 'https://www.virtuwell.com';
}

function flip() {
    document.querySelector("#ad").className = "flip-container flip";
}

function flipBack() {
    document.querySelector("#ad").className = "flip-container";
}

function animate() {
    setTimeout(function() {
        flip()
    }, 3000);
}

window.addEventListener("load", initEB);
