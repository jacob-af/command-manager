# command-manager

![badge](https://img.shields.io/badge/license-MIT-brightgreen)

## About

Command line application creates an html file with the details of your web development team.

## Table of Contents

- [Installation](#Installation)
- [Files](#Files)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [Testing](#Testing)
- [Credits](#Credits)
- [License](#License)
- [Contact](#Contact)

## Installation

To install, enter command  
`npm install`  
from command line in root directory. Must have node.js already installed.

## Files

- index.html
- README.md
- LICENSE
- package.json
- (dist)
  - style.css
  - _your new index.html will appear here_
- (lib)
  - Employee.js
  - Engineer.js
  - Intern.js
  - Manager.js
- (src)
  - template.js
- (tests)
  - Employee.test.js
  - Engineer.test.js
  - Intern.test.js
  - Manager.test.js

## Usage

Enter  
`node index.js`  
from the command line in the root directory and respond to each of the given prompts. First enter the manager's information for your team. The manager's info included their office number. Then use the arrow keys to select from the presented options. Engineers have a field for their github username, interns for their school. Add as many interns and engineers as you want until your team is complete.Your new html file will be saved in the `dist` directory as 'index.html'. Be sure to copy the included css file for a clean responsive interface. Links to email and Github in the HTML are functioning.

## Contributions

Contributions can be made by forking the repository on gitHub and submitting a pull request.

The repository can be found at [ez-readme](https://github.com/jacob-af/command-manager)

## Testing

Jest was used for testing, to run use command `npm run test`

## Credits

This project is the original work of Jacob Feitler. Assistance with regex email validation found on [stack-overflow](https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer-npm)

## License:

This project is licensed under the MIT license, copywrite 2021

## Contact

You can view my GitHub profile at [github.com/jacob-af](https://github.com/jacob-af)
