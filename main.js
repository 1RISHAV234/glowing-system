song1 = "";
song2 = "";
rightwrist = "";
leftwrist = "";
function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function play() {
    song.play();
}
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log("modelload");
}
function gotPoses(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
    }
}
function draw() {
    image(video,0,0,600,500);
}