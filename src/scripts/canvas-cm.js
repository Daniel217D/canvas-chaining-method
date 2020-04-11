import {degree} from "./helpers";

class CanvasCM {
    /**
     *
     * @param {HTMLCanvasElement} canvas - canvas element
     */
    constructor(canvas) {
        if (canvas === undefined || !(canvas instanceof HTMLCanvasElement))
            throw 'Problems with canvas';

        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        for (let method in this.ctx) {
            if (typeof this.ctx[method] === 'function' && this[method] === undefined) {
                this[method] = (...args) => {
                    this.ctx[method](...args);
                    return this;
                };
            }
        }
    }

    /**
     *  Set size of canvas
     *
     * @param {number} [w] - Width of canvas
     * @param {number} [h] - Height of canvas
     * @returns {CanvasCM}
     */
    setSize = (w, h) => {
        if (w === undefined && h === undefined) {
            this.canvas.width = parseInt(getComputedStyle(this.canvas).width);
            this.canvas.height = parseInt(getComputedStyle(this.canvas).height);
        } else if (w !== undefined && h !== undefined) {
            this.canvas.width = w;
            this.canvas.height = h;
        } else {
            w = w === undefined ? h : w;
            this.canvas.width = w;
            this.canvas.height = w;
        }

        return this;
    }

    /**
     * Draw line
     *
     * @param {number|{sx,sy,ex,ey}[]} sx - X position of start point || Array of points
     * @param {number} [sy] - Y position of start point
     * @param {number} [ex] - X position of end point
     * @param {number} [ey] - Y position of end point
     * @returns {CanvasCM}
     */
    line = (sx, sy, ex, ey) => {
        let lines = [];
        if (Array.isArray(sx)) {
            lines = sx;
        } else {
            lines = [
                [sx, sy, ex, ey]
            ];
        }

        lines.forEach((i) => {
            this.moveTo(i[0], i[1])
                .lineTo(i[2], i[3]);
        });

        return this;
    }

    /**
     * Draw square
     *
     * @param x - X top left position
     * @param y - Y top left position
     * @param side - Side of the square
     * @returns {CanvasCM}
     */
    square = (x, y, side) => this.rect(x, y, side, side);


    /**
     * Draw circle
     *
     * @param {number} x - X top left position
     * @param {number} y - Y top left position
     * @param {number} r - Radius of the circle
     * @returns {CanvasCM}
     */
    circle = (x, y, r) => this.arc(x, y, r, 0, degree(360));


    /**
     * Draw image
     *
     * @param {string} src - image src
     * @param {[]} s - list of params
     * @param {function} callback - callable after load image
     * @returns {CanvasCM}
     */
    drawImage = (src, s = [], callback) => {
        const sl = s.length;

        if (sl !== 2 && sl !== 4 && sl !== 8) {
            console.error('Uncaught TypeError: Failed to execute \'drawImage\' on \'CanvasRenderingContext2D\': Valid arities are: [2, 4, 8], but ' + sc + ' arguments provided.');
            return this;
        }

        const img = new Image();
        img.onload = () => {
            this.ctx.drawImage(img, ...s);

            if (callback) {
                callback.call(this, this);
            }
        };

        img.src = src;

        return this;
    }

    rotate = (deg, x, y) => {
        if (x !== undefined) {
            y = y === undefined ? x : y;
            this.ctx.translate(x, y);
        }

        this.ctx.rotate(degree(deg));

        if (x !== undefined)
            this.ctx.translate(-x, -y);

        return this;
    }


    clear = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        return this;
    }

    /**
     * Return parameter of ctx
     * @param {string} p - Name of parameter
     * @returns {*}
     */
    get = (p) => {
        switch (p.toLowerCase()) {
            case 'canvas':
                return this.canvas;
            case 'ctx':
                return this.ctx;
            case 'width':
            case 'w':
                return this.canvas.width;
            case 'height':
            case 'h':
                return this.canvas.height;
        }
        return this.ctx[p];
    };

    /**
     *
     * @param {string|[]} name - event name or array of event names
     * @param {function} f - callable function
     * @returns {CanvasCM}
     */
    on = (name, f) => {
        if (!Array.isArray(name)) {
            name = [name];
        }

        name.forEach((i) => {
            this.canvas.addEventListener(i, e => f.call(this, e, this));
        });

        return this;
    };

    /**
     * Set parameter
     *
     * @param {string|Object} s - Name of parameter | Object of parameters (key:value)
     * @param {string} [val] - Value of parameter
     * @returns {CanvasCM}
     */
    set = (s, val) => {
        if (typeof s === 'object' && s !== null) {
            for (let i in s) {
                if (s.hasOwnProperty(i)) {
                    this.ctx[i] = s[i];
                }
            }
        } else if (s !== undefined && val !== undefined) {
            this.ctx[s] = val;
        }
        return this;
    };
}

const $c = (canvas) => {
    return new CanvasCM(canvas);
};

export default $c;
export {CanvasCM};