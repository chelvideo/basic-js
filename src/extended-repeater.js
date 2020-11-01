const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let res = [];
    let { 
        repeatTimes = 1, 
        separator = "+", 
        addition, 
        additionRepeatTimes = 1, 
        additionSeparator = "|" 
    } = options;

  for (let i = 0; i < repeatTimes; i++) {
    res.push(`${str}`);
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (addition !== undefined) res.push(`${addition}`);
      if (j + 1 < additionRepeatTimes) {
        res.push(additionSeparator);
      }
    }
    if (i + 1 < repeatTimes) res.push(separator);
  }
  return res.join('')
};
  