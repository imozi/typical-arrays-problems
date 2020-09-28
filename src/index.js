exports.min = function min(array) {
    if (!Array.isArray(array) || array.length === 0) return 0;

    return array.reduce((a, e) => {
        return a < e ? a : (a = e);
    });
};

exports.max = function max(array) {
    if (!Array.isArray(array) || array.length === 0) return 0;
    return array.reduce((a, e) => {
        return a > e ? a : (a = e);
    });
};

exports.avg = function avg(array) {
    if (!Array.isArray(array) || array.length === 0) return 0;

    const sum = array.reduce((a, e) => {
        return a + e;
    });

    return sum / array.length;
};
