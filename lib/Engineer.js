const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }

  getGithub() {
    return `<div class="card-text">Github: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></div>`;
  }

  getRole() {
    return `<h2 class="card-title"><i class="fas fa-chess-knight"></i>Engineer</h2>`;
  }
}

module.exports = Engineer;
