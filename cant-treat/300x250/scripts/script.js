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


function animate() {
    $(document).ready(function() {
        $("#ad").flip({trigger: 'manual'}).show();
        setTimeout(function() {
            $("#ad").flip(true);
        }, 2000)
    });
}

window.addEventListener("load", initEB);
