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

async function createBelgiumZone() {
  try {
    console.log('Adding the Belgium zone');
    await init.client.execute(createPostRequestBE);
  } catch (e) {
    console.log(e.message);
  }
}

async function createNetherlandZone() {
  try {
    console.log('Adding the Netherlands zone');
    await init.client.execute(createPostRequestNL);
  } catch (e) {
    console.log(e.message);
  }
}

async function createZonesAsync() {
  try {
    await createBelgiumZone();
    await createNetherlandZone();
  } catch (e) {
    console.log(e.message);
  }
}

exports.createZonesAsync = createZonesAsync;

var createZones = () => {
    return new Promise((resolve, reject) => {
        init.client.execute(createPostRequestBE).then(response => {

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
