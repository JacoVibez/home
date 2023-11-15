/* Countdown
-------------------------------------------------- */
var countDownDate = new Date("Dec 26, 2023 1:0:0").getTime();

var countdownfunction = setInterval(function() {

  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("jacoCountDown").innerHTML = "JacoVibez Countdown";
  document.getElementById("description").innerHTML = "till Christmas🎄/ATH touchdown!🛬";
  document.getElementById("countDown").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds;
  
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("jacoCountDown").innerHTML = "";
    document.getElementById("countDown").innerHTML = "Merry Christmas";
    document.getElementById("description").innerHTML = "";
  }
}, 1000);

/* Snow falling particles
-------------------------------------------------- */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 52,
      density: {
        enable: true,
        value_area: 631.3280775270874
      }
    },
    color: {
      value: "#fff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

/* Masonry Grid
-------------------------------------------------- */
var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
    itemSelector: '.grid-item',
    isFitWidth: true

});

/* Navigation Bar
-------------------------------------------------- */
let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let closeBtnHam = document.querySelector('.closeBtnHam');
let searchBox = document.querySelector('.searchBox');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menuToggle');
let hamburger = document.querySelector('.hamburger');
let overlay = document.querySelector('.overlay');

menuToggle.onclick = function () {
    hamburger.classList.add('open');
    overlay.classList.add('open');
    closeBtnHam.classList.add('open')
};

closeBtnHam.onclick = function () {
    hamburger.classList.remove('open');
    overlay.classList.remove('open');
    closeBtnHam.classList.remove('open')
};

/* Dark Mode Switcher
-------------------------------------------------- */
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('white');
});