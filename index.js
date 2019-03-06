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

if(argv.e === 'all') {
    console.log('--- Initialization started ---')
    console.log('Setup of the languages')
    libs.languages((errorMessage,result) => {
        if(errorMessage){
            console.log('puppa1')
        } else {
            console.log('Setup of the countries')
            libs.countries()
        }
    })
    console.log('--- Initialization finished ---')
} else {
    console.log('puppa')
}

