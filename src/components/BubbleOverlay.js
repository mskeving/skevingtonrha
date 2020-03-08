import React from "react";

const MAX_PARTICLES = 280;
const COLOURS = [
  "#69D2E7",
  "#A7DBD8",
  "#E0E4CC",
  "#F38630",
  "#FA6900",
  "#FF4E50",
  "#F9D423"
];
const TWO_PI = Math.PI * 2;
const random = (min, max) => {
  if (Array.isArray(min)) {
    return min[~~(Math.random() * min.length)];
  }
  if (typeof max !== "number") {
    max = min || 1;
    min = 0;
  }
  return min + Math.random() * (max - min);
};

class Particle {
  constructor(x, y, radius) {
    this.init(x, y, radius);
  }

  init(x, y, radius) {
    this.alive = true;
    this.radius = radius || 10;
    this.wander = 0.15;
    this.theta = random(TWO_PI);
    this.drag = 0.92;
    this.color = "#fff";
    this.x = x || 0.0;
    this.y = y || 0.0;
    this.vx = 0.0;
    this.vy = 0.0;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    this.vx *= this.drag;
    this.vy *= this.drag;

    this.theta += random(-0.5, 0.5) * this.wander;
    this.vx += Math.sin(this.theta) * 0.1;
    this.vy += Math.cos(this.theta) * 0.1;

    this.radius *= 0.96;
    this.alive = this.radius > 0.5;
  }

  draw(canvas) {
    canvas.beginPath();
    canvas.arc(this.x, this.y, this.radius, 0, TWO_PI);
    canvas.fillStyle = this.color;
    canvas.fill();
  }
}

export default class Poop extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  componentDidMount() {
    let particles = [];
    let canvas = window.Sketch.create({
      container: this.container.current
    });

    const spawn = (x, y) => {
      let particle = new Particle(x, y, random(5, 40));
      particle.wander = random(0.5, 2.0);
      particle.color = random(COLOURS);
      particle.drag = random(0.9, 0.99);
      const theta = random(TWO_PI);
      const force = random(2, 8);
      particle.vx = Math.sin(theta) * force;
      particle.vy = Math.cos(theta) * force;

      if (particles.length >= MAX_PARTICLES) {
        particles.shift();
      }

      particles.push(particle);
    };

    canvas.update = function() {
      for (let i = particles.length - 1; i >= 0; i--) {
        let particle = particles[i];
        if (particle.alive) {
          particle.move();
        } else {
          particles.splice(i, 1);
        }
      }
    };

    canvas.draw = function() {
      canvas.globalCompositeOperation = "lighter";
      for (var i = particles.length - 1; i >= 0; i--) {
        particles[i].draw(canvas);
      }
    };

    canvas.mousemove = function() {
      const numTouches = canvas.touches.length;
      for (let i = 0; i < numTouches; i++) {
        const touch = canvas.touches[i];
        const max = random(1, 4);
        for (let j = 0; j < max; j++) {
          spawn(touch.x, touch.y);
        }
      }
    };
  }

  render() {
    return (
      <div
        className="canvasContainer"
        style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0 }}
        ref={this.container}
      />
    );
  }
}
