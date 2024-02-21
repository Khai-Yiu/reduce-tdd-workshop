function reduce(array, reducer) {
  let accumulator = array[0];

  for (let i = 1; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i]);
  }

  return accumulator;
}

export default reduce;
