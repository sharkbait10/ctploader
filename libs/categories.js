var init = require('./init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
    projectKey
}).categories

var createGranfatherCategory = () => {
    return new Promise((resolve, reject) => {

        const body = {
            name: {
                en: 'heren'
            },
            slug: {
                en: 'heren'
            },
            key: 'heren'
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
            if (response.statusCode == 400) {
                reject(response)
            }

            console.log('Created a new category')
            resolve(response.body.id)
        });
    });
}

var createCategory = (parentId) => {
    return new Promise((resolve, reject) => {
        const body = {
            name: {
                en: 'heren-jeans'
            },
            slug: {
                en: 'heren-jeans'
            },
            key: 'heren-jeans'
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
            if (response.statusCode == 400) {
                reject(response)
            }

            console.log('Created a new category')

            const bodyParent = {
                version: response.body.version,
                actions: [{
                    action: 'changeParent',
                    parent: {
                        typeId: 'category',
                        id: parentId
                    }
                }]
            }

            const serviceParent = init.createRequestBuilder({
                projectKey
            }).categories.byId(response.body.id)

            const createParentPostRequest = {
                uri: serviceParent.build(),
                method: 'POST',
                body: bodyParent,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }

            init.client.execute(createParentPostRequest).then(reseponse => {
                if(response.statusCode == 400) {
                    reject(response)
                }

                resolve(response.body.id)
            });

        });
    });
}

var createKidCategory = (parentId) => {
    return new Promise((resolve, reject) => {
        const body = {
            name: {
                en: 'heren-skinny-fit'
            },
            slug: {
                en: 'heren-skinny-fit'
            },
            key: 'heren-skinny-fit'
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
            if (response.statusCode == 400) {
                reject(response)
            }

            console.log('Created a new category')

            const bodyParent = {
                version: response.body.version,
                actions: [{
                    action: 'changeParent',
                    parent: {
                        typeId: 'category',
                        id: parentId
                    }
                }]
            }

            const serviceParent = init.createRequestBuilder({
                projectKey
            }).categories.byId(response.body.id)

            const createParentPostRequest = {
                uri: serviceParent.build(),
                method: 'POST',
                body: bodyParent,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }

            init.client.execute(createParentPostRequest).then(reseponse => {
                if(response.statusCode == 400) {
                    reject(response)
                }

                resolve(response)
            });
        });
    });
}

var createCategoryShirt = (parentId) => {
    return new Promise((resolve, reject) => {
        const body = {
            name: {
                en: 'heren-clothing'
            },
            slug: {
                en: 'heren-clothing'
            },
            key: 'heren-clothing'
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
            if (response.statusCode == 400) {
                reject(response)
            }

            console.log('Created a new category')

            const bodyParent = {
                version: response.body.version,
                actions: [{
                    action: 'changeParent',
                    parent: {
                        typeId: 'category',
                        id: parentId
                    }
                }]
            }

            const serviceParent = init.createRequestBuilder({
                projectKey
            }).categories.byId(response.body.id)

            const createParentPostRequest = {
                uri: serviceParent.build(),
                method: 'POST',
                body: bodyParent,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }

            init.client.execute(createParentPostRequest).then(reseponse => {
                if(response.statusCode == 400) {
                    reject(response)
                }

                resolve(response.body.id)
            });

        });
    });
}

var createKidShirtCategory = (parentId) => {
    return new Promise((resolve, reject) => {
        const body = {
            name: {
                en: 'heren-shirt'
            },
            slug: {
                en: 'heren-shirt'
            },
            key: 'heren-shirt'
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
            if (response.statusCode == 400) {
                reject(response)
            }

            console.log('Created a new category')

            const bodyParent = {
                version: response.body.version,
                actions: [{
                    action: 'changeParent',
                    parent: {
                        typeId: 'category',
                        id: parentId
                    }
                }]
            }

            const serviceParent = init.createRequestBuilder({
                projectKey
            }).categories.byId(response.body.id)

            const createParentPostRequest = {
                uri: serviceParent.build(),
                method: 'POST',
                body: bodyParent,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }

            init.client.execute(createParentPostRequest).then(reseponse => {
                if(response.statusCode == 400) {
                    reject(response)
                }

                resolve(response)
            });
        });
    });
}

var createCategories = () => {
    return new Promise((resolve,reject) => {
        createGranfatherCategory().then(parentId => {
            createCategory(parentId).then(parentId => {
                createKidCategory(parentId).then(response => {
                    if(response.statusCode == 400){
                        reject(response)
                    }
                    resolve(response)
                })
            })
        createCategoryShirt(parentId).then(parentId => {
            createKidShirtCategory(parentId).then(response => {
                if(response.statusCode == 400){
                    reject(response)
                }
                resolve(response)
            })
        })
        })
    });
}

exports.createCategories = createCategories;