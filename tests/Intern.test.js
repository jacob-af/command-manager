const Intern = require("../lib/Intern");

describe("Intern class", () => {
  it("return an object with name, id, email, and school", () => {
    let intern = new Intern(
      "Jacob",
      "1",
      "jacob@fakeemail.com",
      "of Hard Knocks"
    );

    expect(intern.name).toEqual("Jacob");
    expect(intern.id).toEqual("1");
    expect(intern.email).toEqual("jacob@fakeemail.com");
    expect(intern.school).toEqual("of Hard Knocks");
  });

  it("has a method called getName", () => {
    let intern = new Intern(
      "Jacob",
      "1",
      "jacob@fakeemail.com",
      "of Hard Knocks"
    );

    expect(intern.getName()).toBe("Jacob");
  });

  it("has a method called getID", () => {
    let intern = new Intern(
      "Jacob",
      "1",
      "jacob@fakeemail.com",
      "of Hard Knocks"
    );

    expect(intern.getId()).toBe("1");
  });

  it("has a method called getEmail", () => {
    let intern = new Intern(
      "Jacob",
      "1",
      "jacob@fakeemail.com",
      "of Hard Knocks"
    );

    expect(intern.getEmail()).toBe("jacob@fakeemail.com");
  });

  it("has a method called getSchool()", () => {
    let intern = new Intern(
      "Jacob",
      "1",
      "jacob@fakeemail.com",
      "of Hard Knocks"
    );

    expect(intern.getSchool()).toBe("of Hard Knocks");
  });

  it("has a method called getRole", () => {
    let intern = new Intern(
      "Jacob",
      "1",
      "jacob@fakeemail.com",
      "of Hard Knocks"
    );

    expect(intern.getRole()).toBe("Intern");
  });
});
