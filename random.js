

function randomColor(){

    var letters = "1234567890ABCDEF".split('');
    var color = "#";

    for(var i = 0; i < 6; i++){

        color = color + letters[Math.floor(Math.random() * 16)]
    }
    

    return color;
}

document.getElementById('butt').onclick=function(){
   
    document.body.style.background = (randomColor())
    
}