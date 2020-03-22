const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  let sample = Number(/-?\d+\.?\d*/.exec(sampleActivity));
  if (sample <= 0 || sample > MODERN_ACTIVITY || typeof sample == 'NaN' || typeof sampleActivity !== 'string') return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY/(sample))/(0.693/HALF_LIFE_PERIOD));
};
