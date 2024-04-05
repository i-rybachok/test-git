// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку.
// Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

// Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().

const addClassEmployee = () => {
  class Employee {
    constructor(...name) {
      this.name = name;
    }
  }

  class EmpTable extends Employee {
    constructor(...name) {
      super(name);
      this.array = name;
    }
    getHtml(employee) {
      const DOMdiv = document.getElementById('js-employee');
      const employees = document.createElement('div');
      employees.textContent = this.array;
      DOMdiv.append(employees);
    }
  }

  const table = new EmpTable('William', 'Steve');
  table.getHtml();
};

export default addClassEmployee;
