const getSum = (x, y) => {
  return x + y;
};
console.log(getSum(1, 2));

const add = (x, y) => x + y;
console.log(add(1, 3));

const cakes = ['拿破仑', '香草', '提拉米苏'];
cakes.forEach(function (item) {
  console.log(item);
})

const names = ['四月', '八月', '九月'];
const nameList = names.map((item, index) => (index + 1) + ':' + item);
console.log(nameList);