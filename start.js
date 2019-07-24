const yargs = require('yargs');

const argv = yargs
  .options({
    e: {
      demand: false,
      alias: 'entities',
      describe: 'Run the script one time for all the entities or for separate entities',
      choices: ['all', 'languages', 'countries', 'zones', 'currencies', 'taxes', 'shipping', 'channels', 'producttypes', 'categories', 'discounts', 'project'],
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var libs = require('require-all')(__dirname + '/libs');

loadInitialDataOnCommercetools(argv);

async function loadInitialDataOnCommercetools(argv) {
  if(argv.e === 'project') {
    let projectResponse = await libs.project.getProjectAsync();
    console.log(projectResponse);
  } else if (argv.e === 'languages') {
    try {
      let project = await libs.project.getProjectAsync();
      await libs.languages.changeLanguagesAsync(project.body.version);
    } catch (e) {
      console.log(e.message);
    }
  } else if (argv.e === 'countries') {
    try {
      let project = await libs.project.getProjectAsync();
      await libs.countries.changeCountriesAsync(project.body.version);
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
      let project = await libs.project.getProjectAsync();
      await libs.currencies.createCurrenciesAsync(project.body.version);
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
  } else if (argv.e === 'channels') {
    try {
      await libs.channels.createChannelAsync();
    } catch (e) {
      console.log(e.message);
    }
  } else if (argv.e === 'discounts') {
    try {
      await libs.discounts.createProductDiscounts();
      let happySummerId = await libs.discounts.createCartDiscounts();
      await libs.discounts.createDiscountCodes(happySummerId);
    } catch (e) {
      console.log(e.message);
    }
  } else if (argv.e === 'categories') {
    try {
      await libs.categories.createCategories();
    } catch (e) {
      console.log(e.message);
    }
  } else if (argv.e === 'producttypes') {
    try {
      await libs.productType.createProductTypes();
    } catch (e) {
      console.log(e.message);
    }
  } else if (argv.e === 'all') {
    console.log('Creating languages');
    let project = await libs.project.getProjectAsync();
    await libs.languages.changeLanguagesAsync(project.body.version);

    console.log('Creating countries');
    project = await libs.project.getProjectAsync();
    await libs.countries.changeCountriesAsync(project.body.version);

    console.log('Creating zones');
    await libs.zones.createZonesAsync();

    console.log('Creating currencies');
    project = await libs.project.getProjectAsync();
    await libs.currencies.createCurrenciesAsync(project.body.version);

    console.log('Creating tax categories');
    await libs.taxes.createTaxCategoryAsync();

    console.log('Creating categories');
    await libs.categories.createCategories();

    console.log('Creating shipping methods');
    let standardTaxCategoryId = await libs.taxes.getStandardTaxCategoryAsync();
    let zoneId = await libs.zones.getZoneAsync();
    await libs.shipping.createShippingMethodAsync(standardTaxCategoryId, zoneId);

    console.log('Creating channels');
    await libs.channels.createChannelAsync();

    console.log('Creating discounts');
    await libs.discounts.createProductDiscounts();
    let happySummerId = await libs.discounts.createCartDiscounts();
    await libs.discounts.createDiscountCodes(happySummerId);

    console.log('Creating product types');
    await libs.productType.createProductTypes();
  }
}
