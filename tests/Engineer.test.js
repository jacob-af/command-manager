const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  it("return an object with name, id, email, and github", () => {
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

  it("has a method called getGithub()", () => {
    let engineer = new Engineer(
      "Jacob",
      "1",
      "jacob@fakeemail.com",
      "jacob-af"
    );

    expect(engineer.getGithub()).toBe(
      `<div class="card-text">Github: <a href="https://github.com/jacob-af" target="_blank">jacob-af</a></div>`
    );
  });

  it("has a method called getRole", () => {
    let engineer = new Engineer(
      "Jacob",
      "1",
      "jacob@fakeemail.com",
      "jacob-af"
    );

    expect(engineer.getRole()).toBe(
      `<h2 class="card-title"><i class="fas fa-chess-knight"></i>Engineer</h2>`
    );
  });
});
