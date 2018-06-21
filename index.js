#!/usr/bin/env node

const program = require('commander');
const colors = require('colors');
const pad = require('pad');
const inquirer = require('inquirer');

program
    .version('0.0.1', '-v, --version')
    .command('weapon [name]')
    .alias('o')
    .description('weapon_command_description')
    .option('-a, --ammo [amount]', 'weapon_ammo_description', '180')
    .option('-e, --edition [type]', 'weapon_type_description', 'Basic')
    .option('--safe_mode', 'safe_mode_description')
    .action((type, args) => {
        console.log('Weapon Command');
        console.log('------------------');

        console.log(pad('Weapon name', 15),  ':', pad(20, colors.red(type)));
        console.log(pad('Ammo amount', 15),  ':', pad(20, colors.green(args.ammo)));
        console.log(pad('Edition type', 15), ':', pad(20, colors.cyan(args.edition)));
        console.log(pad('isSafe_mode', 15),  ':', pad(20, colors.yellow(args.safe_mode)));
    });


/*

$ cli-app weapon --help

$ cli-app weapon AK-47
$ cli-app weapon AK-47 -a -e --safe_mode

$ cli-app weapon AK-47 -a 210 -e Gold
$ cli-app weapon AK-47 -a 210 -e Gold --safe_mode



    Weapon Command
    ------------------
    Weapon name     :        AK-47
    Ammo amount     :          210
    Edition type    :         Gold
    isSafe_mode     :         true

*/



program
    .command('weapon_2')
    .alias('o')
    .description('weapon_2_command_description')
    .action(() => {

        let questions = [
            { type: 'list', name: 'type', message: colors.red('Please select a Weapon.'), choices: [ 'AK-47', 'M4A1', 'K2' ] },
            { type: 'list', name: 'ammo', message: colors.red('Please select a Ammo'), choices: [ '180', '210', '300' ] },
            { type: 'list', name: 'edition', message: colors.red('Please select a Edition'), choices: ['Basic', 'Silver', 'Gold'] },
            { type: 'confirm', name: 'safe_mode', message: colors.red('Do you want to enable safe mode?'), default: false }
        ];

        inquirer
            .prompt(questions)
            .then(answers => {
                console.log('Weapon_2 Command');
                console.log('------------------');

                console.log(pad('Weapon name', 15),  ':', pad(20, colors.red(answers.type)));
                console.log(pad('Ammo amount', 15),  ':', pad(20, colors.green(answers.ammo)));
                console.log(pad('Edition type', 15), ':', pad(20, colors.cyan(answers.edition)));
                console.log(pad('isSafe_mode', 15),  ':', pad(20, colors.yellow(answers.safe_mode)));
            });
    });


/*

$ cli-app weapon_2 --help

$ cli-app weapon_2



    ? Please select a Weapon. M4A1
    ? Please select a Ammo 210
    ? Please select a Edition Silver
    ? Do you want to enable safe mode? No
    Weapon_2 Command
    ------------------
    Weapon name     :         M4A1
    Ammo amount     :          210
    Edition type    :       Silver
    isSafe_mode     :        false

*/



program
    .command('list')
    .alias('ls')
    .description('List coffee menu')
    .action(() => {
        console.log('test list');
        console.log('test list');
        console.log('test list');
        console.log('test list');
    });

/*

$ cli-app list --help

$ cli-app list

*/


program
    .command('login')
    .alias('o')
    .description('login_command_description')
    .action(() => {

        let questions = [
            { type: 'input', name: 'id', message: colors.red('Please enter your ID.') },
            { type: 'password', name: 'pass', message: colors.red('Please enter your password.') },
        ];

        inquirer
            .prompt(questions)
            .then(answers => {
                console.log('Login Command');
                console.log('------------------');

                console.log(pad('ID', 15),  ':', pad(20, colors.red(answers.id)));
                console.log(pad('Password', 15),  ':', pad(20, colors.green(answers.pass)));
            });
    });

/*

$ cli-app login --help

$ cli-app login



    ? Please enter your ID. test1234
    ? Please enter your password. [hidden]
    Login Command
    ------------------
    ID              :     test1234
    Password        :     pass1234

*/


program.parse(process.argv);