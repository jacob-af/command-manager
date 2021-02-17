const Manager = require("../lib/Manager");

describe("Manager class", () => {
  it("return an object with name, id, email, and office number", () => {
    let manager = new Manager("Jacob", "1", "jacob@fakeemail.com", 101);

    expect(manager.name).toEqual("Jacob");
    expect(manager.id).toEqual("1");
    expect(manager.email).toEqual("jacob@fakeemail.com");
    expect(manager.officeNumber).toEqual(101);
  });

  it("has a method called getOfficeNumber()", () => {
    let manager = new Manager("Jacob", "1", "jacob@fakeemail.com", 101);

    expect(manager.getOfficeNumber()).toBe(
      `<div class="card-text">Office Number: 101</div>`
    );
  });

  it("has a method called getRole", () => {
    let manager = new Manager("Jacob", "1", "jacob@fakeemail.com", 101);

    expect(manager.getRole()).toBe(
      `<h2 class="card-title"><i class="fas fa-chess-king"></i>Manager</h2>`
    );
  });
});
