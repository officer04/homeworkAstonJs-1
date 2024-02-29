// task №1

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;

function firstSum(arr, total) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        return [arr[i], arr[j]];
      }
    }
  }

  return 'Такой пары не существует';
}

console.log(firstSum(arr, total)); //result = [4, 9]

//task №2
/*
Нужно выполнить одно действие для каждого элемента массива. То есть если для каждого элемента массива сложность O(n), то общая сложность получается O(n^2)
*/
