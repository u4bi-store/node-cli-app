#!/usr/bin/env node

const program = require('commander');
const colors = require('colors');

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

        console.log('Weapon name :', colors.red(type));
        console.log('Ammo amount :', colors.green(args.ammo));
        console.log('Edition type :', colors.cyan(args.edition));
        console.log('isSafe_mode :', colors.yellow(args.safe_mode));
    });

program.parse(process.argv);

/*

$ cli-app weapon --help

$ cli-app weapon AK-47
$ cli-app weapon AK-47 -a -e --safe_mode

$ cli-app weapon AK-47 -a 210 -e Gold
$ cli-app weapon AK-47 -a 210 -e Gold --safe_mode

*/