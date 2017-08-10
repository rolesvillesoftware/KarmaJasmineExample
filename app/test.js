"use strict";
exports.__esModule = true;
var TestClass = (function () {
    function TestClass(name) {
        this.name = name;
    }
    /**
     * Gets the name for the class
     */
    TestClass.prototype.getName = function () {
        return this.name;
    };
    TestClass.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    return TestClass;
}());
exports.TestClass = TestClass;
