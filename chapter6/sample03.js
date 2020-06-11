global.fetch = require('node-fetch')
const { request } = require('graphql-request')

var url = 'http://localhost:4000/graphql'

var mutation = `
    mutation populate($count: Int!) {
        addFakeUsers(count:$count) {
            githubLogin
            name
            avatar
        }
    }
`

var variables = { count: 3 }

request(url, mutation, variables)
    .then(console.log)
    .catch(console.error)

