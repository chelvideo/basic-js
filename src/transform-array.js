const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('error');
    if (!arr.length) return [];

    let resArr = [];
    for (let i = 0; i < arr.length; i += 1) {
      switch (arr[i]) {
        case '--discard-next':
          resArr.push(null);
          i++;
          break;
        case '--discard-prev':
          if (resArr.length > 0) {
            resArr.pop(); 
            resArr.push(null);
          };
          break;
        case '--double-next':
          i+1 < arr.length  ? resArr.push(arr[i + 1]) : null;
          break;
        case '--double-prev':
          if (resArr.slice(-1)[0] == null) break;
          i > 0 ? resArr.push(arr[i - 1]) : null;
          break;
        default:
          resArr.push(arr[i]);
      }
    }
    return resArr.filter(item => {return item != null});
    
};
