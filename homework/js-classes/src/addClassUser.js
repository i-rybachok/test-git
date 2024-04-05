// Реалізуй клас User. Під час створення екземпляру на базі цього класу, обʼєкт повинен мати вигляд {name: ‘Petro’, role: ‘admin’}
// (role може бути або admin або user). У разі невірно переданих даних такого об’єкта — попереджати за допомогою alert-у відповідне поле,
// яке введено некоректно. У класі User повинні бути такі компоненти:

// getName
// getRole
// login
// logout
// сhangeName
// changePassword

// У класі Admin повинні бути такі компоненти:

// addUser
// removeUser
// changeUserRole
// getAllUsers
// removeAllUsers

const addClassUser = () => {
  class User {
    constructor(name, password) {
      this.name = name;
      this._password = password;
      this.switchLog = true;
      this.role = 'user';
    }

    get getName() {
      return this.getName;
    }

    get getRole() {
      return this.getRole;
    }

    set сhangeName(newName) {
      this.name = newName;
    }

    set changePassword(newPassword) {
      this._password = newPassword;
    }

    login() {
      this.switchLog = true;
    }

    logout() {
      this.switchLog = false;
    }
  }

  class Admin extends User {
    constructor(name, password, switchLog) {
      super(name, password, switchLog);
      this.role = 'admin';
    }

    addUser(name, password) {
      array.push(new User(name, password));
    }

    removeUser() {
      array.pop();
    }

    changeUserRole(index) {
      if (array[index].role === 'admin') {
        return (array[index].role = 'user');
      }
      array[index].role = 'admin';
    }

    getAllUsers() {
      return array;
    }

    removeAllUsers() {
      array = [];
    }
  }

  // array for all users
  let array = [];
  const DOMform = document.getElementById('js-form-user');
  if (!DOMform) return;

  DOMform.addEventListener('submit', (event) => {
    event.preventDefault();

    //* get data
    const formData = new FormData(event.target);

    // * Setting rules for:
    //name
    const name = formData.get('name');
    // console.log('name: ', name);

    if (!name) {
      throw new Error('No name is entered');
    }

    if (name.length <= 2) {
      throw new Error('Not enough letters');
    }

    // password
    const password = formData.get('password');

    if (password.length < 8) {
      throw new Error('Not enough symbols');
    }

    const data = {
      name,
      password,
    };

    // This is added by a user himself
    array.push(new User(data.name, data.password));
    console.log(array);
  });

  // those are added by Admin
  const admin = new Admin('Carl', 'qwertyuiop');
  admin.addUser('Bob', '1111111111111111');
  admin.addUser('Jack', '22222222222222222');
  admin.changeUserRole(0);

  console.log(admin.getAllUsers());
};

export default addClassUser;
