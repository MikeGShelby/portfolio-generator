// *** DEPENDENCIES ***
// npm packages
const inquirer = require('inquirer');

// personal modules
// const generatePage = require('./src/page-template.js');

// core library modules
// const fs = require('fs');

// const pageHTML = generatePage(name, github);


// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));