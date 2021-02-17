const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }

  getSchool() {
    return `<div class="card-text">School: ${this.github}</div>`;
  }

  getRole() {
    return `<h2 class="card-title"><i class="fas fa-chess-pawn"></i>Intern</h2>`;
  }
}

module.exports = Intern;
