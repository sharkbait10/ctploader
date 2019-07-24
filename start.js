const yargs = require('yargs');

const argv = yargs
  .options({
    e: {
      demand: false,
      alias: 'entities',
      describe: 'Run the script one time for all the entities or for separate entities',
      choices: ['all', 'languages', 'countries', 'zones', 'currencies', 'taxes', 'shipping', 'channels', 'producttypes', 'categories', 'discounts'],
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
      console.log(happySummerId);
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
    let projectVersion = await libs.project.getProjectAsync();
    await libs.languages.changeLanguagesAsync(projectVersion);

    console.log('Creating countries');
    projectVersion = await libs.project.getProjectAsync();
    await libs.countries.changeCountriesAsync(projectVersion);

    console.log('Creating zones');
    await libs.zones.createZonesAsync();

    console.log('Creating currencies');
    projectVersion = await libs.project.getProjectAsync();
    await libs.currencies.createCurrenciesAsync(projectVersion);

    console.log('Creating tax categories');
    await libs.taxes.createTaxCategoryAsync();

    console.log('Creating shipping methods');
    let standardTaxCategoryId = await libs.taxes.getStandardTaxCategoryAsync();
    let zoneId = await libs.zones.getZoneAsync();
    await libs.shipping.createShippingMethodAsync(standardTaxCategoryId, zoneId);

    console.log('Creating channels');
    await libs.channels.createChannelAsync();

    console.log('Creating discounts');
    await libs.discounts.createProductDiscounts();
    let happySummerId = await libs.discounts.createCartDiscounts();
    console.log(happySummerId);
    await libs.discounts.createDiscountCodes(happySummerId);

    console.log('Creating categories');
    await libs.categories.createCategories();

    console.log('Creating product types');
    await libs.productType.createProductTypes();
  }
}
