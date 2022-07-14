var bg = document.getElementById("bgmusic");
bg.volume = 0.2;
setTimeout(function () {
    bg.play();
}, 6800)

var laser = document.getElementById("pewpew");
laser.volume = 0.6;
laser.play();

var boom = document.getElementById("blast");
boom.volume = 0.5;

setTimeout(function () {
    boom.play();
}, 66500)

var win = document.getElementById("ending");
win.volume = 0.2;
setTimeout(function () {
    win.play();
}, 70000)