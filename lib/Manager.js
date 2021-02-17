const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getOfficeNumber() {
    return `<div class="card-text">Office Number: ${this.officeNumber}</div>`;
  }

  getRole() {
    return `<h2 class="card-title"><i class="fas fa-chess-king"></i>Manager</h2>`;
  }
}

module.exports = Manager;
