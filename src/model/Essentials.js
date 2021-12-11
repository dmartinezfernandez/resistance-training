/**
 * @property {Object[]} data - Repetitions Maximum and percentage of 1RM
 */
class Essentials {
    static data = [
        { reps: 1, factor: 1.0 },
        { reps: 2, factor: 0.95 },
        { reps: 3, factor: 0.93 },
        { reps: 4, factor: 0.9 },
        { reps: 5, factor: 0.87 },
        { reps: 6, factor: 0.85 },
        { reps: 7, factor: 0.83 },
        { reps: 8, factor: 0.8 },
        { reps: 9, factor: 0.77 },
        { reps: 10, factor: 0.75 },
        { reps: 11, factor: 0.71 },
        { reps: 12, factor: 0.67 },
        //{ reps: 13, factor: 0.6633 },
        //{ reps: 14, factor: 0.6567 },
        { reps: 15, factor: 0.65 }
    ];
    /**
     * Calculate 1RM.
     * @param {number} load 
     * @param {number} reps - Repetitions
     * @returns {number}
     */
    static calc1RM(load, reps) {
        if (!(this._validateLoad(load) && this._validateReps(reps))) {
            return NaN;
        }
        return load / this.data.find(rm => rm.reps === reps).factor;
    }
    static _validateReps(reps) {
        return this.data.find(rm => rm.reps === reps) !== undefined;
    }
    static _validateLoad(load) {
        return load > 0.0;
    }
}

export default Essentials;