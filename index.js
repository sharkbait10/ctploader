const yargs = require('yargs');

const argv = yargs
    .options({
        e: {
            demand: false,
            alias: 'entities',
            describe: 'Run the script one time for all the entities or for separate entities',
            choices: ['all', 'languages', 'countries', 'zones', 'taxes', 'shipping', 'channels', 'producttype','products', 'categories'],
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var libs = require('require-all')(__dirname + '/libs');

loadInitialDataOnCommercetools(argv);

async function loadInitialDataOnCommercetools(argv) {
  if (argv.e === 'all') {
      console.log('--- Initialization started ---')
      libs.project.getProject().then(version => {
          console.log('Setup of the languages')
          libs.languages.changeLanguages(version).then(newversion => {
              console.log('Setup of the countries')
              libs.countries.changeCountries(newversion)
          })
      }).then(() => {
          console.log('Setup of the zones')
          libs.zones.createZones()
      }).then(() => {
          console.log('Setup of the tax categories')
          libs.taxes.createTaxCategoryVAT().then(() => {
              libs.taxes.createTaxCategoryStandard().then(id => {
                  libs.shipping.createShippingMethod(id)
              })
          })
      }).then(() => {
          console.log('Setup of the channels')
          libs.channels.createChannels()
      }).then(() => {
          console.log('Setup of the product type')
          libs.productType.createProductType()
      }).then(() => {
          console.log('Setup of the categories')
          libs.categories.createCategories()
      }).catch((error) => {
          console.log('ERROR: ' + error.message)
      });
  } else if (argv.e === 'languages') {
      libs.project.getProject().then((version) => {
          libs.languages.changeLanguages(version).catch((error) => {
              console.log('ERROR: ' + error.message)
          });
      });
  } else if (argv.e === 'countries') {
      libs.project.getProject().then((version) => {
          libs.countries.changeCountries(version).catch((error) => {
              console.log('ERROR: ' + error.message)
          });
      });
  } else if (argv.e === 'zones') {
      libs.zones.createZones().catch((error) => {
          console.log('ERROR: ' + error.message)
      });
  } else if (argv.e === 'taxes') {
      libs.taxes.createTaxCategoryVAT().then(() => {
          libs.taxes.createTaxCategoryStandard()
      }).catch((error) => {
          console.log('ERROR: ' + error.message)
      });
  } else if (argv.e === 'shipping') {
      libs.taxes.getStandardTaxCategory().then((id) => {
          libs.shipping.createShippingMethod(id)
      }).catch((error) => {
          console.log('ERROR: ' + error.message)
      });
  } else if (argv.e === 'channels') {
      libs.channels.createChannels().catch((error) => {
          console.log('ERROR: ' + error.message)
      });
  } else if (argv.e === 'producttype') {
      libs.productType.createProductType().catch((error) => {
          console.log('ERROR: ' + error.message)
      });
  } else if (argv.e === 'products') {
      libs.productType.getClothingProductType().then(id => {
          libs.products.createDemoProducts(id)
      }).catch((error) => {
          console.log(error.message)
      });
  } else if (argv.e === 'categories') {
      libs.categories.createCategories().catch((error) => {
          console.log(error.message)
      });
  }
}
