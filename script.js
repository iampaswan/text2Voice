let inputBtn = document.querySelector("#inputButton");
let voiceBtn = document.querySelector("#voiceButton");

function speak() {
  let synth = window.speechSynthesis;
  let voice = new SpeechSynthesisUtterance(`${inputBtn.value}`);
  synth.speak(voice);
  // inputBtn.value = "";
}

// voiceBtn.addEventListener("click", () => {
//   let synth = window.speechSynthesis;
//   let voice = new SpeechSynthesisUtterance(`${inputBtn.value}`);
//   synth.voiceBtn(voice);
// });
