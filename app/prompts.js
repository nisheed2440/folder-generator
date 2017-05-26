'use strict'


let chalk = require('chalk');


module.exports = [{
  type: 'input',
  name: 'name',
  message: 'Enter name',
  default: 'my-module'
},
{
  type: 'input',
  name: 'targetDir',
  message: 'Enter folder directory',
  default: './modules'
}]
