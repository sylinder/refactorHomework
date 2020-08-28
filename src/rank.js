const voyageZone = [
  'china',
  'east-indies',
];

function handleVoyageLength(voyage, result) {
    if (voyage.length > 4) {
        result += 2;
    }
    if (voyage.length > 8) {
        result += voyage.length - 8;
    }
    return result;
}

function handleVoyageZone(voyage, result) {
  if (voyageZone.includes(voyage.zone)) {
    result += 4;
  }
  return result;
}

function voyageRisk (voyage) {
  let result = 1;
    result = handleVoyageLength(voyage, result);
    result = handleVoyageZone(voyage, result);
  return result;
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

function handleHistoryLength(history, result) {
  if (history.length < 5) {
    result += 4;
  }
  return result;
}

function filterHistoryByPositiveProfit(result, history) {
  result += history.filter(v => v.profit < 0).length;
  return result;
}

function isVoyageChina(voyage) {
  return voyage.zone === 'china';
}

function captainHistoryRisk (voyage, history) {
  let result = 1;
  result = handleHistoryLength(history, result);
  result = filterHistoryByPositiveProfit(result, history);
  if (isVoyageChina(voyage) && hasChina(history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function isVoyageInEastInies(voyage) {
  return voyage.zone === 'east-indies';
}

function isAndHadInChina(voyage, history) {
  return voyage.zone === 'china' && hasChina(history);
}

function calculateProfitByVoyageZone(voyage, result) {
    if (isVoyageChina(voyage)) {
        result += 1;
    }
    if (isVoyageInEastInies(voyage)) {
        result += 1;
    }
    return result;
}

function calculateProfitByVoyageAndHistory(voyage, history, result) {
    if (isAndHadInChina(voyage, history)) {
        result += 3;
        if (history.length > 10) {
            result += 1;
        }
        if (voyage.length > 12) {
            result += 1;
        }
        if (voyage.length > 18) {
            result -= 1;
        }
    } else {
        if (history.length > 8) {
            result += 1;
        }
        if (voyage.length > 14) {
            result -= 1;
        }
    }
    return result;
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
    result = calculateProfitByVoyageZone(voyage, result);
    result = calculateProfitByVoyageAndHistory(voyage, history, result);
  return result;
}

function getFinalResult(vpf, vr, chr) {
    if (vpf * 3 > (vr + chr * 2)) {
        return 'A';
    } else {
        return 'B';
    }
}

function rating (voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  return getFinalResult(vpf, vr, chr);
}

module.exports = {
  voyageRisk,
  captainHistoryRisk,
  voyageProfitFactor,
  rating
};

const voyage = {
  zone: 'west-indies',
  length: 10,
};
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  },{
    zone: 'west-indies',
    profit: 15,
  },{
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
