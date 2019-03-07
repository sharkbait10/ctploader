var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
    projectKey
}).productTypes

const body = {
    name: 'Clothing',
    key: 'clothing',
    description: 'variant for all clothing categories',
    attributes: [{
            name: 'netweight',
            label: {
                en: "net weight"
            },
            isRequired: false,
            type: {
                name: 'text'
            },
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'grossweight',
            label: {
                en: "gross weight"
            },
            isRequired: false,
            type: {
                name: 'text'
            },
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'weightunitcode',
            label: {
                en: "weight unit code"
            },
            isRequired: false,
            type: {
                name: 'text'
            },
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'sapvariant',
            label: {
                en: "sapvariant"
            },
            isRequired: false,
            type: {
                name: 'text'
            },
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'EAN',
            label: {
                en: "EAN"
            },
            isRequired: false,
            type: {
                name: 'text'
            },
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'size',
            label: {
                en: "size"
            },
            isRequired: false,
            type: {
                name: 'text'
            },
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'length',
            label: {
                en: "length"
            },
            isRequired: false,
            type: {
                name: 'text'
            },
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'sortcode',
            label: {
                en: "sort code"
            },
            inputTip: {
                en: "attribute used to sort the set of different sizes when displayed"
            },
            isRequired: false,
            type: {
                name: 'number'
            },
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'brand',
            label: {
                en: "brand"
            },
            isRequired: false,
            type: {
                name: 'text'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'articlename',
            label: {
                en: "article name"
            },
            isRequired: false,
            type: {
                name: 'text'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'colorcode',
            label: {
                en: "color code"
            },
            isRequired: false,
            type: {
                name: 'text'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'colordescription',
            label: {
                en: "color description"
            },
            isRequired: false,
            type: {
                name: 'text'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'webcolor',
            label: {
                en: "web color"
            },
            isRequired: false,
            type: {
                name: 'ltext'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'gender',
            label: {
                en: "gender"
            },
            isRequired: false,
            type: {
                name: 'ltext'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'season',
            label: {
                en: "season"
            },
            isRequired: false,
            type: {
                name: 'text'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'seasonyear',
            label: {
                en: "season year"
            },
            isRequired: false,
            type: {
                name: 'text'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'material',
            label: {
                en: "material"
            },
            isRequired: false,
            type: {
                name: 'ltext'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'closure',
            label: {
                en: "closure"
            },
            isRequired: false,
            type: {
                name: 'ltext'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'fit',
            label: {
                en: "fit"
            },
            isRequired: false,
            type: {
                name: 'ltext'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'fabric',
            label: {
                en: "fabric"
            },
            isRequired: false,
            type: {
                name: 'ltext'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'waist',
            label: {
                en: "waist"
            },
            isRequired: false,
            type: {
                name: 'ltext'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'lengthdescription',
            label: {
                en: "length description"
            },
            isRequired: false,
            type: {
                name: 'ltext'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'print',
            label: {
                en: "print"
            },
            isRequired: false,
            type: {
                name: 'ltext'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'firstdelivery',
            label: {
                en: "first delivery"
            },
            isRequired: false,
            type: {
                name: 'text'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        },
        {
            name: 'productName',
            label: {
                en: "product name"
            },
            isRequired: false,
            type: {
                name: 'text'
            },
            attributeConstraint: 'SameForAll',
            isSearchable: false,
            inputHint: 'SingleLine'
        }
    ]
}

const createPostRequest = {
    uri: service.build(),
    method: 'POST',
    body,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

var createProductType = () => {
    return new Promise((resolve, reject) => {
        init.client.execute(createPostRequest).then((response) => {
            if(response.statusCode == 400){
                console.log(response)
                reject(response)
            }

            resolve(response)

        }).catch((error) => {
            console.log('ERROR: ' + error)
        });
    });
}

exports.createProductType = createProductType;