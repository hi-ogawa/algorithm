/// <reference path="../typings/tsd.d.ts" />
var _ = require('underscore');
var BinTree = (function () {
    function BinTree(val, parent, left, right) {
        if (parent === void 0) { parent = null; }
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.val = val;
        this.parent = parent;
        this.left = left;
        this.right = right;
    }
    return BinTree;
})();
// helper functions
exports.rep = function (n, s) {
    return _.reduce((_.range(n).map(function () { return s; })), (function (soFar, sToAdd) { return soFar + sToAdd; }), "");
};
var BST = (function () {
    function BST(arr, comp) {
        var _this = this;
        this.comp = comp;
        this.traverse = function (f) {
            return [];
        };
        // private method implementations
        this._insert = function (tree, el) {
            if (tree === null) {
                return new BinTree(el);
            }
            else if (_this.comp(el, tree.val)) {
                tree.left = _this._insert(tree.left, el);
                return tree;
            }
            else {
                tree.right = _this._insert(tree.right, el);
                return tree;
            }
        };
        this._search = function (tree, el) {
            if (tree === null) {
                return false;
            }
            else if (tree.val === el) {
                return true;
            }
            else if (_this.comp(el, tree.val)) {
                return _this._search(tree.left, el);
            }
            else {
                return _this._search(tree.right, el);
            }
        };
        this._delete = function (tree, el) {
            return null;
        };
        this._visualize = function (tree, h) {
            if (tree === null) {
                return { out: "@\n\n", w: 0 };
            }
            else {
                var _r = _this._visualize(tree.right, h + 1);
                var _l = _this._visualize(tree.left, h + 1);
                var out = tree.val.toString() + " - " + _r.out +
                    exports.rep(h * 4, " ") + "+ - " + _l.out;
                return { out: out, w: _r.w + 1 };
            }
        };
        this.bt = null;
        arr.forEach(function (el) { return _this.insert(el); });
    }
    // public interface methods
    BST.prototype.insert = function (el) { this.bt = this._insert(this.bt, el); };
    BST.prototype.search = function (el) { return this._search(this.bt, el); };
    BST.prototype.delete = function (el) {
    };
    BST.prototype.findMin = function () {
        return null;
    };
    BST.prototype.findMax = function () {
        return null;
    };
    BST.prototype.visualize = function () {
        return this._visualize(this.bt, 0).out;
    };
    return BST;
})();
exports.BST = BST;
