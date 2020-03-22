module.exports = function getSeason(date) {
  
  if (date==undefined) return 'Unable to determine the time of year!';
  if (!date || !date.getMilliseconds()){
    throw 'error';
  }
  let m=date.getMonth();
  let mn;
  switch(true) {
    case (m>1&&m<5): mn='spring';break;
    case (m>4&&m<8): mn='summer';break;
    case (m>7&&m<11): mn='autumn';break;
    default: mn='winter';
  }
  return mn;
};
