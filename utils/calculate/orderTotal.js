import renderToDom from '../renderToDom';

// eslint-disable-next-line import/no-mutable-exports
let sumTotal = 0;
const itemsCalculator = (array) => {
  const totalArray = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    console.warn('item.price', item.price);
    totalArray.push(Number(item.price));
  }
  console.warn('sumArray', totalArray);
  sumTotal = totalArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.warn('sumTotal');
  renderToDom('#itemTotal', sumTotal);
};

export { itemsCalculator, sumTotal };
