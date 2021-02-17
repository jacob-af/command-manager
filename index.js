// import dependencies
const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const template = require("./src/template");

const employees = {
  manager: [],
  engineers: [],
  interns: [],
};

const baseQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter employee name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter employee ID: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email Address:",
  },
];

let managerQuestion = [
  {
    type: "input",
    name: "officeNumber",
    message: "Enter manager office number:",
  },
];

let engineerQuestion = [
  {
    type: "input",
    name: "github",
    message: "Enter GitHub username:",
  },
];

let internQuestion = [
  {
    type: "input",
    name: "school",
    message: "Enter school attended:",
  },
];

let employeeQuestion = [
  {
    type: "list",
    name: "response",
    message: "Add an Enginner, and Intern, or select done",
    choices: ["Engineer", "Intern", "Done"],
  },
];

const confirm = async () => {
  let response = await inquirer.prompt([
    {
      type: "confirm",
      name: "confirmation",
      message: "Are these entries satifactory?",
    },
  ]);
  return response.confirmation;
};

const inquiry = async (baseQuestions, additionalQuestion) => {
  let baseAnswers = await inquirer.prompt(baseQuestions);
  let additionalAnswer = await inquirer.prompt(additionalQuestion);

  let employee = { ...baseAnswers, ...additionalAnswer };
  console.log(employee);
  let response = await confirm();
  if (response) {
    return employee;
  } else {
    try {
      console.clear();
      return inquiry(baseQuestions, additionalQuestion);
    } catch {
      console.log("Error");
    }
  }
};

const addEmployee = async () => {
  console.clear();
  let response = await inquirer.prompt(employeeQuestion);

  if (response.response === "Engineer") {
    console.log("Enter new engineer data:");
    let engineerData = await inquiry(baseQuestions, engineerQuestion);
    let engineer = new Engineer(
      engineerData.name,
      engineerData.id,
      engineerData.email,
      engineerData.github
    );
    employees.engineers.push(engineer);
    console.log(engineer);
    return await addEmployee();
  } else if (response.response === "Intern") {
    console.log("Enter new intern data:");
    let internData = await inquiry(baseQuestions, internQuestion);
    let intern = new Intern(
      internData.name,
      internData.id,
      internData.email,
      internData.school
    );
    employees.interns.push(intern);
    console.log(intern);
    return await addEmployee();
  } else {
    console.clear();
    console.log("your entries:");
  }
};
// welcome users
// Describe input process to user
// manager question
// verify

const generateEmployeeList = async () => {
  console.clear();
  console.log(
    "Welcome to Command-Manager, a command line program to easily build an html page with your team's info"
  );
  console.log("Let's start by entering our Manager Information");
  let managerResponse = await inquiry(baseQuestions, managerQuestion);
  let manager = new Manager(
    managerResponse.name,
    managerResponse.id,
    managerResponse.email,
    managerResponse.officeNumber
  );
  employees.manager.push(manager);

  await addEmployee();

  template(employees);
};

generateEmployeeList();
