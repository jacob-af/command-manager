const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  it("return an object with name, id, and email", () => {
    let engineer = new Engineer(
      "Jacob",
      "1",
      "jacob@fakeemail.com",
      "jacob-af"
    );

    expect(engineer.name).toEqual("Jacob");
    expect(engineer.id).toEqual("1");
    expect(engineer.email).toEqual("jacob@fakeemail.com");
    expect(engineer.github).toEqual("jacob-af");
  });

  it("has a method called getName", () => {
    let engineer = new Engineer(
      "Jacob",
      "1",
      "jacob@fakeemail.com",
      "jacob-af"
    );

    expect(engineer.getName()).toBe("Jacob");
  });

  it("has a method called getID", () => {
    let engineer = new Engineer(
      "Jacob",
      "1",
      "jacob@fakeemail.com",
      "jacob-af"
    );

    expect(engineer.getId()).toBe("1");
  });

  it("has a method called getEmail", () => {
    let engineer = new Engineer(
      "Jacob",
      "1",
      "jacob@fakeemail.com",
      "jacob-af"
    );

    expect(engineer.getEmail()).toBe("jacob@fakeemail.com");
  });

  it("has a method called getGithub()", () => {
    let engineer = new Engineer(
      "Jacob",
      "1",
      "jacob@fakeemail.com",
      "jacob-af"
    );

    expect(engineer.getGithub()).toBe("jacob-af");
  });

  it("has a method called getRole", () => {
    let engineer = new Engineer(
      "Jacob",
      "1",
      "jacob@fakeemail.com",
      "jacob-af"
    );

    expect(engineer.getRole()).toBe("Engineer");
  });
});
