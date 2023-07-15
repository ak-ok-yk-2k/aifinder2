modelstatus = "";

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(480,380)
    video.hide()
}

function start()
{
    objectDetector = ml5.objectDetector(cocossd, modelLoaded);
    document.getElementById("modelstatus").innerHTML = "Status: Detecting Objects";
    document.getElementById("inputboxhehe").value

}

function modelLoaded()
{
    console.log("𝔐𝔬𝔡𝔢𝔩 𝔏𝔬𝔞𝔡𝔢𝔡!");
    console.log("If you find this, you are a legend");
    modelstatus = true;
}

function draw()
{
    image(video,0,0,480,380);
}