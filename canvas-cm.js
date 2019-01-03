function $c(canvas) {
    if (!canvas)//TODO CHECK IS CANVAS
        throw 'Problems with canvas';

    const ctx = canvas.getContext('2d');

    this.setSize = function(x, y) {
        if (x === undefined && y === undefined) {
            canvas.width = parseInt(getComputedStyle(canvas).width);
            canvas.height = parseInt(getComputedStyle(canvas).height);
        } else if (x !== undefined && y !== undefined) {
            canvas.width = x;
            canvas.height = y;
        } else {
            x = x === undefined ? y : x;
            canvas.width = x;
            canvas.height = x;
        }

        return this
    };

    this.line = function(sx,sy,ex,ey){
        this.beginPath()
            .moveTo(ex, ey)
            .lineTo(sx, sy)
            .closePath()
            .stroke();
        return this;
    };

    this.get = function(p) {
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

    this.set = function(s, val) {
        if (typeof s === 'object' && s !== null) {
            for (let i in s) {
                if(s.hasOwnProperty(i)){
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
                ctx[method](...args)
                return this
            }
        }
    }

    return this;

}
