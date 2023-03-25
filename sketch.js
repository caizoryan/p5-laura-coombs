let t = 200;
let trs = [];
let shw = false;
let fontBold, fontRegular;
function preload() {
  fontBold = loadFont("./SuisseIntlLD-Bold.otf");
  fontRegular = loadFont("./SuisseIntlLD-Regular.otf");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  setValues(width, height);
  trs.push(
    new TextTrail("LAURA", color(255, 200, 0), laura, 0),
    new TextTrail("COOMBS", color(255, 200, 0), coombs, 0),
    new TextTrail("MARCH", color(255), date, 8 * t * 2),
    new TextTrail("28", color(255), date2, 8 * t * 2)
  );
  setTimeout(() => {
    shw = true;
  }, 32 * t);
}

function draw() {
  background(250, 0, 50);
  textSize(28);
  fill(0);
  textFont(fontBold);
  if (shw) {
    text("7PM", width / 2 - 300 + 30, height / 2 + 70);
    text("—VIA ZOOM", width / 2 - 300, height / 2 + 100);
  }
  textFont(fontRegular);
  for (const x of trs) x.update();
}

class TextTrail {
  constructor(text, border, keyframes, delay) {
    this.text = text;
    this.border = border;
    this.keyframes = keyframes;
    this.trail = [];
    this.pos = { x: keyframes[0].x, y: keyframes[0].y };
    this.tl = new Timeline();
    this.x = [];
    this.y = [];

    if (delay != 0) {
      this.x.push([this.pos.x, delay]);
      this.y.push([this.pos.y, delay]);
    }

    for (const key of this.keyframes) {
      this.x.push([key.x, t]);
      this.x.push([key.x, t]);
      this.y.push([key.y, t]);
      this.y.push([key.y, t]);
    }

    this.tl.add(new PropKeyframes(this.pos, "x", this.x));
    this.tl.add(new PropKeyframes(this.pos, "y", this.y));
    this.tl.loop();
    this.tl.animate();
    this.tl.setEasing("InOutQuad");
  }
  update() {
    this.tl.update();
    if (this.trail.length > 50) this.trail.splice(0, 1);
    this.trail.push({ x: this.pos.x, y: this.pos.y });
    for (let i = 0; i < this.trail.length; i++) {
      let p = this.trail[i];
      fill(this.border);
      stroke(this.border);
      strokeWeight(20 + i * 0.5);
      strokeJoin(ROUND);
      textSize(100);
      text(this.text, p.x, p.y);
      fill(0);
      noStroke();
    }
    text(this.text, this.pos.x, this.pos.y);
  }
}
