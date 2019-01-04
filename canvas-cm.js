function $c(canvas) {
    if (!canvas)//TODO CHECK IS CANVAS
        throw 'Problems with canvas';

    const ctx = canvas.getContext('2d');
    let intervals = [];

    /**
     *  Set size of canvas
     *
     * @param {number} w - Width of canvas
     * @param {number} h - Height of canvas
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

    /**
     * Draw line
     *
     * @param {number|{sx,sy,ex,ey}[]} sx - X position of start point || Array of points
     * @param {number} [sy] - Y position of start point
     * @param {number} [ex] - X position of end point
     * @param {number} [ey] - Y position of end point
     * @returns {$c}
     */
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

    /**
     * Draw square
     *
     * @param x - X top left position
     * @param y - Y top left position
     * @param side - Side of the square
     * @returns {$c}
     */
    this.square = function(x,y,side){
        this.beginPath()
            .rect(x,y,side,side)
            .fill()
            .stroke()
            .closePath();
        return this;
    };

    /**
     * Set interval and set this on ctx
     *
     * @param {function} f - Function for interval
     * @param {string|number} id - Interval id - use for cleaning
     * @param {number} delay - Delay of interval
     * @param {number} [stop] - Delay for clearInterval
     * @returns {$c}
     */
    this.interval = function(f,id,delay,stop){
        if(intervals[id])
            clearInterval(intervals[id]);

        let counter = 0;

        f.call(this,counter++);
        intervals[id] = setInterval(() => {
            f.call(this,counter++)
        },delay);

        if(stop !== undefined)
            this.cinterval(id,stop);

        return this;
    };

    /**
     * Clear interval by id
     *
     * @param {string|number} id - Interval id
     * @param {number} [s=0] - Delay before cleaning
     * @returns {$c}
     */
    this.cinterval = function(id,s){
        s = (s === undefined) ? 0 : s;

        if(intervals[id])
            setTimeout(function () {
                clearInterval(intervals[id]);
            },s);

        return this
    };

    /**
     * Return parameter of ctx
     * @param {string} p - Name of parameter
     * @returns {*}
     */
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
        }
        return ctx[p];
    };

    /**
     * Set parameter
     *
     * @param {string|Object} s - Name of parameter | Object of parameters (key:value)
     * @param {string} [val] - Value of parameter
     * @returns {$c}
     */
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

    /**
     * Set unset before functions
     *
     * @see {@link https://codepen.io/zachwolf/post/chaining-canvas-methods}
     */
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
