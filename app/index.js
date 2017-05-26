'use strict';

/*
  Comment for development purposes only. JSON contract for agencies :
    Platinum : http://api.myjson.com/bins/4b83a (without scripts property)
              : http://api.myjson.com/bins/1n2lo (with scripts property)
*/

var generators = require('yeoman-generator'),
  path = require('path'),
  chalk = require('chalk'),
  yosay = require('yosay'),
  prompts = require('./prompts.js');
 

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  initializing: {
    // Initial Yo Generator Welcome Message when `yo dexareact` is run

    initMessage: function () {
      this.log(yosay("Welcome to " + chalk.yellow("Folder Generator!")));
    },

  },

  prompting: {

    // The prompts provided to the user
    prompts: function () {

      return this.prompt(prompts).then((answers) => {

        //write config 'appName' to .yo-rc.json, we use this value as default app name in consecutive yo commands
        this.config.set("name", answers.name);

        //assignments
        this.name = answers.name;

        this.targetDir = answers.targetDir;

        this._name = this.name.charAt(0).toUpperCase() + this.name.slice(1).replace(/(\-[a-z])/g, function ($1) {
          return $1.toUpperCase().replace('-', '');
        });

        this.folderPath = this.targetDir + '/' + this.name; 
        //describe the destination path

      }).catch((err) => {
        this.log("Prompt Resolve Failed", err.message);
      });

    },

  },

  //Writing of the files and directories happen here, function names are hints
  writing: {

    copy: function () {
      this.log(chalk.yellow('Scaffolding the application'));
      this.log('dirname ',__dirname);
      this.log('process ',process.cwd());

      this.fs.copyTpl(
          this.templatePath('skeleton/my-module/component.html'),
          this.destinationPath(`${this.folderPath}/${this.name}.component.html`), {
            name: this.name,
            _name: this._name
          });

      this.fs.copyTpl(
          this.templatePath('skeleton/my-module/component.spec.ts'),
          this.destinationPath(`${this.folderPath}/${this.name}.component.spec.ts`), {
            name: this.name,
            _name: this._name
          });

      this.fs.copyTpl(
          this.templatePath('skeleton/my-module/component.ts'),
          this.destinationPath(`${this.folderPath}/${this.name}.component.ts`), {
            name: this.name,
            _name: this._name
          });

       this.fs.copyTpl(
          this.templatePath('skeleton/my-module/module.ts'),
          this.destinationPath(`${this.folderPath}/${this.name}.module.ts`), {
            name: this.name,
            _name: this._name
          });  
      
      this.fs.copyTpl(
          this.templatePath('skeleton/my-module/package.json'),
          this.destinationPath(`${this.folderPath}/${this.name}.package.json`), {
            name: this.name,
            _name: this._name
          });

      this.fs.copyTpl(
          this.templatePath('skeleton/my-module/README.md'),
          this.destinationPath(`${this.folderPath}/${this.name}.README.md`), {
            name: this.name,
            _name: this._name
          });

      this.fs.copyTpl(
          this.templatePath('skeleton/my-module/CHANGELOG.md'),
          this.destinationPath(`${this.folderPath}/${this.name}.CHANGELOG.md`), {
            name: this.name,
            _name: this._name
          });

      //this.directory('docs','docs');

    }

  },

  end: function () {
    this.log(chalk.yellow.bold(`Voila! Your folder is ready. Plz check -> ${this.folderPath}`));
  }

});
