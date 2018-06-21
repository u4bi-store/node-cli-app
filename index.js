#!/usr/bin/env node

const program = require('commander');
const colors = require('colors');
const pad = require('pad');

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

program.parse(process.argv);

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