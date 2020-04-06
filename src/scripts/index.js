import '../styles/index.scss';

import $c from './canvas-cm';

const $canvas = $c(document.getElementById('canvas'));

function draw($canvas) {
    $canvas
        .setSize()
        .beginPath()
        .circle(100, 75, 50)
        .stroke();
}


draw($canvas);
window.addEventListener('resize', function () {
    draw($canvas);
});