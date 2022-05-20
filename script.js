var keyQ = document.getElementById('key-q');
var keyS = document.getElementById('key-s');
var keyD = document.getElementById('key-d');
var keyF = document.getElementById('key-f');
var keyG = document.getElementById('key-g');
var keyH = document.getElementById('key-h');
var keyJ = document.getElementById('key-j');
var keyK = document.getElementById('key-k');
var keyL = document.getElementById('key-l');


var boom = new Audio('boom.wav');
var clap = new Audio('clap.wav');
var hihat = new Audio('hihat.wav');
var kick = new Audio('kick.wav');
var openhat = new Audio('openhat.wav');
var ride = new Audio('ride.wav');
var snare = new Audio('snare.wav');
var tink = new Audio('tink.wav');
var tom = new Audio('tom.wav');



window.addEventListener('keyup', function(e){
    if (e.key === 'q') {
        boom.play();
        keyQ.classList.toggle('selected')
        document.body.style.backgroundColor = 'red'
        setTimeout(1000)
    } 
})

window.addEventListener('keyup', function(e){
    if (e.key === 's') {
        clap.play();
        keyS.classList.toggle('selected')
        document.body.style.backgroundColor = 'lightgray'
    }
})

window.addEventListener('keyup', function(e){
    if (e.key === 'd') {
        hihat.play();
        keyD.classList.toggle('selected')
        document.body.style.backgroundColor = 'wheat'
    }
})

window.addEventListener('keyup', function(e){
    if (e.key === 'f') {
        kick.play();
        keyF.classList.toggle('selected')
        document.body.style.backgroundColor = 'lightblue'
    }
})

window.addEventListener('keyup', function(e){
    if (e.key === 'g') {
        openhat.play();
        keyG.classList.toggle('selected')
        document.body.style.backgroundColor = 'green'
    }
})

window.addEventListener('keyup', function(e){
    if (e.key === 'h') {
        ride.play();
        keyH.classList.toggle('selected')
        document.body.style.backgroundColor = 'blue'
    }
})

window.addEventListener('keyup', function(e){
    if (e.key === 'j') {
        snare.play();
        keyJ.classList.toggle('selected')
        document.body.style.backgroundColor = 'grey'
    }
})

window.addEventListener('keyup', function(e){
    if (e.key === 'k') {
        tink.play();
        keyK.classList.toggle('selected')
        document.body.style.backgroundColor = 'brown'
    }
})

window.addEventListener('keyup', function(e){
    if (e.key === 'l') {
        tom.play();
        keyL.classList.toggle('selected')
        document.body.style.backgroundColor = 'teal'
    }
})



