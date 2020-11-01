const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let res = [];
  matrix.forEach((item, index) => { res = res.concat(item);
  });

  return res.filter(item=>item=='^^').length;
};
