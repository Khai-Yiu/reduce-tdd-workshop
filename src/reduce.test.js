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
});
