/// <reference path="../typings/tsd.d.ts" />

export module MySort {

    interface CompFunc<T> {
        (a: T, b: T) : boolean;
    }

    interface SortFuncG {
        <T>(arr: Array<T>, comp: CompFunc<T>) : Array<T>;
    }

    var mySwap = <T>(arr: Array<T>, i: number, j: number) : Array<T> => {
        var tmp_i = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp_i;
        return arr;
    }

    export var myShift = <T>(arr: Array<T>, from: number, to: number) : Array<T> => {
        // assume  0 <= from, to < arr.length
        var d = from <= to ? 1 : -1;
        var i = from;
        while(i !== to){
            mySwap(arr, i, i + d);
            i += d;
        }
        return arr;
    };


    export var insertSort: SortFuncG = <T>(arr: Array<T>, lt: CompFunc<T>) : Array<T> => {

        for(var i = 0; i < arr.length; i++){

            let j = 0;

            while(0 <= j && j < i){
                if( lt(arr[i], arr[j]) ){
                    myShift(arr, i, j);
                    break;
                }
                j++;
            }
        }
        return arr;
    };

    export var selectSort: SortFuncG = <T>(arr: Array<T>, lt: CompFunc<T>) : Array<T> => {
        
        for(let i = 0; i < arr.length; i++){

            let j = i;

            let min      = arr[i],
                minIndex = i;

            while(j <= arr.length){
                // find 'min' and 'minIndex' between 'i <= j <= arr.length'
                if( lt(arr[j], min) ){
                    min      = arr[j];
                    minIndex = j;
                }
                j++;
            }
            myShift(arr, minIndex, i);
        }
        return arr;
    };
}