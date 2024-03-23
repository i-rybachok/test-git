// * task 1
// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні,
// ціну за одиницю товару, сума.

function taskShoppingList() {
  const shoppingList = [
    {
      name: 'Milk',
      quantity: 5,
      isBought: true,
      price: 4,
      calcSum: function () {
        return this.quantity * this.price;
      },
    },
    {
      name: 'Banana',
      quantity: 4,
      isBought: false,
      price: 6,
      calcSum: function () {
        return this.quantity * this.price;
      },
    },
    {
      name: 'Bread',
      quantity: 2,
      isBought: true,
      price: 2,
      calcSum: function () {
        return this.quantity * this.price;
      },
    },
  ];

  // Написати кілька функцій для роботи з таким масивом:
  //   1)Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
  function showShoppingList() {
    let itemsBought = [];
    let itemsNotBought = [];
    for (let item of shoppingList) {
      if (!item.isBought) {
        itemsNotBought.push(item.name);
      }
    }

    for (let item of shoppingList) {
      if (item.isBought) {
        itemsBought.push(item.name);
      }
    }

    return itemsNotBought.concat(itemsBought);
  }
  console.log(showShoppingList());

  //   2)Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
  function checkProduct(nameProduct) {
    for (let item of shoppingList) {
      if (item.name === nameProduct) {
        item.isBought = true;
      }
    }
    return;
  }

  checkProduct('Banana');
  console.log(shoppingList);

  // * task 2
  // Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
  function deleteProduct(productName) {
    let newShoppingList = [];
    for (let item of shoppingList) {
      if (item.name === productName) {
        continue;
      } else {
        newShoppingList.push(item);
      }
    }
    return newShoppingList;
  }

  console.log(deleteProduct('Milk'));

  // Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом,
  // необхідно збільшувати кількість в існуючій покупці,
  // а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12,
  // а кількості товарів стало 2, то сума буде 24.
  function addProduct(productName, productQuantity, productPrice) {
    for (let item of shoppingList) {
      if (item.name === productName) {
        item.quantity += productQuantity;
        return;
      }
    }
    for (let item of shoppingList) {
      if (!(item.name === productName)) {
        shoppingList.push({
          name: productName,
          quantity: productQuantity,
          isBought: false,
          price: productPrice,
          calcSum: function () {
            return this.quantity * this.price;
          },
        });
        return;
      }
    }
  }

  addProduct('Pancakes', 8, 15);
  console.log(shoppingList);

  // * task 3
  // Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
  function sumProducts() {
    let sum = 0;

    for (let item of shoppingList) {
      sum += item.calcSum();
    }

    return sum;
  }

  console.log(sumProducts());

  // Підрахунок суми всіх (не) придбаних продуктів.
  function sumNotBoughtProducts() {
    let sumNotBought = 0;
    let sumBought = 0;

    for (let item of shoppingList) {
      if (!item.isBought) {
        sumNotBought += item.calcSum();
      }

      if (item.isBought) {
        sumBought += item.calcSum();
      }
    }

    return `Sum of bought products: ${sumBought}; Sum of not bought products: ${sumNotBought}`;
  }

  console.log(sumNotBoughtProducts());

  // Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
  function showSortedProducts(filter) {
    filter = confirm('Вивести список у порядку від меншого до більшого?');

    // Функція для правильного сортування чисел (більшого до меншого)
    const sortNumbersDown = (a, b) => b.calcSum() - a.calcSum();
    // Функція для правильного сортування чисел (від меншого до більшого)
    const sortNumbersUp = (a, b) => a.calcSum() - b.calcSum();

    if (filter) {
      const sortedShoppingList = shoppingList.toSorted(sortNumbersUp);
      return sortedShoppingList;
    } else {
      const sortedShoppingList = shoppingList.toSorted(sortNumbersDown);
      return sortedShoppingList;
    }
  }

  // Тут поставила return, а не console.log(), щоб вся велика функція taskShoppingList() не повертала undefined
  return showSortedProducts();
}
export default taskShoppingList;
