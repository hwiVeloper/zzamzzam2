const path = require('path')
const express = require('express')
const graphqlHTTP = require('express-graphql') // express용 graphql
const schema = require('./schema')
const {
    PORT = 3000,
    PWD = __dirname // 파일의 작업 디렉터리
} = process.env

const app = express()

app.use('/q', graphqlHTTP(req => ({
    schema,
    context: req.session
})))

app.use('/dist',
    express.static(path.resolve(PWD, 'build', 'public'))
)

app.use('*', (req, res) =>{
    res.sendFile('index.html', {
        root: PWD
    })
})

app.listen(PORT, () => console.log(`Running server on port ${PORT}`))