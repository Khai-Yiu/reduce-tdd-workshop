function reduce(array, reducer, initialValue) {
  let accumulator;
  let startIndex;

  if (initialValue === undefined) {
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
