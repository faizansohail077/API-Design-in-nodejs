import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send({ message: 'hello from express' })
})

app.listen(301, () => {
    console.log('server on local host 3001')
})