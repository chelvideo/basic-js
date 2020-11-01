const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) { /* members */
  if (!Array.isArray(arr)) return false;
  let res = arr.map(item=>{
    if (typeof item!='string') return '';
    return item.replace(/\s/g, '')[0].toUpperCase();
  })  
  res=res.sort().join('');
  return res;
};
