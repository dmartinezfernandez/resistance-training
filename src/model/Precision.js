const Precision = (function () {
    const DEFAULT = 1;
    const values = [2.5, 1, 0.5];
    const isValid = (value) => values.includes(value);
    /**
     * 
     * @param {*} value 
     * @returns Parsed number from value if valid, default value otherwhise.
     */
    const parse = (value) => {
        const x = parseFloat(value);
        if (values.includes(x))
            return x;
        else
            return DEFAULT;
    };

    return {
        values,
        default: DEFAULT,
        isValid,
        parse
    };
}());

export default Precision;