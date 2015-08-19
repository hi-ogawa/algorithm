/// <reference path="../typings/tsd.d.ts" />
var MySort;
(function (MySort) {
    // "Contextual Type" works when non-generic type is used on the left side.
    var insertSortForNumber = function (arr, comp) {
        console.log(arr.length);
        console.log(comp(arr[0], arr[1]));
        return arr;
    };
    // "Contextual Type" doesn't work for the generic type on the left side.
    // Here, the types of `arr` and `comp` are considered as `any`, which would raise an error when "noImplicitAny" options is on.
    var insertSortInferredAny = function (arr, comp) {
        console.log(arr.length);
        console.log(comp(arr[0], arr[1]));
        return arr;
    };
    // That's why we need to put the type for the arguments explicitly like this.
    var insertSortExplicitTyped = function (arr, comp) {
        console.log(arr.length);
        console.log(comp(arr[0], arr[1]));
        return arr;
    };
    // Here is the real code for sorting
    MySort.insertSort = function (arr, comp) {
        console.log("editing sort.ts");
        return arr;
    };
})(MySort = exports.MySort || (exports.MySort = {}));
