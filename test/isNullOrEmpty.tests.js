
describe("isNullOrEmpty", function () {

  it("returns true for null and undefined", function () {

      var nowt;

      expect(window.isNullOrEmpty(null)).toBe(true);
      expect(window.isNullOrEmpty(undefined)).toBe(true);
      expect(window.isNullOrEmpty(nowt)).toBe(true);

  });

  it("returns true for empty strings", function () {

      expect(window.isNullOrEmpty("")).toBe(true);

  });

  it("returns true for whitespace strings", function () {

      expect(window.isNullOrEmpty("    ")).toBe(true);

  });

  it("returns false for strings with content", function () {

      expect(window.isNullOrEmpty("Hello you.")).toBe(false);
      expect(window.isNullOrEmpty("  Hello yourself ")).toBe(false);

  });

  it("returns true for NaN", function () {

      expect(window.isNullOrEmpty(NaN)).toBe(true);

  });

  it("returns false for numbers", function () {

      expect(window.isNullOrEmpty(1)).toBe(false);
      expect(window.isNullOrEmpty(0)).toBe(false);
      expect(window.isNullOrEmpty(1.5)).toBe(false);
      expect(window.isNullOrEmpty(1 - 2)).toBe(false);

  });

  it("returns false for booleans", function () {

      expect(window.isNullOrEmpty(true)).toBe(false);
      expect(window.isNullOrEmpty(false)).toBe(false);

  });

  it("returns true for empty arrays", function () {

      expect(window.isNullOrEmpty([])).toBe(true);

  });

  it("returns false for arrays with items", function () {

      expect(window.isNullOrEmpty(["house"])).toBe(false);
      expect(window.isNullOrEmpty([1])).toBe(false);
      expect(window.isNullOrEmpty([{}])).toBe(false);
      expect(window.isNullOrEmpty([[]])).toBe(false);
      expect(window.isNullOrEmpty(["house", 1, {}, []])).toBe(false);

  });

  it("returns true for objects with no properties", function () {

      expect(window.isNullOrEmpty({})).toBe(true);
  });

  it("returns false for objects with properties", function () {

      expect(window.isNullOrEmpty({ prop: {} })).toBe(false);
      expect(window.isNullOrEmpty({ prop: 1, prop2: "two" })).toBe(false);

  });

  it("returns false for DOM elements", function () {

      var el1 = document.createElement("elementNotInDOM");
      var el2 = document.createElement("elementInDOM");
      document.body.appendChild(el2);

      expect(window.isNullOrEmpty(el1)).toBe(false);
      expect(window.isNullOrEmpty(el2)).toBe(false);

  });

  it("returns false for other first-class objects", function () {

      expect(window.isNullOrEmpty(XMLHttpRequest)).toBe(false);
      expect(window.isNullOrEmpty(new XMLHttpRequest())).toBe(false);
      expect(window.isNullOrEmpty(HTMLElement)).toBe(false);
      expect(window.isNullOrEmpty(document.addEventListener)).toBe(false);
      expect(window.isNullOrEmpty(window.localStorage)).toBe(false);
      expect(window.isNullOrEmpty(navigator)).toBe(false);

  });

});
