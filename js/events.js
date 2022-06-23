import {
  playButton,
  stopButton,
  increaseButton,
  decreaseButton,
  pauseButton,
  forestSoundButton,
  rainSoundButton,
  coffeeSoundButton,
  fireSoundButton,
  lightMode,
  displayMinutes,
  displaySeconds,
  darkMode,
  body,
  displayTimer,
  darkControls,
  darkSound
} from "./elements.js";

export default function Events({ controls, timer, sounds }) {
  playButton.addEventListener("click", () => {
    controls.play();
    timer.countDown();
   
  });

  pauseButton.addEventListener("click", () => {
    controls.pause();
    timer.pause();
    
  });

  stopButton.addEventListener("click", () => {
    timer.stop();
    controls.stop();
  });

  increaseButton.addEventListener("click", () => {
    timer.increaseFiveMinutes();
  });

  decreaseButton.addEventListener("click", () => {
    timer.decreaseFiveMinutes();
  });

  forestSoundButton.addEventListener("click", () => {
    controls.addSoundOn(forestSoundButton);
  });

  rainSoundButton.addEventListener("click", () => {
    controls.addSoundOn(rainSoundButton);
  });

  coffeeSoundButton.addEventListener("click", () => {
    controls.addSoundOn(coffeeSoundButton);
  });

  fireSoundButton.addEventListener("click", () => {
    controls.addSoundOn(fireSoundButton);
  });

  lightMode.addEventListener("click", () => {
    body.classList.add("darkBody");
    lightMode.classList.add("dark-mode");
    darkMode.classList.remove("dark-mode");
    displayTimer.classList.add("point");
    displayMinutes.classList.add("darkTimer");
    displaySeconds.classList.add("darkTimer");
    darkControls.classList.add("darkControls");
    darkSound.classList.add("darkSound");
    forestSoundButton.classList.add("dark-button");
    rainSoundButton.classList.add("dark-button");
    coffeeSoundButton.classList.add("dark-button");
    fireSoundButton.classList.add("dark-button");

    
    
  })
  darkMode.addEventListener("click", () => {
    body.classList.remove("darkBody");
    lightMode.classList.remove("dark-mode");
    darkMode.classList.add("dark-mode");
    displayMinutes.classList.remove("darkTimer");
    displaySeconds.classList.remove("darkTimer");
    darkControls.classList.remove("darkControls");
    darkSound.classList.remove("darkSound");
    forestSoundButton.classList.remove("dark-button");
    rainSoundButton.classList.remove("dark-button");
    coffeeSoundButton.classList.remove("dark-button");
    fireSoundButton.classList.remove("dark-button");
  })


}