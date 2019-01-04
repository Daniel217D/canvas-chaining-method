(function () {
    function draw() {
        const $c_canvas = new $c(document.getElementById('c')).setSize()
            .set({
                strokeStyle: 'red'
            });
        for (let i = 0; i < $c_canvas.get('c').offsetWidth; i = i + 100) {
            $c_canvas
                .line(i, 0, i + 100, 100)
                .line(i + 100, 0, i, 100)
        }
        $c_canvas
            .set({
                'fillStyle': 'rgba(0,0,0,0)',
                'shadowBlur': 10,
                'shadowColor': 'brown'
            })
            .square(10, 10, 50)
            .set({
                'strokeStyle': 'red',
                'lineWidth': 2,
                'shadowBlur': 0,
            })
            .line([
                [10, 10, 60, 60],
                [60, 10, 10, 60]
            ]);
        $c_canvas.interval(function(i){
           this.line(100+i*100,50,200+i*100,50);
        },'a',500,2000)
            .timeout(function(){
                this.square(200,0,100)
            },'a',2100)
            .timeout(function(){
                this.square(200,0,100)
            },'b',2500)
            .ctimeout('b',2100);

        console.log($c_canvas.get('strokeStyle'));
    }

    draw();
    window.addEventListener('resize', function () {
        draw();
    })
})();