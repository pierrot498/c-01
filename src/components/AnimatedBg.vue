<template>
  <div class="animatedBg">
    <canvas id="canvas" class="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "AnimatedBg",
  data: function () {
    return {
      scrollMarker: false,
      loaded: false,
      RoadMap: ["", "", "", "", ""],
      Faq: [
        {
          q: "Quo illo voluptatem et soluta error est error recusandae ?",
          r: "Quo illo voluptatem et soluta error est error recusandae ?",
          hide: true,
        },
        {
          q: "Quo illo voluptatem et soluta error est error recusandae ?",
          r: "Quo illo voluptatem et soluta error est error recusandae ?",
          hide: true,
        },
        {
          q: "Quo illo voluptatem et soluta error est error recusandae ?",
          r: "Quo illo voluptatem et soluta error est error recusandae ?",
          hide: true,
        },
        {
          q: "Quo illo voluptatem et soluta error est error recusandae ?",
          r: "Quo illo voluptatem et soluta error est error recusandae ?",
          hide: true,
        },
      ],
      Team: [
        {
          name: "Prénom Nom",
          insta: "",
          twitter: "",
          discord: "",
        },
        {
          name: "Prénom Nom",
          insta: "",
          twitter: "",
          discord: "",
        },
        {
          name: "Prénom Nom",
          insta: "",
          twitter: "",
          discord: "",
        },
        {
          name: "Prénom Nom",
          insta: "",
          twitter: "",
          discord: "",
        },
      ],
    };
  },
  mounted() {
    this.starsAnimation();
  },
  methods: {
    starsAnimation() {
      const canvas = document.getElementById("canvas");
      const c = canvas.getContext("2d");

      let w;
      let h;

      const setCanvasExtents = () => {
        w = canvas.getBoundingClientRect().width;
        h = canvas.getBoundingClientRect().height;
        canvas.width = w;
        canvas.height = h;
        console.log(w + " " + h);
      };

      setCanvasExtents();
      window.onresize = () => {
        setCanvasExtents();
      };

      const makeStars = (count) => {
        const out = [];
        for (let i = 0; i < count; i++) {
          const s = {
            x: Math.random() * 1600 - 800,
            y: Math.random() * 900 - 450,
            z: Math.random() * 1000,
            size: Math.random() * 4 + 1,
            color: { r: Math.random() * 10, g: Math.random() * 10, b: Math.random() * 10 },
            speed: Math.random(),
          };
          //console.log(s.x + " " + s.y + " " + s.z);
          out.push(s);
        }
        return out;
      };

      let stars = makeStars(2000);

      const clear = () => {
        c.clearRect(0, 0, canvas.width, canvas.height);
      };

      const putPixel = (x, y, brightness, size, color) => {
        const intensity = brightness * 255;
        const rgb = "rgb(" + color.r * intensity + "," + color.g * intensity + "," + color.b * intensity + ")";
        c.fillStyle = rgb;
        c.fillRect(x, y, size, size);
      };

      const moveStars = (distance) => {
        const count = stars.length;
        for (var i = 0; i < count; i++) {
          const s = stars[i];
          s.z -= distance;
          while (s.z <= 1) {
            s.z += 1000;
          }
        }
      };

      let prevTime;
      const init = (time) => {
        prevTime = time;
        requestAnimationFrame(tick);
      };

      const tick = (time) => {
        let elapsed = time - prevTime;
        prevTime = time;
        moveStars(elapsed * 0.1);
        clear();
        const cx = w / 2;
        const cy = h / 2;
        const count = stars.length;
        for (var i = 0; i < count; i++) {
          const star = stars[i];
          const x = cx + star.x / (star.z * 0.001);
          const y = cy + star.y / (star.z * 0.001);
          if (x < 0 || x >= w || y < 0 || y >= h) {
            continue;
          }
          const d = star.z / (1000.0 * star.speed);
          const b = 1 - d * d;

          putPixel(x, y, b, star.size, star.color);
        }

        setTimeout(() => {
          requestAnimationFrame(tick);
        }, 20);
      };

      requestAnimationFrame(init);
    },
  },
};
</script>

<style lang="scss" scoped>
.canvas {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  animation: killBg 10s infinite alternate;
}

@keyframes killBg {
  0% {
    transform: rotate(0deg);
    filter: drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) blur(0px);
  }
  10% {
    transform: rotate(-10deg);
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) blur(2px);
  }
  50% {
    transform: rotate(0deg);
    filter: drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) blur(0px);
  }
  60% {
    transform: rotate(10deg);
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) blur(2px);
  }
  90% {
    transform: rotate(0deg);
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) blur(2px);
  }
  100% {
    transform: rotate(0deg);
    filter: drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) blur(0px);
  }
}
</style>
