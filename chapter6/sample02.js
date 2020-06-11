global.fetch = require('node-fetch')
const { request } = require('graphql-request')

var query = `
    query listUses {
        allUsers {
            githubLogin
            name
            avatar
        }
    }
`
request('http://localhost:4000/graphql', query)
    .then(console.log)
    .catch(console.error)

