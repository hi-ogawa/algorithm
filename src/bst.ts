/// <reference path="../typings/tsd.d.ts" />

import _ = require('underscore')

class BinTree<T> {
    constructor(
        public val:    T, 
        public parent: BinTree<T> = null,
        public left:   BinTree<T> = null,
        public right:  BinTree<T> = null
    ) {}
}


// helper functions
export var rep = (n: number, s: string) : string => {
    return _.reduce((_.range(n).map(() => s)), ((soFar, sToAdd) => soFar + sToAdd), "");
}

export class BST<T> {

    private bt: BinTree<T>;

    constructor(
        arr:  T[],
        private comp: (a: T, b: T) => boolean
    ) {
        this.bt = null;
        arr.forEach( (el) => this.insert(el) );
    }

    // public interface methods
    insert(el: T) : void    { this.bt = this._insert(this.bt, el); }

    search(el: T) : boolean { return this._search(this.bt, el); }

    delete(el: T) : void    { 
    }

    traverse = <U>(f: (t: T) => U) : U[] => {
        return [];
    }

    findMin() : BST<T> {
        return null;
    }

    findMax() : BST<T> {
        return null;
    }

    visualize() : string {
        return this._visualize(this.bt, 0).out;
    }


    // private method implementations
    private _insert = (tree: BinTree<T>, el: T) : BinTree<T> => {
        if( tree === null ){
            return new BinTree<T>(el);

        }else if( this.comp(el, tree.val) ){
            tree.left  = this._insert(tree.left,  el);
            return tree;

        }else{
            tree.right = this._insert(tree.right, el);
            return tree;
        }
    }

    private _search = (tree: BinTree<T>, el: T) : boolean => {
        if( tree === null ){
            return false;

        }else if( tree.val === el ){
            return true

        }else if( this.comp(el, tree.val) ){
            return this._search(tree.left, el);

        }else{
            return this._search(tree.right, el);
        }
    }

    private _delete = (tree: BinTree<T>, el: T) : BinTree<T> => {
        return null;
    }

    private _visualize = (tree: BinTree<T>, h: number) : {out: string, w: number} => {
        if( tree === null ){
            return {out: "@\n\n", w: 0};
        }else {
            let _r = this._visualize(tree.right, h + 1);
            let _l = this._visualize(tree.left, h + 1);
            let out = tree.val.toString() + " - " + _r.out + 
                      rep(h * 4, " ")    + "+ - " + _l.out;
            return {out: out, w: _r.w + 1};
        }
    }
}
