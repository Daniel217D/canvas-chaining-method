(function () {
    function draw() {
        const $cc = new $c(document.getElementById('c')).setSize()


    }

    draw();
    window.addEventListener('resize', function () {
        draw();
    })
})();