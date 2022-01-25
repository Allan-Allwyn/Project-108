

function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uSxvoqfIg/model.json',modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotResults);
    console.log("Model is loaded !");
}
        
function gotResults(error,results){
console.log('Got Results');
}
function gotResults(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) +1;
        random_number_g = Math.floor(Math.random()*255) +1;
        random_number_b = Math.floor(Math.random()*255) +1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
       document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        

        img1 = document.getElementById("what_do_i_hear");

        if (results[0].label == "bark") {
            img1.src = 'dog.png'  ;
        }
        if (results[0].label == "meow") {
            img1.src = 'cat.png';
        }
        else if (results[0].label == "Background Noise") {
            img1.src = 'ear.jpg';
       }
     
    }}