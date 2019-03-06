const yargs = require('yargs');

const argv = yargs
    .options({
        e: {
            demand: false,
            alias: 'entities',
            describe: 'Run the script one time for all the entities or for separate entities',
            choices: ['all', 'l', 'c', 'z'],
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var libs = require('require-all')(__dirname + '/libs');

if (argv.e === 'all') {
    console.log('--- Initialization started ---')
    libs.project.getProject().then((version) => {
        console.log('Setup of the languages')
        libs.languages.changeLanguages(version)
        return version
    }).then((version) => {
        console.log('Setup of the countries')
        libs.countries.changeCountries(version);
    }).then(() => {
        console.log('Setup of the zones')
        libs.zones.createZones()
    }).catch((error) => {
        console.log('ERROR: ' + error.message)
    });
} else if (argv.e === 'l') {
    libs.project.getProject().then((version) => {
        libs.languages.changeLanguages(version).catch((error) => {
            console.log('ERROR: ' + error.message)
        });
    });
} else if (argv.e === 'c') {
    libs.project.getProject().then((version) => {
        libs.countries.changeCountries(version).catch((error) => {
            console.log('ERROR: ' + error.message)
        });
    });
} else if (argv.e === 'z') {
    libs.zones.createZones().catch((error) => {
        console.log('ERROR: ' + error.message)
    });
}