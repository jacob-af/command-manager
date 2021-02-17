const template = (employees) => {
  console.log(employees);

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
  <header><h1>The Squad</h1></header>
  <div class="container">
  ${employees.manager[0].name}
  ${employees.engineers.map((engineer) => {
    return `<div>${engineer.name}</div>
      `;
  })}
  ${employees.interns.map((intern) => {
    return `<div>${intern.name}</div>
      `;
  })}
  <div>
  </body>
  </html>`;
};

module.exports = template;
