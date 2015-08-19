/// <reference path="../typings/tsd.d.ts" />

export module MySort {

    interface CompFunc<T> {
        (a: T, b: T) : boolean;
    }

    interface SortFunc<T> {
        (arr: Array<T>, comp: CompFunc<T>) : Array<T>;
    }

    interface SortFuncG {
        <T>(arr: Array<T>, comp: CompFunc<T>) : Array<T>;
    }

    
    // "Contextual Type" works when non-generic type is used on the left side.
    var insertSortForNumber: SortFunc<number> = function (arr, comp) {
        console.log(arr.length);
        console.log(comp(arr[0], arr[1]));
        return arr;
    };
    
    // "Contextual Type" doesn't work for the generic type on the left side.
    // Here, the types of `arr` and `comp` are considered as `any`, which would raise an error when "noImplicitAny" options is on.
    var insertSortInferredAny: SortFuncG = function (arr, comp) {
        console.log(arr.length);
        console.log(comp(arr[0], arr[1]));
        return arr;
    };

    // That's why we need to put the type for the arguments explicitly like this.
    var insertSortExplicitTyped: SortFuncG = function <T>(arr: Array<T>, comp: CompFunc<T>) : Array<T>{
        console.log(arr.length);
        console.log(comp(arr[0], arr[1]));
        return arr;
    };

    // Here is the real code for sorting
    export var insertSort: SortFuncG = function <T>(arr: Array<T>, comp: CompFunc<T>) : Array<T>{
        console.log("editing sort.ts")
        return arr;
    };

}