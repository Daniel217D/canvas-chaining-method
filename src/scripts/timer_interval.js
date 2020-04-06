import {CanvasCM} from './canvas-cm';

CanvasCM.prototype._intervals = [];
CanvasCM.prototype._timeouts = [];

/**
 * Set interval and set this on ctx
 *
 * @param {function} f - Function for interval
 * @param {string|number} id - Interval id - use for cleaning
 * @param {number} delay - Delay of interval
 * @param {number} [stop] - Delay for clearInterval
 * @returns {CanvasCM}
 */
//TODO id as optional
CanvasCM.prototype.interval = function (f, id, delay, stop) {
    if (this._intervals[id])
        clearInterval(this._intervals[id]);

    let counter = 0;

    f.call(this, counter++);
    this._intervals[id] = setInterval(() => {
        f.call(this, counter++);
    }, delay);

    if (stop !== undefined)
        this.cinterval(id, stop);

    return this;
};

/**
 * Clear interval by id
 *
 * @param {string|number} id - Interval id
 * @param {number} [delay=0] - Delay before cleaning
 * @returns {CanvasCM}
 */
CanvasCM.prototype.cinterval = function (id, delay) {
    delay = (delay === undefined) ? 0 : delay;

    if (this._intervals[id])
        setTimeout( () => {
            clearInterval(this._intervals[id]);
        }, delay);

    return this;
};
/**
 * Set timeout and set this on ctx
 *
 * @param {function} f - Function for interval
 * @param {string|number} id - Interval id - use for cleaning
 * @param {number} delay - Delay of interval
 * @returns {CanvasCM}
 */

// TODO id as optional
CanvasCM.prototype.timeout = function (f, id, delay) {
    if (this._timeouts[id])
        clearTimeout(this._timeouts[id]);

    this._timeouts[id] = setTimeout(f.bind(this), delay);

    return this;
};
/**
 * Clear interval by id
 *
 * @param {string|number} id - Interval id
 * @param {number} [delay=0] - Delay before cleaning
 * @returns {CanvasCM}
 */
CanvasCM.prototype.ctimeout = function (id, delay) {
    delay = (delay === undefined) ? 0 : delay;

    if (this._timeouts[id])
        setTimeout( () => {
            clearTimeout(this._timeouts[id]);
        }, delay);

    return this;
};