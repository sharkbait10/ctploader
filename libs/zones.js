var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
    projectKey
}).zones

const bodyBE = {
    name: 'Belgium',
    description: '',
    locations: [{
        country: 'BE',
        state: ''
    }]
}
const createPostRequestBE = {
    uri: service.build(),
    method: 'POST',
    body: bodyBE,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

var createZones = () => {
    return new Promise((resolve, reject) => {
        init.client.execute(createPostRequestBE).then(response => {
            console.log('Adding the Belgium zone');
            if (response.statusCode == 400) {
                reject(response)
            }


                const bodyNL = {
                    name: 'Netherlands',
                    description: '',
                    locations: [{
                        country: 'NL',
                        state: ''
                    }
                    ]
                }
                const createPostRequestNL = {
                    uri: service.build(),
                    method: 'POST',
                    body: bodyNL,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }

                init.client.execute(createPostRequestNL).then(response => {
                    if(response.statusCode == 400){
                        reject(response)
                    }
                    console.log('Adding the Netherlands zone');
                    resolve(response)
                }).catch((error) => {
                    console.log('ERROR: ' + error.message)
                })

            
        }).catch((error) => {
            console.log('ERROR: ' + error.message)
        });

    });
};

exports.createZones = createZones;