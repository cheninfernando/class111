/* https://teachablemachine.withgoogle.com/models/gpTWLQ4oX/ */

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capturedimg' src="+data_uri+" >";
    })
}

console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gpTWLQ4oX/model.json",modelloaded);

function modelloaded(){
    console.log("modelloaded");
}

prediction1="";
prediction2="";

function speak(){
    var synth=window.speechSynthesis;
    speak_data1="The first prediction is: "+prediction1;
    speak_data2="The second prediction is:"+ prediction2;
    var utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterthis);
}