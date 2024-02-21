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
  });
});
