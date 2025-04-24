
particlesJS("particles-js", {
  particles: {
    number: {
      value: 70,
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
      speed: 1.5,
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
