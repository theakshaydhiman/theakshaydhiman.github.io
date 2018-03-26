var lModalOverlay = document.querySelector('.lmodal-overlay');
var lModalTrigger = document.querySelector('.lmodal-trigger');
var lModalContent = document.querySelector('.lmodal-content');
var lModalClose = document.getElementsByClassName('lmodal-close');
var b = document.getElementById('body');

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
for (var i = 0; i < lModalClose.length; i++) {
    lModalClose[i].addEventListener('click', closeModal, false);
}

// Fade out
function fadeOut(el){
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= .2) < 0) {
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
        if (!( (val += .15) > 1 ) ) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}