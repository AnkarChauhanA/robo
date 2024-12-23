let btn = document.querySelector('#btn');
let content = document.querySelector('#content');
// sabse phle iko bolwate hai
function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "hi-GB";
  window.speechSynthesis.speak(text_speak)
}

// haam chhate hai kee time se wish kre
function wishMe() {
  let day = new Date();
  let hour = day.getHours();
  if (hour >= 0 && hour < 12) {
    speak("good morning sir how can i help you");
  } else if (hour >= 12 && hour < 16) {
    speak('good after noon sir how can i help you ');
  } else if (hour >= 16 && hour < 24) {
    speak("good evening sir how cam i help you ");
  } else {
    speak("good night sir how can i help you")
  }

}

// jaab bhee page load ho to ye wish kre

window.addEventListener('load', () => {
  wishMe();
})

// speech recognization kre ga
let speechRecognization = window.SpeechRecognition || window.webkitSpeechRecognition
let recognization = new speechRecognization()
recognization.onresult = (event) => {
  let currentIndex = event.resultIndex
  let transcript = event.results[currentIndex][0].transcript
  content.innerText = transcript;
  //  call kiay
  takeCommand(transcript);
}

// jaab haam button pe click kre to haam mic me bol ske
btn.addEventListener('click', () => {
  recognization.start();


})

// hamare input voise dene pe ye kaam kre      [take command]function

function takeCommand(message) {

  if (message.includes("Hello.") || message.includes("Hey")) {
    speak("Hello sir, how can I help you?");
  } else if (message.includes("Who are you?")) {
    speak("i am robo VIRTUAL ASSISTANT built by Mr. ankar ");
  } else if (message.includes("Please open YouTube") || message.includes("Open YouTube.")) {
    speak("YOUTUBE OPENING");
    window.open("https://www.youtube.com/");
  } else if (message.includes("Please open Facebook.") || message.includes("Open Facebook.")) {
    speak("facebook OPENING");
    window.open("https://www.facebook.com/");
  } else if (message.includes("Open Instagram.") || message.includes("Please open Instagram.")) {
    speak("opening instagram");
    window.open("https://www.instagram.com/");
  }

}



















