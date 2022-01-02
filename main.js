function preload() {
    
}

function setup() {
Canva=createCanvas(500,500);
Canva.position(500,195);
video=createCapture(VIDEO);
video.hide()
poses=ml5.poseNet(video,posing)
poses.on('pose',loco)
}

function draw() {
 image(video,0,0,500,500) 
}

function Snap() {
save("filter.png");
}
function posing() {
 console.log("ready!")   
}
function loco(results) {
    if (results.length>0) {
        console.log(results)  
        console.log("x="+results[0].pose.nose.x)
        console.log("y="+results[0].pose.nose.y)
    }
    else{
    console.log("NOPE, Unblock your camera");
    }
}