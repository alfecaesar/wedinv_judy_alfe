console.log('🤵Alfe Caesar & Judy Ann👰');
console.log('💍NOV-18-2023💍');

// AUDIO PLAY/PAUSE
var oAudio = document.getElementById('myaudio');
var animationPauseOne = document.getElementById("animPauseOne");
var animationPauseTwo = document.getElementById("animPauseTwo");
var animationPlayOne = document.getElementById("animPlayOne");
var animationPlayTwo = document.getElementById("animPlayTwo");

function playAudio() {
    if (window.HTMLAudioElement) {
        try {
            if (oAudio.paused) {
                oAudio.play();
                animationPauseOne.beginElement();
                animationPauseTwo.beginElement();
            }
            else {
                oAudio.pause();
                animationPlayOne.beginElement();
                animationPlayTwo.beginElement();
            }
        }
        catch (e) {
            if (window.console && console.error("Error:" + e));
        }
    }
}

// RSVP
var modalTrigger = document.querySelector('.rsvp-container a.rsvp-trigger')
var modalBox = document.querySelector('.rsvp-container #open-modal')
var modalClose = document.querySelector('.rsvp-container  a.modal-close')

modalTrigger.addEventListener('click', (e) => {
    modalBox.classList.toggle('open');
})

modalClose.addEventListener('click', (e) => {
    modalBox.classList.toggle('open');
})