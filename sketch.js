//
//   /~\
// C oo
// _( ^)
// /   ~\
// Too anyone browsing this code, feel free to use it or tinker or edit it
// if you need help or have questions, contact me
// Github: https://github.com/caizoryan

// Add link to the zoom meeting here and it should work
const link = "https://www.youtube.com/watch?v=DLzxrzFCyOs";
// The link button will only show when it is time for the meeting,
// You can change date/time underneath here and double check to make sure its working if you want
let countDownDate = new Date("Mar 28, 2023 19:00:00").getTime();

let hours, minutes, seconds;
let t = 200;
let trs = [];
let shw = false;
let fontBold, fontRegular;
let itsTime = false;

function preload() {
  fontBold = loadFont("./craigFonts/SuisseIntlLD-Bold.otf");
  fontRegular = loadFont("./craigFonts/SuisseIntlLD-Regular.otf");
  fontBook = loadFont("./craigFonts/SuisseIntlLD-Book.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight).parent("p5");
  setValues(width, height);
  timerInit();
  trs.push(
    new TextTrail("LAURA", color(255, 200, 0), laura, 0),
    new TextTrail("COOMBS", color(255, 200, 0), coombs, 0),
    new TextTrail("MARCH", color(255), date, 8 * t * 2),
    new TextTrail("28", color(255), date2, 8 * t * 2)
  );
  setTimeout(() => {
    shw = true;
  }, 34 * t);

  console.log("The time on the poster was wrong, thanks to Omama :D");
}

function draw() {
  background(250, 0, 50);
  textSize(28);
  fill(0);
  textFont(fontBold);
  if (shw) {
    text("7PM", width / 2 - 300, height / 2 + 70);
    text("—VIA ZOOM", width / 2 - 300 + 30, height / 2 + 100);
    textFont(fontBook);
    if (!itsTime)
      text(
        `in ${hours}H ${minutes}M ${seconds}S`,
        width / 2 - 300,
        height / 2 + 135
      );
  }
  textFont(fontRegular);
  for (const x of trs) x.update();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setValues(width, height);
  trs = [];
  shw = false;
  trs.push(
    new TextTrail("LAURA", color(255, 200, 0), laura, 0),
    new TextTrail("COOMBS", color(255, 200, 0), coombs, 0),
    new TextTrail("MARCH", color(255), date, 8 * t * 2),
    new TextTrail("28", color(255), date2, 8 * t * 2)
  );
  setTimeout(() => {
    shw = true;
  }, 34 * t);
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

function timerInit() {
  let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    hours = Math.floor(distance / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      itsTime = true;
      clearInterval(x);
      showZoomLink();
    }
  }, 1000);
}

function showZoomLink() {
  let x = window.innerWidth / 2 - 300;
  let y = window.innerHeight / 2 + 130;
  let zoomButton = `
    <a style="
      position:fixed; 
      left:${x}px; 
      top:${y}px;"
      href="${link}"
      >
        JOIN ZOOM LINK
    </a>`;
  let tempInterval = setInterval(() => {
    if (shw) {
      setTimeout(() => {
        document.querySelector(".main").innerHTML += zoomButton;
        document.querySelector(".message").remove();
      }, 800);
      clearInterval(tempInterval);
    }
  }, 100);
}

// ....................................................
// ....................................................
// ........................./\.........................
// ..................______/__\_______.................
// ..................||-------------||.................
// ..................||             ||.................
// ..................||    \|||/    ||.................
// ..................||   [ @-@ ]   ||.................
// ..................||    ( ' )    ||.......       ...
// ..................||    _(O)_    ||.......|EXIT |...
// ..................||   / >=< \   ||.......|==>> |...
// ..................||__/_|_:_|_\__||.................
// ..................-----------------.................
// ....................................................
// ....................................................
// Monkey with a bowtie in the museum
