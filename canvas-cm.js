function $c(canvas) {
    if (!canvas)//TODO CHECK IS CANVAS
        throw 'Problems with canvas';

    const ctx = canvas.getContext('2d');
    let intervals = [];

    /**
     *  Set size of canvas
     *
     * @param {number} w Width of canvas
     * @param {number} h Height of canvas
     * @returns {$c}
     */
    this.setSize = function (w, h) {
        if (w === undefined && h === undefined) {
            canvas.width = parseInt(getComputedStyle(canvas).width);
            canvas.height = parseInt(getComputedStyle(canvas).height);
        } else if (w !== undefined && h !== undefined) {
            canvas.width = w;
            canvas.height = h;
        } else {
            w = w === undefined ? h : w;
            canvas.width = w;
            canvas.height = w;
        }

        return this
    };

    this.line = function (sx, sy, ex, ey) {
        let lines = [];
        if (Array.isArray(sx)) {
            lines = sx;
        } else {
            lines = [
                [sx, sy, ex, ey]
            ]
        }
        lines.forEach((i) => {
            this.beginPath()
                .moveTo(i[0], i[1])
                .lineTo(i[2], i[3])
                .closePath()
                .stroke();
        });

        return this;
    };

    this.square = function(x,y,side){
        this.beginPath()
            .rect(x,y,side,side)
            .fill()
            .stroke()
            .closePath();
        return this;
    };

    this.interval = function(f,id,s,stop){
        if(intervals[id])
            clearInterval(intervals[id]);

        let counter = 0;

        f.call(this,counter++);
        intervals[id] = setInterval(() => {
            f.call(this,counter++)
        },s);

        if(stop !== undefined)
            this.cinterval(id,stop);

        return this;
    };

    this.cinterval = function(id,s){
        s = (s === undefined) ? 0 : s;

        if(intervals[id])
            setTimeout(function () {
                clearInterval(intervals[id]);
            },s);

        return this
    };

    this.get = function (p) {
        switch (p.toLowerCase()) {
            case 'canvas':
            case 'c':
                return ctx.canvas;
            case 'width':
            case 'w':
                return ctx.width;
            case 'height':
            case 'h':
                return ctx.height;
            default:
                return null;
        }
    };

    this.set = function (s, val) {
        if (typeof s === 'object' && s !== null) {
            for (let i in s) {
                if (s.hasOwnProperty(i)) {
                    ctx[i] = s[i];
                }
            }
        } else if (s !== undefined && val !== undefined) {
            ctx[s] = val;
        }
        return this;
    };


    for (let method in ctx) {
        if (typeof ctx[method] === 'function' && this[method] === undefined) {
            this[method] = (...args) => {
                ctx[method](...args);
                return this
            }
        }
    }

    return this;

}
