const array = [1, 2, 3, 4, 5];

function printWithDelay(array) {
  array.forEach((element, index) => {
    setTimeout(() => {
      console.log(index);
    }, index * 3000);
  });
}

printWithDelay(array);
