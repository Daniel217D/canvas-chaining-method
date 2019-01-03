function $c(canvas) {
    if (!canvas)
        throw 'Problems with canvas';

    this.ctx = canvas.getContext('2d');


    this.setSize = function(x, y) {
        if (x === undefined && y === undefined) {
            this.ctx.canvas.width = parseInt(getComputedStyle(canvas).width);
            this.ctx.canvas.height = parseInt(getComputedStyle(canvas).height);
        } else if (x !== undefined && y !== undefined) {
            this.ctx.canvas.width = x;
            this.ctx.canvas.height = y;
        } else {
            x = x === undefined ? y : x;
            this.ctx.canvas.width = x;
            this.ctx.canvas.height = x;
        }

        return this
    };

    this.moveTo = function(x, y) {
        this.ctx.moveTo(x, y);
        return this;
    };

    this.lineTo = function(x, y) {
        this.ctx.lineTo(x, y);
        return this;
    };

    this.stroke = function() {
        this.ctx.stroke();
        return this;
    };

    this.getCanvas = function() {
        return this.ctx.canvas;
    };

    this.set = function(s, val) {
        if (typeof s === 'object' && s !== null) {
            for (let i in s) {
                if(s.hasOwnProperty(i)){
                    this.ctx[i] = s[i];
                }
            }
        } else if (s !== undefined && val !== undefined) {
            this.ctx[s] = val;
        }
        return this;
    };


    for (let method in this.ctx) {
        if (typeof this.ctx[method] === 'function' && this[method] === undefined) {
            this[method] = (...args) => {
                this.ctx[method](...args)
                return this
            }
        }
    }

    return this;

}
