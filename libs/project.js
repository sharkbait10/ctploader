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

var getProject = () => {
    return new Promise((resolve, reject) => {
        init.client.execute(createGetRequest).then(response => {

            if(response.statusCode == 400){
                reject(response)
            }

            resolve(response.body.version)

        });

    });
};

exports.getProject = getProject;