$(document).ready(function () {

    function initEB() {
        if (!EB.isInitialized()) {
            EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
        } else {
            startAd();
        }
    }

    function animate() {
        $(document).ready(function () {
            setTimeout(function () {
                $('#cta-1').slideFadeToggle(650);
            }, 500);
            setTimeout(function () {
                $('#cta-1').hide();
                $('#cta-2').slideFadeToggle(650);
            }, 3000);
            setTimeout(function () {
                $('#cta-2').hide();
                $('#cta-3').slideFadeToggle(650);
            }, 5500);
        });
    }

    function startAd() {
        animate();
    }

    $.fn.slideFadeToggle = function (speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
    };


    window.addEventListener("load", initEB);
});