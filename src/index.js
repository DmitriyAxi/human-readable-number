module.exports = function toReadable (number) {
    let numberStr = String(number);
    let final = [];
    let finalString = '';

    function simpleNum(str) {
      switch (str) {
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '5': return 'five';
        case '6': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return 'nine';
      }
    }

    function tenNum(str) {
      switch (str) {
        case '10': return 'ten';
        case '11': return 'eleven';
        case '12': return 'twelve';
        case '13': return 'thirteen';
        case '14': return 'fourteen';
        case '15': return 'fifteen';
        case '16': return 'sixteen';
        case '17': return 'seventeen';
        case '18': return 'eighteen';
        case '19': return 'nineteen';
      }
    }

    function decNum(str) {
      switch (str) {
        case '2': return 'twenty';
        case '3': return 'thirty';
        case '4': return 'forty';
        case '5': return 'fifty';
        case '6': return 'sixty';
        case '7': return 'seventy';
        case '8': return 'eighty';
        case '9': return 'ninety';
      }
    }

    if (number === 0)
    final.push('zero');

    if (numberStr.length === 1 && numberStr[0] !== '0') {
        final.push(simpleNum(numberStr[0]));
    }

    if (numberStr.length === 2) {
      if (numberStr[0] === '1') {
        final.push(tenNum(numberStr[0] + numberStr[1]));
      }
      else {
        final.push(decNum(numberStr[0]));
        final.push(simpleNum(numberStr[1]));
      }
    }

    if (numberStr.length === 3) {
      final.push(simpleNum(numberStr[0]) + ' hundred');
      if (numberStr[1] === '1') {
        final.push(tenNum(numberStr[1] + numberStr[2]));
      }
      else {
        final.push(decNum(numberStr[1]));
        final.push(simpleNum(numberStr[2]));
      }
    }

    for (let i = 0; i < final.length; i++) {
      if (typeof final[i] === "string") {
        finalString += final[i].trim() + ' ';
      }

    }

    return finalString.trim();

  }
