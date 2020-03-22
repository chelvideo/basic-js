module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('error');
    if (!arr.length) return [];

    let resArr = [];
    for (let i = 0; i < arr.length; i += 1) {
      switch (arr[i]) {
        case '--discard-next':
          i++;
          break;
        case '--discard-prev':
          resArr.length > 0 ? resArr.pop() : null;
          break;
        case '--double-next':
          i+1 < arr.length  ? resArr.push(arr[i + 1]) : null;
          break;
        case '--double-prev':
          i > 0 ? resArr.push(arr[i - 1]) : null;
          break;
        default:
          resArr.push(arr[i]);
      }
    }
    return resArr;
    
};
