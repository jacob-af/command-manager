class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  getName() {
    return `<h2>${this.name}</h2>`;
  }

  getId() {
    return `<div>ID: ${this.id}</div>`;
  }

  getEmail() {
    return `<div>email: <a href='mailto:${this.email}'>${this.email}</a></div>`;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Employee;
