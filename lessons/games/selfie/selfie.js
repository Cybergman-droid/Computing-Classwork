let bodyPose;
let video;
let noseX = 0;
let noseY = 0;
let glassesImg;
let hatImg;
let poses = [];
let option;

function preload() {
  bodyPose = ml5.bodyPose();
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  bodyPose.detectStart(video, gotPoses);
}

function gotPoses(results) {
  poses = results;
  if (poses.length > 0) {
    console.log(poses[0]);
    noseX = poses[0].nose.x;
    noseY = poses[0].nose.y;
  }
}

/** This function redraws the sketch multiple times a second. */
function draw() {
  image(video, 0, 0);
  fill(225, 0, 0);
  if (option == "clown") {
    ellipse(noseX, noseY, 20, 20);
  }
  if (option == "glasses") {
    image(glassesImg, noseX - 100, noseY - 100, 200, 100);
  }
}

function glasses() {
  option = "glasses";
}

function clown() {
  option = "clown";
}
