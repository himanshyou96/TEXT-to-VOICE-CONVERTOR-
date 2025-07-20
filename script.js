    let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceselect = document.querySelector("select");

function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) return;

    speech.voice = voices[0];
    voiceselect.innerHTML = ''; 

    voices.forEach((voice, i) => {
        const option = new Option(voice.name + ' (' + voice.lang + ')', i);
        voiceselect.add(option);
    });
}


populateVoices();

window.speechSynthesis.onvoiceschanged = populateVoices;

voiceselect.addEventListener("change", () => {
    speech.voice = voices[voiceselect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
