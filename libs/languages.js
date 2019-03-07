var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
    projectKey
}).project

const createGetRequest = {
    uri: service.build(),
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

var changeLanguages = (version) => {
    return new Promise((resolve, reject) => {
        
            const body = {
                version: version,
                actions: [{
                    action: 'changeLanguages',
                    languages: [
                        'en',
                        'nl-NL',
                        'nl-BE'
                    ]
                }]
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

            init.client.execute(createPostRequest).then(response => {

                if(response.statusCode == 400){
                    reject(response)
                }

                // console.log('Adding the following languages:' + JSON.stringify(response.body.languages, undefined, 2))
                // console.log("channelResponse = " + JSON.stringify(response.body, undefined, 2))
                // console.log("statusCode = " + response.statusCode)
                resolve(response)
            }).catch((error) => {
                console.log('ERROR: ' + error.message)
            })
        });

};

exports.changeLanguages = changeLanguages;