const template = (employees) => {
  console.log(employees);

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
    <title>Our Team</title>
  </head>
  <body>
  <header><h1>The Squad</h1></header>
  <div class="container">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    ${employees.manager[0].getName()}
                    ${employees.manager[0].getRole()}
                    ${employees.manager[0].getId()}
                    ${employees.manager[0].getEmail()}
                    ${employees.manager[0].getOfficeNumber()}
                </div>
            </div>
            
            ${employees.engineers.map((engineer) => {
              return `<div class="card">
                <div class="card-body">
                    ${engineer.getName()}
                    ${engineer.getRole()}
                    ${engineer.getId()}
                    ${engineer.getEmail()}
                    ${engineer.getGithub()}
                </div>
            </div>`;
            })}
            
            ${employees.interns.map((intern) => {
              return `<div class="card">
                <div class="card-body">
                    ${intern.getName()}
                    ${intern.getRole()}
                    ${intern.getId()}
                    ${intern.getSchool()}
                </div>
            </div>`;
            })}
        </div>
    </div>
  </div>
  </body>
  </html>`;
};

module.exports = template;
