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
