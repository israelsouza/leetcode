/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

    a = s.split("")
    b = t.split("")

    if (a.length > b.length) {
        return false
    }

    const b_len = t.length;
    let subsequence = 0;

    for (let i = 0; i < b_len; i++) {
        if (a[subsequence] === b[i]) {
            subsequence++;
        }
    }

    if (subsequence === a.length) {
        return true
    } else {
        return false
    }

};