/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    const a = word1.split("")
    const b = word2.split("")
    var c = '';

    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < b.length; j++) {
            c = c + a[i] + b[j]
            break
        }
    }

    if (a.length > b.length) {
        const dif = a.length - b.length
        for (let i = b.length; i < a.length; i++) {
            c = c + a[i]
        }
    } else if (b.length > a.length) {
        const dif = b.length - a.length
        for (let i = a.length; i < b.length; i++) {
            c = c + b[i]
        }
    }

    return c

};