class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  getName() {
    return `<h2 class="card-title">${this.name}</h2>`;
  }

  getId() {
    return `<div>ID: ${this.id}</div>`;
  }

  getEmail() {
    return `<div>email: <a href='mailto:${this.email}'>${this.email}</a></div>`;
  }

  getRole() {
    return `<h2 class="card-title">Employee</h2>`;
  }
}

module.exports = Employee;
