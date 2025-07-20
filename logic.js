/*let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[4];

   voices.forEach((voice, i)=> (voiceselect.options[i] = new Option(voice.name, i)));
};

voiceselect.addEventListener("change", () =>{
    speech.voice = voices[voiceselect.value];
});







document.querySelector("button").addEventListener("click",() =>{ 
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
}) */


    let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceselect = document.querySelector("select");

function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) return;

    speech.voice = voices[0];
    voiceselect.innerHTML = ''; // clear old options

    voices.forEach((voice, i) => {
        const option = new Option(voice.name + ' (' + voice.lang + ')', i);
        voiceselect.add(option);
    });
}

// Try populating on page load
populateVoices();

// Try again when voices are loaded
window.speechSynthesis.onvoiceschanged = populateVoices;

voiceselect.addEventListener("change", () => {
    speech.voice = voices[voiceselect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
