import '../styles/index.scss';
import $c from './index';

const $canvas = $c(document.getElementById('canvas'));

function draw($canvas) {
    $canvas
        .setSize()
        .circle(100, 75, 50)
        .interval(function () {
            this.set("fillStyle", "rgb(" + getRandomInt(0,255) + "," + getRandomInt(0,255) + "," + getRandomInt(0,255) + ")")
                .circle(100, 75, 50)
                .fill();
        }, 'test', 500)
        .cinterval('test', 2500);
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