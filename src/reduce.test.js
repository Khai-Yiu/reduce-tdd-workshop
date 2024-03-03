import reduce from "./reduce";

describe("reduce", () => {
  it("should reduce an array of numbers to their sum", () => {
    const array = [1, 2, 3, 4];
    function reducer(accumulator, currentItem) {
      return accumulator + currentItem;
    }

    const sumOfNumbersInArray = reduce(array, reducer);
    expect(sumOfNumbersInArray).toBe(10);
  });
  it("should use the initial value as the accumulator instead of the first element", () => {
    const array = [1, 2, 3, 4];
    const initialValue = 4;
    function reducer(accumulator, currentItem) {
      return accumulator + currentItem;
    }

    const sumOfNumbersInArray = reduce(array, reducer, initialValue);
    expect(sumOfNumbersInArray).toBe(14);
  });
  it("does not modify the original array", () => {
    const array = [1, 2, 3, 4];
    const initialValue = 4;
    function reducer(accumulator, currentItem) {
      return accumulator + currentItem;
    }

    reduce(array, reducer, initialValue);
    expect(array).toStrictEqual([1, 2, 3, 4]);
  });
  describe("Given an initial value", () => {
    it("calls the reducer once per element in the array", () => {
      const array = [1, 2, 3, 4];
      const initialValue = 0;
      const mockReducer = jest.fn();
      reduce(array, mockReducer, initialValue);
      expect(mockReducer).toHaveBeenCalledTimes(array.length);
    });
    describe("and an empty array", () => {
      it("returns the initial value", () => {
        const array = [];
        const initialValue = 4;
        function reducer(accumulator, currentItem) {
          return accumulator + currentItem;
        }

        const sumOfNumbersInArray = reduce(array, reducer, initialValue);
        expect(sumOfNumbersInArray).toBe(initialValue);
      });
    });
  });
  describe("Given no initial value", () => {
    it("calls the reducer n - 1 times for an array with n elements", () => {
      const array = [1, 2, 3, 4];
      const mockReducer = jest.fn();
      reduce(array, mockReducer);
      expect(mockReducer).toHaveBeenCalledTimes(array.length - 1);
    });
    describe("and an empty array", () => {
      it("throws an error", () => {
        const array = [];
        function reducer(accumulator, currentItem) {
          return accumulator + currentItem;
        }

        expect(() => reduce(array, reducer)).toThrow(
          "An initial value must be provided when reducing over an empty array"
        );
      });
    });
  });
  describe("Given no reducer function", () => {
    it("throws an error", () => {
      const array = [];

      expect(() => reduce(array)).toThrow(
        "A reducer argument must be provided"
      );
    });
  });
});
