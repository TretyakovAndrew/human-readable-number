module.exports = function toReadable(number) {
    let numList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tensList = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundreds = Math.floor(number / 100);
    let tens = Math.floor(number % 100 / 10);
    let units = number % 10;

    if (number < 20) {
        return numList[number];
    }

    if (number >= 20 && number < 100) {
        if (units === 0) {
            return tensList[tens];
        } else {
            return `${tensList[tens]} ${numList[units]}`;
        }
    }

    if (tens === 0 && units === 0) {
        return `${numList[hundreds]} hundred`;
    } else if (tens === 0 && units !== 0) {
        return `${numList[hundreds]} hundred ${numList[units]}`;
    } else if (units === 0) {
        if (tens >= 2) {
            return `${numList[hundreds]} hundred ${tensList[tens]}`;
        } else {
            return `${numList[hundreds]} hundred ${numList[tens * 10]}`;
        }
    } else {
        return `${numList[hundreds]} hundred ${toReadable(number % 100)}`;
    }
}