const template = (employees) => {
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
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
  <header><h1>The Squad</h1></header>
  <div class="container">
    <div class="row managers">
        <div class="col-8 col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body">
                    ${employees.manager[0].getName()}
                    ${employees.manager[0].getRole()}
                    ${employees.manager[0].getId()}
                    ${employees.manager[0].getEmail()}
                    ${employees.manager[0].getOfficeNumber()}
                </div>
            </div>
        </div>
        </div>
        <div class="row engineers">    
            ${employees.engineers
              .map((engineer) => {
                return `
              <div class="col-6 col-lg-4 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        ${engineer.getName()}
                        ${engineer.getRole()}
                        ${engineer.getId()}
                        ${engineer.getEmail()}
                        ${engineer.getGithub()}
                    </div>
                </div>
            </div>`;
              })
              .join("")}
        </div>
        <div class="row interns">
            ${employees.interns
              .map((intern) => {
                return `
              <div class="col-6 col-lg-4 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        ${intern.getName()}
                        ${intern.getRole()}
                        ${intern.getId()}
                        ${intern.getEmail()}
                        ${intern.getSchool()}
                    </div>
                </div>
            </div>`;
              })
              .join("")}
        </div>
        </div>
    </div>
  </div>
  </body>
  </html>`;
};

module.exports = template;
