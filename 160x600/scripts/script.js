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
    window.setInterval(function(){
        animate();
    }, 9100);
}

function addEventListeners() {
    document.getElementById("ad").addEventListener("click", clickthrough);
}

function clickthrough() {
    EB.clickthrough();
}

function animate() {
    $(document).ready(function() {
        $('#cta-1').slideFadeToggle();
        setTimeout(function(){
            $('#cta-1').hide();
            $('#cta-2').slideFadeToggle();
        }, 3000);
        setTimeout(function(){
            $('#cta-2').hide();
            $('#cta-3').slideFadeToggle();
        }, 6000);
        setTimeout(function(){
            $('#cta-3').hide();
        }, 9000);
    });
}

$.fn.slideFadeToggle  = function(speed, easing, callback) {
    return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};

window.addEventListener("load", initEB);
