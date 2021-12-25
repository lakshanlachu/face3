Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
})
camera = document.getElementById("camera")

Webcam.attach(camera)

function capture()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    })
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/72by6dH_x/',modelloaded)

function modelloaded(){
    console.log('modelloaded')
}

function identify(){
    img = document.getElementById('captured_image')
    classifier.classify(img, gotResult)
}

function gotResult(error, result){
    if (error){
        console.log(error)
    }else{
        console.log(result)
        document.getElementById("oname").innerHTML=result[0].label
        document.getElementById("aname").innerHTML=result[0].confidence.toFixed(3)
    }
}