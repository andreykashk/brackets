module.exports = function check(str, bracketsConfig) {
  const bracketOpen = [];
  const bracketClose = [];
  const res = [];

  bracketsConfig.forEach(function(arr) {
      bracketOpen.push(arr[0]);
      bracketClose.push(arr[1])
  });

  [...str].forEach(function (item) {
    if (bracketOpen.indexOf(item) >= 0 && (bracketClose.indexOf(item) < 0 || res.indexOf(item) < 0)) {
      res.push(item)
      return
    } 
    if (bracketClose.indexOf(item) >= 0 && bracketOpen[bracketClose.indexOf(item)] === res[res.length - 1]) {
      res.pop()
      return
    } else {
      res.push(item);
    }
  })

  if (res.length === 0 ) {
    return true
  } else {
    return false
  }
}

// console.log(check('([[[[]]]]))', [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]))
