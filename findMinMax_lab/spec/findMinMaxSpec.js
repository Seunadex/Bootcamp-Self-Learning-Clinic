

(function() {
  'use strict';

var findMinMax = require("../app/findMinMax.js");
  
  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1, 4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [1, 20] for [1, 20, 3 , 4]', function () {
        expect(findMinMax.findMinMax([1, 20, 3, 4])).toEqual([1, 20]);
      });

      it('should return [14, 26] for [26, 14]', function () {
        expect(findMinMax.findMinMax([26, 14])).toEqual([14, 26]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [9] for [9, 9, 9, 9, 9, 9, 9]', function () {
        expect(findMinMax.findMinMax([9, 9, 9, 9, 9, 9, 9])).toEqual([9]);
      });

      it('should return [0] for [0, 0, 0, 0]', function () {
        expect(findMinMax.findMinMax([0, 0, 0, 0])).toEqual([0]);
      });

      it('should return [29] for [29, 29, 29, 29, 29, 29, 29]', function () {
        expect(findMinMax.findMinMax([29, 29, 29, 29, 29, 29, 29])).toEqual([29]);
      });

      it('should return [2] for [2]', function () {
        expect(findMinMax.findMinMax([2])).toEqual([2]);
      });

    });

  });

})();
