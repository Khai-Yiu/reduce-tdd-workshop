function reduce(array, reducer, initialValue) {
  let accumulator;
  let startIndex;

  if (reducer === undefined) {
    throw new Error("A reducer argument must be provided");
  }

  if (initialValue === undefined) {
    if (array.length === 0) {
      throw new Error(
        "An initial value must be provided when reducing over an empty array"
      );
    }

    accumulator = array[0];
    startIndex = 1;
  } else {
    accumulator = initialValue;
    startIndex = 0;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i]);
  }

  return accumulator;
}

export default reduce;
