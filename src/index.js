module.exports = function toReadable (number) {
    
    function numToString(num) {
        switch (num) {
            case 0: return 'zero';
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen';
            case 15: return 'fifteen';
            case 16: return 'sixteen';
            case 17: return 'seventeen';
            case 18: return 'eighteen';
            case 19: return 'nineteen';
        }
    }
    
    function tensToString(num) {
        switch (num) {
            case 2: return 'twenty';
            case 3: return 'thirty';
            case 4: return 'forty';
            case 5: return 'fifty';
            case 6: return 'sixty';
            case 7: return 'seventy';
            case 8: return 'eighty';
            case 9: return 'ninety';
        }
    }
    
    function toReadable(number) {
        let hundreds = Math.floor(number / 100);
        let tens = Math.floor(number % 100 / 10);
        let units = number % 10;
        let result = '';
    
        //numbers less than 20
        if (number < 20) {
            result = numToString(number);
            return result;
        }
    
        //two-digit numbers more than 19
        if (number >= 20 && number < 100) {
            if (number % 10 === 0) {
                result = tensToString(tens);
                return result;
            } else {
                result = `${tensToString(tens)} ${numToString(units)}`;
                return result;
            }
        }
    
        //three-digit numbers
        /*It's definitely bullshit, but it works.*/
        if (tens === 0 && units === 0) {
            result = `${numToString(hundreds)} hundred`;
        } else if (tens === 0 && units !== 0) {
            result = `${numToString(hundreds)} hundred ${numToString(units)}`;
        } else if (units === 0) {
            if (tens >= 2) {
                result = `${numToString(hundreds)} hundred ${tensToString(tens)}`;
            } else {
                result = `${numToString(hundreds)} hundred ${numToString(tens * 10)}`;
            }
        } else {
            result = `${numToString(hundreds)} hundred ${toReadable(number % 100)}`;
        }
    
        return result;
    }

    return toReadable(number);
}