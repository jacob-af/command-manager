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

    expect(intern.getSchool()).toBe(
      `<div class="card-text">School: of Hard Knocks</div>`
    );
  });

  it("has a method called getRole", () => {
    let intern = new Intern(
      "Jacob",
      "1",
      "jacob@fakeemail.com",
      "of Hard Knocks"
    );

    expect(intern.getRole()).toBe(
      `<h2 class="card-title"><i class="fas fa-chess-pawn"></i>Intern</h2>`
    );
  });
});
