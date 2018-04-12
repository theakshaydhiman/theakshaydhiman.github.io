/*
*   Lite Modal v0.1.2
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
        setTimeout( function() {
            fadeIn(lModalOverlay);
            fadeIn(lModalContent);
        }, 100);
    }
    lModalTrigger.addEventListener('click', showModal);

    // Close modal
    function closeModal() {
        fadeOut(lModalOverlay);
        fadeOut(lModalContent);
        b.classList.remove("lModal-opened");
    }
    lModalOverlay.addEventListener('click', closeModal);
    for (i = 0; i < lModalClose.length; i++) {
        lModalClose[i].addEventListener('click', closeModal, false);
    }

    // Fade out
    function fadeOut(el){
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