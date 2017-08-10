var TestClass = require("../app/test");
var _test;

beforeEach(function () {
    _test = new TestClass.TestClass("peter");
})

describe("Sample Test", function () {

    it("should return peter", function () {
        expect(_test.getName()).toEqual("peter");
    });
});

describe("Test new function", function () {
    it("should not return error", function () {
        expect(_test.setName("roger").getName()).toEqual("roger");
    });
    it("should not be equal to peter => original value", function () {
        expect(_test.setName("roger").getName()).not.toEqual("peter");
    });

});
