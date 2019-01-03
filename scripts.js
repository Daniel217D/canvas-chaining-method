(function () {
    function draw() {
        const $c_canvas = new $c(document.getElementById('c')).setSize()
            .set({
                strokeStyle: 'red'
            });
        for (let i = 0; i < $c_canvas.get('c').offsetWidth; i = i + 100) {
            $c_canvas
                .line(i,0,i+100,100)
                .line(i+100,0,i,100)
        }
        $c_canvas.rect(10, 10, 50, 50)
            .set({
                'fillStyle':'blue',
                'shadowBlur':10,
                'shadowColor':'brown'
            })
            .fill()
            .stroke()
            .set({
                'strokeStyle':'red',
                'lineWidth':2
            })
            .line([
                [10,10,60,60],
                [60,10,10,60]
            ])

    }

    draw();
    window.addEventListener('resize', function () {
        draw();
    })
})();