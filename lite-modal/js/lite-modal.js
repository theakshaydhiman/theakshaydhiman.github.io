/*
*   Lite Modal v0.2.0
*   https://github.com/theakshaydhiman/lite-modal
*   (c) 2018 Akshay Dhiman. MIT License.
*/

(function() {

    var lModalOverlay = document.querySelector('.lmodal-overlay'),
        lModalTrigger = document.querySelector('.lmodal-trigger'),
        lModalContent = document.querySelector('.lmodal-content'),
        lModalClose = document.getElementsByClassName('lmodal-close'),
        b = document.getElementById('body'),
        i = 0;

    // Show modal
    function showModal() {
        b.classList.add("lModal-opened");
        b.style.filter = "blur(3px)";
        setTimeout( function() {
            fadeInOverlay(lModalOverlay);
            fadeIn(lModalContent);
        }, 100);
    }
    lModalTrigger.addEventListener('click', showModal);

    // Close modal
    function closeModal() {
        fadeOutOverlay(lModalOverlay);
        fadeOut(lModalContent);
        b.classList.remove("lModal-opened");
        b.style.filter = "blur(0px)";
    }
    lModalOverlay.addEventListener('click', closeModal);
    for (i = 0; i < lModalClose.length; i++) {
        lModalClose[i].addEventListener('click', closeModal, false);
    }

    // Fade out
    function fadeOut(el){
        el.style.opacity = 1;
        var scale = 1;

        (function fade() {
            scale -= 0.01;
            if ((el.style.opacity -= 0.2) < 0) {
                el.style.display = "none";
            } else {
                el.style.transform = "scale(" +scale+ "," +scale+ ")";
                requestAnimationFrame(fade);
            }
        })();
    }

    function fadeOutOverlay(el){
        el.style.opacity = 1;

        (function fade() {
            if ((el.style.opacity -= 0.2) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    }

    // Fade in
    function fadeIn(el, display){
        el.style.opacity = -1;
        el.style.display = display || "block";
        var scale = 1.1;

        (function fade() {
            var val = parseFloat(el.style.opacity);
            
            val += 0.4;
            scale -= 0.02;
            if ( val == null || val <= 1 ) {
                el.style.opacity = val;
                el.style.transform = "scale(" +scale+ "," +scale+ ")";
                requestAnimationFrame(fade);
            }
        })();
    }

    function fadeInOverlay(el, display){
        el.style.opacity = 0;
        el.style.display = display || "block";

        (function fade() {
            var val = parseFloat(el.style.opacity);
            val += 0.2;
            if ( val == null || val <= 1 ) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }

})();