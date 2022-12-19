import express from 'express'
import router from './router'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import { protect } from './modules/auth'
import { createNewUser, signin } from './handler/user'
dotenv.config()

const app = express()
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', protect, router)
app.post('/user', createNewUser)
app.post('/signin', signin)

app.listen(3001, () => {
    console.log('server on local host 3001')
})