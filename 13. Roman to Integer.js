/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    const arr = s.split("")
    var soma = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 'I' && arr[i + 1] == 'V') {
            soma = soma + 4
            i++
            continue
        }

        if (arr[i] == 'I' && arr[i + 1] == 'X') {
            soma = soma + 9
            i++
            continue
        }

        arr[i] == 'I' ? soma = soma + 1 : null;
        arr[i] == 'V' ? soma = soma + 5 : null;

        if (arr[i] == 'X' && arr[i + 1] == 'L') {
            soma = soma + 40
            i++
            continue
        }

        if ( arr[i] == 'X' && arr[i+1] == 'C' ) {
            soma = soma + 90
            i++
            continue
        }

        arr[i] == 'X' ? soma = soma + 10 : null;
        arr[i] == 'L' ? soma = soma + 50 : null;

        if ( arr[i] == 'C' && arr[i+1] == 'D' ) {
            soma = soma + 400
            i++
            continue
        }

        if ( arr[i] == 'C' && arr[i+1] == 'M' ) {
            soma = soma + 900
            i++
            continue
        }

        arr[i] == 'C' ? soma = soma + 100 : null;
        arr[i] == 'D' ? soma = soma + 500 : null;
        arr[i] == 'M' ? soma = soma + 1000 : null;

    }

    return soma

};