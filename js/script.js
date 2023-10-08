console.log('🤵Alfe Caesar & Judy Ann👰');
console.log('💍NOV-18-2023💍');


var oAudio = document.getElementById('myaudio');
// var btn = document.getElementById('play');
var animationPauseOne = document.getElementById("animPauseOne");
var animationPauseTwo = document.getElementById("animPauseTwo");
var animationPlayOne = document.getElementById("animPlayOne");
var animationPlayTwo = document.getElementById("animPlayTwo");

function playAudio() {
    // Check for audio element support.
    if (window.HTMLAudioElement) {
        try {
            // Tests the paused attribute and set state.
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
            // Fail silently but show in F12 developer tools console
            if (window.console && console.error("Error:" + e));
        }
    }
}