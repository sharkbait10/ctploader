var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
  projectKey
}).productTypes

async function createLensExtrasProductType() {
  const bodyLensExtras = {
    name: "Lens Extras",
    description: "",
    classifier: "Complex",
    attributes: [{
      name: "lens",
      label: {
        "en": "Lens"
      },
      inputTip: {
        "en": ""
      },
      isRequired: false,
      type: {
        name: "lenum",
        values: [{
            key: "singleVision",
            label: {
              "en": "Single vision"
            }
          },
          {
            key: "multifocal",
            label: {
              "en": "Multifocal"
            }
          }
        ]
      },
      attributeConstraint: "None",
      isSearchable: false,
      inputHint: "SingleLine",
      displayGroup: "Other"
    }],
    key: "LensExtras"
  }

  const createLensExtrasPostRequest = {
    uri: service.build(),
    method: 'POST',
    body: bodyLensExtras,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  try {
    await init.client.execute(createLensExtrasPostRequest);
  } catch (e) {
    console.log(e.message);
  }
}

async function createSolutionsProductType() {
  const bodySolutions = {
    name: "Solutions",
    description: "",
    classifier: "Complex",
    attributes: [{
        name: "brand",
        label: {
          "en": "Brand name"
        },
        inputTip: {
          "en": ""
        },
        isRequired: false,
        type: {
          "name": "text"
        },
        attributeConstraint: "SameForAll",
        isSearchable: true,
        inputHint: "SingleLine",
        displayGroup: "Other"
      },
      {
        name: "exclusiveBrand",
        label: {
          "en": "Exclusive Brand"
        },
        inputTip: {
          "en": ""
        },
        isRequired: false,
        type: {
          "name": "boolean"
        },
        attributeConstraint: "SameForAll",
        isSearchable: true,
        inputHint: "SingleLine",
        displayGroup: "Other"
      },
      {
        name: "solutionType",
        label: {
          "en": "Solution"
        },
        inputTip: {
          "en": ""
        },
        isRequired: false,
        type: {
          "name": "text"
        },
        attributeConstraint: "SameForAll",
        isSearchable: true,
        inputHint: "SingleLine",
        displayGroup: "Other"
      },
      {
        name: "volume",
        label: {
          "en": "Product volume"
        },
        inputTip: {
          "en": ""
        },
        isRequired: false,
        type: {
          "name": "number"
        },
        attributeConstraint: "Unique",
        isSearchable: true,
        inputHint: "SingleLine",
        displayGroup: "Other"
      },
      {
        name: "erpId",
        label: {
          "en": "ERP ID"
        },
        inputTip: {
          "en": ""
        },
        isRequired: false,
        type: {
          "name": "text"
        },
        attributeConstraint: "Unique",
        isSearchable: false,
        inputHint: "SingleLine",
        displayGroup: "Other"
      }
    ],
    key: "Solutions"
  }

  const createSolutionsPostRequest = {
    uri: service.build(),
    method: 'POST',
    body: bodySolutions,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  try {
    await init.client.execute(createSolutionsPostRequest);
  } catch (e) {
    console.log(e.message);
  }

}

async function createLensesProductType() {
  const bodyLenses = {
    name: 'Lenses',
    description: '',
    classifier: 'Complex',
    attributes: [{
        name: 'lens',
        label: {
          en: 'Lens'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'lenum',
          values: [{
              key: 'singleVision',
              label: {
                en: 'Single vision'
              }
            },
            {
              key: 'multifocal',
              label: {
                en: 'Multifocal'
              }
            }
          ]
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbUVprotection',
        label: {
          en: 'UV protection'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'pack',
        label: {
          en: 'Pack'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'lenum',
          values: [{
              key: 'basic',
              label: {
                en: 'Basic'
              }
            },
            {
              key: 'bronze',
              label: {
                en: 'Bronze'
              }
            },
            {
              key: 'silver',
              label: {
                en: 'Silver'
              }
            },
            {
              key: 'gold',
              label: {
                en: 'Gold'
              }
            },
            {
              key: 'platinum',
              label: {
                en: 'Platinum'
              }
            },
            {
              key: 'diamond',
              label: {
                en: 'Diamond'
              }
            }
          ]
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'thickness',
        label: {
          en: 'Thickness'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'visualField',
        label: {
          en: 'Visual Field'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbAntiBreakage',
        label: {
          en: 'Anti-breakage'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbThinnerLighter',
        label: {
          en: 'Thinner and Lighter'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbPerfectSight',
        label: {
          en: 'Perfect sight'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbAntiScratch',
        label: {
          en: 'Anti scratch protection'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbAntiReflective',
        label: {
          en: 'Standard antirreflective coating'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbHidrorrepelent',
        label: {
          en: 'Hidrorrepelent'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbReducedEyeFatigue',
        label: {
          en: 'Reduced eye fatigue'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbIdealForRimless',
        label: {
          en: 'Ideal for rimless frames'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbBetterContrast',
        label: {
          en: 'Better contrast. Reduced eye fatigue'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbIndividualLenses',
        label: {
          en: 'Individual lenses. Custom-made'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbHDtechnology',
        label: {
          en: 'HD technology'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbTopAntirreflectiveCoating',
        label: {
          en: 'Top antirreflective coating'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'extras',
        label: {
          en: 'Extras'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'reference',
          referenceTypeId: 'product-type'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'voucher',
        label: {
          en: 'Voucher value'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'money'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      }
    ],
    key: 'Lenses'
  }

  const createLensesProductTypeRequest = {
    uri: service.build(),
    method: 'POST',
    body: bodyLenses,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
  try {
    await init.client.execute(createLensesProductTypeRequest);
  } catch (e) {
    console.log(e.message);
  }

}

async function createSunglassesProductType() {
  const bodySunglasses = {
    name: 'Sunglasses',
    description: 'X',
    classifier: 'Complex',
    attributes: [{
        name: '_360',
        label: {
          en: '_360'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'brand',
        label: {
          en: 'Brand name'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'exclusiveBrand',
        label: {
          en: 'Exclusive Brand'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'supplier',
        label: {
          en: 'supplier'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'header',
        label: {
          en: 'Header'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'status',
        label: {
          en: 'status'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'VTO',
        label: {
          en: 'VTO'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'front',
        label: {
          en: 'front'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'angle',
        label: {
          en: 'angle'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'erpId',
        label: {
          en: 'ERP ID'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'Unique',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'SKUStatus',
        label: {
          en: 'SKUStatus'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'pricePoint',
        label: {
          en: 'pricePoint'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'segment',
        label: {
          en: 'segment'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'brandModel',
        label: {
          en: 'brandModel'
        },
        inputTip: {
          en: ''
        },
        isRequired: true,
        type: {
          name: 'text'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'brandModelCode',
        label: {
          en: 'brandModelCode'
        },
        inputTip: {
          en: ''
        },
        isRequired: true,
        type: {
          name: 'text'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'brandModelColorCode',
        label: {
          en: 'brandModelColorCode'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'gender',
        label: {
          en: 'gender'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'set',
          elementType: {
            name: 'ltext'
          }
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'frameType',
        label: {
          en: 'frameType'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'frameMaterial',
        label: {
          en: 'frameMaterial'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'frameColor',
        label: {
          en: 'frameColor'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'lensColor',
        label: {
          en: 'lensColor'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'UVCategory',
        label: {
          en: 'UVCategory'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'number'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'polarized',
        label: {
          en: 'polarized',
          'en-IE': 'polarized'
        },
        inputTip: {
          en: 'polarized',
          'en-IE': 'polarized'
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'gradient',
        label: {
          en: 'gradient'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'mirror',
        label: {
          en: 'mirror'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'glazeble',
        label: {
          en: 'glazeble'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'templeLength',
        label: {
          en: 'templeLength'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'number'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'lensWidth',
        label: {
          en: 'lensWidth'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'number'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'bridgeWidth',
        label: {
          en: 'bridgeWidth'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'number'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'frameWidth',
        label: {
          en: 'frameWidth'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'number'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'lensHeight',
        label: {
          en: 'lensHeight'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'number'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'usps',
        label: {
          en: 'usps'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'set',
          elementType: {
            name: 'ltext'
          }
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'faceShape',
        label: {
          en: 'Face shape'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'set',
          elementType: {
            name: 'lenum',
            values: [{
                key: 'oval',
                label: {
                  en: 'Oval'
                }
              },
              {
                key: 'round',
                label: {
                  en: 'Round'
                }
              },
              {
                key: 'diamond',
                label: {
                  en: 'Diamond'
                }
              },
              {
                key: 'square',
                label: {
                  en: 'Square'
                }
              },
              {
                key: 'rectangular',
                label: {
                  en: 'Rectangular'
                }
              },
              {
                key: 'heart',
                label: {
                  en: 'Heart'
                }
              }
            ]
          }
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'frameShape',
        label: {
          en: 'frame Shape'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'lenum',
          values: [{
              key: 'aviator',
              label: {
                en: 'Aviator'
              }
            },
            {
              key: 'rectanglesquare',
              label: {
                en: 'Rectangle / square'
              }
            },
            {
              key: 'cateye',
              label: {
                en: 'Cat eye'
              }
            },
            {
              key: 'round',
              label: {
                en: 'Round'
              }
            },
            {
              key: 'sporty',
              label: {
                en: 'Sporty'
              }
            }
          ]
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'lensTypes',
        label: {
          en: 'Lens types'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'set',
          elementType: {
            name: 'ltext'
          }
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'manualReview',
        label: {
          en: 'manualReview'
        },
        inputTip: {
          en: 'Used to determine if this product needs to be manually reviewed during order fulfilment.'
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'description',
        label: {
          en: 'description'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'testboolean',
        label: {
          en: 'testboolean'
        },
        inputTip: {
          en: 'testboolean'
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      }
    ],
    key: 'Sunglasses'
  }

  const createSunglassesProductTypePostRequest = {
    uri: service.build(),
    method: 'POST',
    body: bodySunglasses,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  try {
    await init.client.execute(createSunglassesProductTypePostRequest);
  } catch (e) {
    console.log(e.message);
  }
}

async function createContactLensesProductType() {
  const bodyContactLenses = {
    name: 'Contact-lenses',
    description: 'X',
    classifier: 'Complex',
    attributes: [{
        name: 'usage',
        label: {
          en: 'Usage'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'brand',
        label: {
          en: 'Brand name'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'exclusiveBrand',
        label: {
          en: 'Exclusive Brand'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'replacementFrequency',
        label: {
          en: 'replacementFrequency'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbBasics',
        label: {
          en: 'cbBasics'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbHydration',
        label: {
          en: 'cbHydration'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbSoftness',
        label: {
          en: 'cbSoftness'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbBreathability',
        label: {
          en: 'cbBreathability'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbFatigue',
        label: {
          en: 'cbFatigue'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cbUV',
        label: {
          en: 'cbUV'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'convenience',
        label: {
          en: 'convenience'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'target',
        label: {
          en: 'target'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'materialType',
        label: {
          en: 'materialType'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'material',
        label: {
          en: 'material'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'waterContent',
        label: {
          en: 'waterContent'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'lensType',
        label: {
          en: 'lensType'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'UVFilter',
        label: {
          en: 'UVFilter'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'handlingTint',
        label: {
          en: 'handlingTint'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'supplier',
        label: {
          en: 'supplier'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'packageQuantity',
        label: {
          en: 'packageQuantity'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'number'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'axis',
        label: {
          en: 'axis'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'color',
        label: {
          en: 'color'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'localOpCoSupplierCode',
        label: {
          en: 'localOpCoSupplierCode'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'localOpCoSupplierItemCode',
        label: {
          en: 'localOpCoSupplierItemCode'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'localOpCoItemCode',
        label: {
          en: 'localOpCoItemCode'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'localOpCoItemVariantCode',
        label: {
          en: 'localOpCoItemVariantCode'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'masterProduct',
        label: {
          en: 'Master Product'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'brandQuantityKey',
        label: {
          en: 'Brand quantity key'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'brandKey',
        label: {
          en: 'Brand key'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'pricePerDay',
        label: {
          en: 'Price per day'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'money'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'baseCurve',
        label: {
          en: 'Base Curve'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'diameter',
        label: {
          en: 'Diameter'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'power',
        label: {
          en: 'Power'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'cylinder',
        label: {
          en: 'Cylinder'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'addition',
        label: {
          en: 'Addition'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'header',
        label: {
          en: 'Header'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'longDescription',
        label: {
          en: 'Long description'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'recommendedProductCatKey',
        label: {
          en: 'Recommended Product Cat Key'
        },
        inputTip: {
          en: 'Recommended Product Cat Key'
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'maxOrderableQuantity',
        label: {
          en: 'maxOrderableQuantity'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'number'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'erpId',
        label: {
          en: 'ERP ID'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'Unique',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'manualReview',
        label: {
          en: 'manualReview'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'description',
        label: {
          en: 'description'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      }
    ],
    key: 'Contact-lenses'
  }

  const createContactLensesProductTypePostRequest = {
    uri: service.build(),
    method: 'POST',
    body: bodyContactLenses,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  try {
    await init.client.execute(createContactLensesProductTypePostRequest);
  } catch (e) {
    console.log(e.message);
  }
}

async function createFramesProductType() {
  const bodyFrames = {
    name: 'Frames',
    description: 'X',
    classifier: 'Complex',
    attributes: [{
        name: '_360',
        label: {
          en: '_360'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'brand',
        label: {
          en: 'Brand name'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'exclusiveBrand',
        label: {
          en: 'Exclusive Brand'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'lensType',
        label: {
          en: 'lensType'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'supplier',
        label: {
          en: 'supplier'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'header',
        label: {
          en: 'Header'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'status',
        label: {
          en: 'status'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'VTO',
        label: {
          en: 'VTO'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'front',
        label: {
          en: 'front'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'angle',
        label: {
          en: 'angle'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'erpId',
        label: {
          en: 'ERP ID'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'Unique',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'SKUStatus',
        label: {
          en: 'SKUStatus'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'pricePoint',
        label: {
          en: 'pricePoint'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'segment',
        label: {
          en: 'segment'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'brandModel',
        label: {
          en: 'brandModel'
        },
        inputTip: {
          en: ''
        },
        isRequired: true,
        type: {
          name: 'text'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'brandModelCode',
        label: {
          en: 'brandModelCode'
        },
        inputTip: {
          en: ''
        },
        isRequired: true,
        type: {
          name: 'text'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'brandModelColorCode',
        label: {
          en: 'brandModelColorCode'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'text'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'gender',
        label: {
          en: 'gender'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'set',
          elementType: {
            name: 'ltext'
          }
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'frameType',
        label: {
          en: 'frameType'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'frameMaterial',
        label: {
          en: 'frameMaterial'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'frameColor',
        label: {
          en: 'frameColor'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'lensColor',
        label: {
          en: 'lensColor'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'CombinationUnique',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'UVCategory',
        label: {
          en: 'UVCategory'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'number'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'polarized',
        label: {
          en: 'polarized'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'gradient',
        label: {
          en: 'gradient'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'mirror',
        label: {
          en: 'mirror'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'glazeble',
        label: {
          en: 'glazeble'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'templeLength',
        label: {
          en: 'templeLength'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'number'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'lensWidth',
        label: {
          en: 'lensWidth'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'number'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'bridgeWidth',
        label: {
          en: 'bridgeWidth'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'number'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'frameWidth',
        label: {
          en: 'frameWidth'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'number'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'lensHeight',
        label: {
          en: 'lensHeight'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'number'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'usps',
        label: {
          en: 'usps'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'set',
          elementType: {
            name: 'ltext'
          }
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'faceShape',
        label: {
          en: 'Face shape'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'set',
          elementType: {
            name: 'lenum',
            values: [{
                key: 'oval',
                label: {
                  en: 'Oval'
                }
              },
              {
                key: 'round',
                label: {
                  en: 'Round'
                }
              },
              {
                key: 'diamond',
                label: {
                  en: 'Diamond'
                }
              },
              {
                key: 'square',
                label: {
                  en: 'Square'
                }
              },
              {
                key: 'rectangular',
                label: {
                  en: 'Rectangular'
                }
              },
              {
                key: 'heart',
                label: {
                  en: 'Heart'
                }
              }
            ]
          }
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'frameShape',
        label: {
          en: 'frame Shape'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'lenum',
          values: [{
              key: 'aviator',
              label: {
                en: 'Aviator'
              }
            },
            {
              key: 'rectanglesquare',
              label: {
                en: 'Rectangle / square'
              }
            },
            {
              key: 'cateye',
              label: {
                en: 'Cat eye'
              }
            },
            {
              key: 'round',
              label: {
                en: 'Round'
              }
            },
            {
              key: 'sporty',
              label: {
                en: 'Sporty'
              }
            }
          ]
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'lensDetails',
        label: {
          en: 'Lens details'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'reference',
          referenceTypeId: 'product'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'lensExtras',
        label: {
          en: 'Lens extras'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'reference',
          referenceTypeId: 'product-type'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'priceIncluded',
        label: {
          en: 'Price with lens included'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'money'
        },
        attributeConstraint: 'SameForAll',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'manualReview',
        label: {
          en: 'manualReview'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'boolean'
        },
        attributeConstraint: 'None',
        isSearchable: false,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      },
      {
        name: 'description',
        label: {
          en: 'description'
        },
        inputTip: {
          en: ''
        },
        isRequired: false,
        type: {
          name: 'ltext'
        },
        attributeConstraint: 'None',
        isSearchable: true,
        inputHint: 'SingleLine',
        displayGroup: 'Other'
      }
    ],
    key: 'Frames'
  }

  const createFramesPostRequest = {
    uri: service.build(),
    method: 'POST',
    body: bodyFrames,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  try {
    await init.client.execute(createFramesPostRequest);
  } catch (e) {
    console.log(e.message);
  }
}

async function createProductTypes() {
  await createLensExtrasProductType();
  await createSolutionsProductType();
  await createLensesProductType();
  await createSunglassesProductType();
  await createContactLensesProductType();
  await createFramesProductType();
}

exports.createProductTypes = createProductTypes;
