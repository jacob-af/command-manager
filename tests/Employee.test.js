const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it("return an object with name, id, and email", () => {
    let employee = new Employee("Jacob", "1", "jacob@fakeemail.com");

    expect(employee.name).toEqual("Jacob");
    expect(employee.id).toEqual("1");
    expect(employee.email).toEqual("jacob@fakeemail.com");
  });

  it("has a method called getName", () => {
    let employee = new Employee("Jacob", "1", "jacob@fakeemail.com");

    expect(employee.getName()).toBe("Jacob");
  });

  it("has a method called getID", () => {
    let employee = new Employee("Jacob", "1", "jacob@fakeemail.com");

    expect(employee.getId()).toBe("1");
  });

  it("has a method called getEmail", () => {
    let employee = new Employee("Jacob", "1", "jacob@fakeemail.com");

    expect(employee.getEmail()).toBe("jacob@fakeemail.com");
  });

  it("has a method called getRole", () => {
    let employee = new Employee("Jacob", "1", "jacob@fakeemail.com");

    expect(employee.getRole()).toBe("Employee");
  });
});
