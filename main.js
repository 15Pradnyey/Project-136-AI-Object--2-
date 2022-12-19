function setup(){
    canvas = createCanvas(500, 600);
    canvas.center();
    video = CreateCapture(VIDEO);
}

function start(){
    ObjectDetector = ml5.ObjectDetector('cocossd', modelloaded);
    document.getElmentById("status").innerHTML = "Status: Objects Detecting";
    input = document.getElementById("input").value;
}

function draw() {
    image(video, 0, 0, 500, 600);
}