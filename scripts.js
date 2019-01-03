(function(){
    function draw() {
        const $c_canvas = new $c(document.getElementById('c')).setSize()
            .set({
                strokeStyle: 'red'
            });
        for (let i = 0; i < $c_canvas.getCanvas().offsetWidth; i = i + 100) {
            $c_canvas
                .moveTo(i, 0)
                .lineTo(i + 100, 100)
                .stroke()
                .moveTo(i + 100, 0)
                .lineTo(i, 100)
                .stroke()
        }

        $c_canvas.rect(10, 10, 50, 50).fill()

    }
    draw();
    window.addEventListener('resize', function() {
        draw();
    })
})();