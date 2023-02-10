noseX=0;
noseY=0;
function preload() {
  mask = loadImage('mask.png')
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(850,300);
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses)
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(mask, noseX, noseY, 100, 100);
}
function modelLoaded() {
  console.log('PoseNet Is Initialized');
}
function take_snapshot(){    
  save('myFilterImage.png');
}
function modelLoaded() {
    console.log('PoseNet está inicializado');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x-47;
        noseY = results[0].pose.nose.y-30;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}