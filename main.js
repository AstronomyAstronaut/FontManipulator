difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = " + difference + "px";
    background('#0000FF');
    textSize(difference);
    fill('#d4af37');
    text('peter', 50, 400);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftwristX = " + leftWristX + "rightwristX = " + rightWristX + "difference = " + difference);
    }
}