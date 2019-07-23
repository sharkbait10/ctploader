const yargs = require('yargs');

const argv = yargs
    .options({
        e: {
            demand: false,
            alias: 'entities',
            describe: 'Run the script one time for all the entities or for separate entities',
            choices: ['all', 'languages', 'countries', 'zones', 'currencies', 'taxes', 'shipping', 'channels', 'producttype','products', 'categories'],
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var libs = require('require-all')(__dirname + '/libs');

loadInitialDataOnCommercetools(argv);

async function loadInitialDataOnCommercetools(argv) {
  if (argv.e === 'languages') {
    try {
      let projectVersion = await libs.project.getProjectAsync();
      await libs.languages.changeLanguagesAsync(projectVersion);
    } catch (e) {
      console.log(e.message);
    }
  } else if (argv.e === 'countries') {
    try {
      let projectVersion = await libs.project.getProjectAsync();
      await libs.countries.changeCountriesAsync(projectVersion);
    } catch (e) {
      console.log(e.message);
    }
  } else if (argv.e === 'zones') {
    try {
      await libs.zones.createZonesAsync();
    } catch (e) {
      console.log(e.message);
    }
  } else if (argv.e === 'currencies') {
    try {
      let projectVersion = await libs.project.getProjectAsync();
      await libs.currencies.createCurrenciesAsync(projectVersion);
    } catch (e) {
      console.log(e.message);
    }
  } else if (argv.e === 'taxes') {
    try {
      await libs.taxes.createTaxCategoryAsync();
    } catch (e) {
      console.log(e.message);
    }
  } else if (argv.e === 'shipping') {
    try {
      let standardTaxCategoryId = await libs.taxes.getStandardTaxCategoryAsync();
      let zoneId = await libs.zones.getZoneAsync();
      await libs.shipping.createShippingMethodAsync(standardTaxCategoryId, zoneId);
    } catch (e) {
      console.log(e.message);
    }
  }
}
