// darkmode.js

var options = document.getElementById('DarkModeIcon')

var options = {
    bottom: '64px', 
  right: 'unset',
  left: '32px', 
  time: '0.5s', 
  mixColor: '#fff', 
  backgroundColor: '#fff',  
  buttonColorDark: '#100f2c', 
  buttonColorLight: '#fff',
  saveInCookies: false, 
  label: '🌓', 
  autoMatchOsTheme: true 
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

// GSAP

gsap.from(".ThreeDImage", {
    opacity: 0, 
    y: 100, 
    duration: 1
  });


// Confetti

const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['🛋️', '🪑', '💺', '📺', '🛏️', '🪜'],
    }).then(() => jsConfetti.addConfetti())
})

