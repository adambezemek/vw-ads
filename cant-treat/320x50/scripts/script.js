$(document).ready(function () {
    function initEB() {
        if (!EB.isInitialized()) {
            EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
        } else {
            startAd();
        }
    }

    function animate() {
        $("#vw-ad").flip({trigger: 'manual', axis: 'x'});
        setTimeout(function () {
            $("#vw-ad").flip(true);
        }, 2000)
    }

    function startAd() {
        animate();
    }

    window.addEventListener("load", initEB);
});
