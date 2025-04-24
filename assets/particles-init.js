document.addEventListener("DOMContentLoaded", function () {
  if (!document.getElementById("particles-js")) return;

  particlesJS("particles-js", {
    particles: {
      number: {
        value: window.innerWidth < 768 ? 90 : 130,  // ✅ Mobile vs desktop
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#2A5CAA"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.6,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#6C757D",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: window.innerWidth < 768 ? 2.5 : 3.5,  // ✅ Mobile vs desktop
        direction: "none",
        out_mode: "bounce"
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        }
      }
    },
    retina_detect: true
  });
});