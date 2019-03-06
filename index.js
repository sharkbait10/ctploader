const yargs = require('yargs');

const argv = yargs
    .options({
        e: {
            demand: false,
            alias: 'entities',
            describe: 'Run the script one time for all the entities or for separate entities',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var libs = require('require-all')(__dirname + '/libs');

if (argv.e === 'all') {
    console.log('--- Initialization started ---')
    console.log('Setup of the languages')
    libs.languages.changeLanguages().then((res) => {
        return res.body.version
    }).then((version) => {
        console.log('Setup of the countries')
        libs.countries.changeCountries(version);
    }).catch((error) => {
        console.log(error);
    });
} else {
    console.log('puppa')
}