import '../styles/index.scss';
import $c from './index';

const $canvas = $c(document.getElementById('canvas'));

function draw($canvas) {
    $canvas
        .setSize()
        .set("strokeStyle", "red")
        .line(0,0,100, 100)
        .square(250,250,100)
        .circle(350,350,50)
        .stroke()
        .fill()
        .rotate(45,600, 600)
        .drawImage("https://source.unsplash.com/random/200x200", [500, 500], function () {
            console.log(this);
        })
        .rotate(-45,600, 600)
        .on('mousemove', function (e) {
            this.beginPath()
                .circle(e.pageX, e.pageY, getRandomInt(5, 40))
                .stroke()
                .closePath();
        })
        .timeout(function () {
            this.set("strokeStyle", "blue")
        }, "test", 5000);
}


draw($canvas);
window.addEventListener('resize', function () {
    draw($canvas);
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}