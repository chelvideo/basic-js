const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

    constructor() {
        this.value=0,
        this.res=[]
    }

    calculateDepth(arr, value = 0, res = []) {
        value++;
        res.push(value);
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) this.calculateDepth(arr[i], value, res)
        }
        return Math.max(...res);
      }
};