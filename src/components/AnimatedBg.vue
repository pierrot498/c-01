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
      cursor: {
        x: 0,
        y: 0,
      },
      lastScroll: 0,
      scrollV: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.starsAnimation2();
  },
  methods: {
    handleScroll() {
      this.scrollV = window.scrollY - this.lastScroll;
      this.lastScroll = window.scrollY;
    },
    starsAnimation2() {
      const c = document.getElementById("canvas");
      const ctx = c.getContext("2d");
      let w;
      let h;

      var opts = {
          len: 50,
          count: 50,
          baseTime: 10,
          addedTime: 10,
          dieChance: 0.05,
          spawnChance: 1,
          sparkChance: 0.1,
          sparkDist: 10,
          sparkSize: 2,

          color: "hsl(hue,100%,light%)",
          baseLight: 50,
          addedLight: 10, // [50-10,50+10]
          shadowToTimePropMult: 6,
          baseLightInputMultiplier: 0.01,
          addedLightInputMultiplier: 0.02,

          cx: w / 2,
          cy: h / 2,
          repaintAlpha: 0.04,
          hueChange: 0.5,
        },
        tick = 0,
        lines = [],
        dieX = w / 2 / opts.len,
        dieY = h / 2 / opts.len,
        baseRad = (Math.PI * 2) / 6;

      const setCanvasExtents = () => {
        w = c.getBoundingClientRect().width;
        h = c.getBoundingClientRect().height;
        c.width = w;
        c.height = h;
        opts.cx = w / 2;
        opts.cy = h / 2;
        opts.len = h / 50;
        dieX = w / 2 / opts.len;
        dieY = h / 2 / opts.len;
      };

      setCanvasExtents();
      window.onresize = () => {
        setCanvasExtents();
      };

      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, w, h);

      function loop() {
        window.requestAnimationFrame(loop);

        ++tick;

        ctx.globalCompositeOperation = "source-over";
        ctx.shadowBlur = 0;
        ctx.fillStyle = "rgba(9,9,33,alp)".replace("alp", opts.repaintAlpha);
        ctx.fillRect(0, 0, w, h);
        ctx.globalCompositeOperation = "lighter";

        if (lines.length < opts.count && Math.random() < opts.spawnChance) lines.push(new Line());

        lines.map(function (line) {
          line.step();
        });
      }
      function Line() {
        this.reset();
      }
      Line.prototype.reset = function () {
        this.x = 0;
        this.y = 0;
        this.addedX = 0;
        this.addedY = 0;

        this.rad = 0;

        this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();

        this.color = opts.color.replace("hue", tick * opts.hueChange);
        this.cumulativeTime = 0;

        this.beginPhase();
      };
      Line.prototype.beginPhase = function () {
        this.x += this.addedX;
        this.y += this.addedY;

        this.time = 0;
        this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;

        this.rad += baseRad * (Math.random() < 0.5 ? 1 : -1);
        this.addedX = Math.cos(this.rad);
        this.addedY = Math.sin(this.rad);

        if (Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY) this.reset();
      };
      Line.prototype.step = function () {
        ++this.time;
        ++this.cumulativeTime;

        if (this.time >= this.targetTime) this.beginPhase();

        var prop = this.time / this.targetTime,
          wave = Math.sin((prop * Math.PI) / 2),
          x = this.addedX * wave,
          y = this.addedY * wave;

        ctx.shadowBlur = prop * opts.shadowToTimePropMult;
        ctx.fillStyle = ctx.shadowColor = this.color.replace("light", opts.baseLight + opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier));
        ctx.fillRect(opts.cx + (this.x + x) * opts.len, opts.cy + (this.y + y) * opts.len, 2, 2);

        if (Math.random() < opts.sparkChance)
          ctx.fillRect(opts.cx + (this.x + x) * opts.len + Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) - opts.sparkSize / 2, opts.cy + (this.y + y) * opts.len + Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize);
      };
      loop();
    },
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
      };

      setCanvasExtents();
      window.onresize = () => {
        setCanvasExtents();
      };

      const makeStars = (count) => {
        const out = [];
        for (let i = 0; i < count; i++) {
          const s = {
            x: Math.random() * w - w / 2,
            y: Math.random() * h - h / 2,
            z: Math.random() * 1000,
            size: Math.round(Math.random() * 4 + 1),
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
        c.clearRect(0, 0, w, h);
        //canvas.style.webkitFilter = "blur(1px)";
      };

      const putPixel = (x, y, brightness, size, color) => {
        const intensity = brightness * 255;
        const rgb2 = "rgb(" + color.r * intensity + "," + color.g * intensity + "," + color.b * intensity + ")";
        c.fillStyle = rgb2;
        c.fillRect(x, y, size, size);
      };

      const moveStars = (distance) => {
        const count = stars.length;
        for (var i = 0; i < count; i++) {
          const s = stars[i];
          s.y += this.scrollV;
          s.z -= distance;
          while (s.z <= 1) {
            s.z += 1000;
            s.y = Math.random() * h - h / 2;
          }
        }
        this.scrollV = 0;
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
          const d = star.z / (1000 * star.speed);
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
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  // background-image: url("https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/img/demo-1-bg.jpg");
  //animation: killBg 10s infinite alternate;
}

@keyframes killBg {
  0% {
    transform: rotate(0deg);
    filter: drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) blur(0px);
  }
  10% {
    transform: rotate(-10deg);
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) blur(1px);
  }
  50% {
    transform: rotate(0deg);
    filter: drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) blur(0px);
  }
  60% {
    transform: rotate(10deg);
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) blur(1px);
  }
  90% {
    transform: rotate(0deg);
    filter: drop-shadow(0px 0px 10px rgba(33, 196, 250, 1)) blur(1px);
  }
  100% {
    transform: rotate(0deg);
    filter: drop-shadow(0px 0px 1px rgba(33, 196, 250, 1)) blur(0px);
  }
}
</style>
