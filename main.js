left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function modelloaded(){
    console.log("poseNet is initilized");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
    }
}

function draw(){
    background("blue");
    textSize(difference);
    fill("red");
    text("hello", 50, 400);
    document.getElementById("font_size").innerHTML = "font size of text = "+ difference + "px";
}
