/// <reference path="../typings/tsd.d.ts" />
var MySort;
(function (MySort) {
    var mySwap = function (arr, i, j) {
        var tmp_i = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp_i;
        return arr;
    };
    MySort.myShift = function (arr, from, to) {
        // assume  0 <= from, to < arr.length
        var d = from <= to ? 1 : -1;
        var i = from;
        while (i !== to) {
            mySwap(arr, i, i + d);
            i += d;
        }
        return arr;
    };
    MySort.insertSort = function (arr, lt) {
        for (var i = 0; i < arr.length; i++) {
            var j = 0;
            while (0 <= j && j < i) {
                if (lt(arr[i], arr[j])) {
                    MySort.myShift(arr, i, j);
                    break;
                }
                j++;
            }
        }
        return arr;
    };
})(MySort = exports.MySort || (exports.MySort = {}));
