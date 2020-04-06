import {degree} from "./helpers";

function CanvasCM(canvas) {
    if (!canvas)//TODO CHECK IS CANVAS
        throw 'Problems with canvas';

    const ctx = canvas.getContext('2d');

    /**
     *  Set size of canvas
     *
     * @param {number} [w] - Width of canvas
     * @param {number} [h] - Height of canvas
     * @returns {CanvasCM}
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

        return this;
    };

    /**
     * Draw line
     *
     * @param {number|{sx,sy,ex,ey}[]} sx - X position of start point || Array of points
     * @param {number} [sy] - Y position of start point
     * @param {number} [ex] - X position of end point
     * @param {number} [ey] - Y position of end point
     * @returns {CanvasCM}
     */
    this.line = function (sx, sy, ex, ey) {
        let lines = [];
        if (Array.isArray(sx)) {
            lines = sx;
        } else {
            lines = [
                [sx, sy, ex, ey]
            ];
        }

        lines.forEach((i) => {
            this.beginPath()
                .moveTo(i[0], i[1])
                .lineTo(i[2], i[3])
                .stroke()
                .closePath();
        });

        return this;
    };

    /**
     * Draw square
     *
     * @param x - X top left position
     * @param y - Y top left position
     * @param side - Side of the square
     * @returns {CanvasCM}
     */
    this.square = function (x, y, side) {
        this.beginPath()
            .rect(x, y, side, side)
            .fill()
            .stroke()
            .closePath();
        return this;
    };

    /**
     * Draw circle
     *
     * @param {number} x - X top left position
     * @param {number} y - Y top left position
     * @param {number} r - Radius of the circle
     * @returns {CanvasCM}
     */
    this.circle = function (x, y, r) {
        this.beginPath();
        this.arc(x, y, r, 0, degree(360));
        this.stroke();

        return this;
    };


    /**
     * Draw image
     *
     * @param {string} src - image src
     * @param {[]} s - list of params
     * @param {function} callback - callable after load image
     * @returns {CanvasCM}
     */
    this.drawImage = function (src, s, callback) {
        const sc = (s !== undefined) ? s.length : 0;
        if (sc !== 2 && sc !== 4 && sc !== 8) {
            console.error('Uncaught TypeError: Failed to execute \'drawImage\' on \'CanvasRenderingContext2D\': Valid arities are: [2, 4, 8], but ' + sc + ' arguments provided.');
            return this;
        }
        const img = new Image();
        img.src = src;
        img.onload = () => {
            if (sc === 2)
                ctx.drawImage(img, s[0], s[1]);
            else if (sc === 4)
                ctx.drawImage(img, s[0], s[1], s[2], s[3]);
            else
                ctx.drawImage(img, s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7]);

            if (callback) {
                callback.call(this);
            }

        };
        return this;
    };

    this.rotate = function (deg, x, y) {
        if (x !== undefined) {
            y = y === undefined ? x : y;
            ctx.translate(x, y);
        }
        ctx.rotate(degree(deg));
        if (x !== undefined)
            ctx.translate(-x, -y);
        return this;
    };

    this.clear = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return this;
    };

    /**
     * Return parameter of ctx
     * @param {string} p - Name of parameter
     * @returns {*}
     */
    this.get = function (p) {
        switch (p.toLowerCase()) {
            case 'canvas':
                return canvas;
            case 'ctx':
                return ctx;
            case 'width':
            case 'w':
                return canvas.width;
            case 'height':
            case 'h':
                return canvas.height;
        }
        return ctx[p];
    };

    /**
     *
     * @param {string|[]} name - event name or array of event names
     * @param {function} f - callable function
     * @returns {CanvasCM}
     */
    this.on = function (name, f) {
        if (Array.isArray(name)) {
            name.forEach(function (i) {
                canvas.addEventListener(i, f.bind(this));
            });
        } else {
            canvas.addEventListener(name, f.bind(this));
        }

        return this;
    };

    /**
     * Set parameter
     *
     * @param {string|Object} s - Name of parameter | Object of parameters (key:value)
     * @param {string} [val] - Value of parameter
     * @returns {CanvasCM}
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
     * Set unset functions
     *
     * @see {@link https://codepen.io/zachwolf/post/chaining-canvas-methods}
     */
    for (let method in ctx) {
        if (typeof ctx[method] === 'function' && this[method] === undefined) {
            this[method] = (...args) => {
                ctx[method](...args);
                return this;
            };
        }
    }

    return this;

}

const $c = (canvas) => {
    return new CanvasCM(canvas);
};

export default $c;
export {CanvasCM};