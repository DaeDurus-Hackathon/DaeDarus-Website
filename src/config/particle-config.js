const particlesConfig = 
{
    particles: {
      number: {
        value: 200
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 1,
          color: "#ccc"
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 5
        }
      },
      line_linked: {
        enable: true,
        distance: 120,
        width: 0.8
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        straight: false
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        repulse: {
          distance: 50,
          duration: 0.4
        }
      }
    }
  };

export default particlesConfig