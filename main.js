img = "";
status = "";

function preload() {
    img = loadImage("")
}

function setup() {
    canvas = createCanvas(640,480);
    canvas.center();
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results);
    }
}