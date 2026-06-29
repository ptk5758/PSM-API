import express from 'express'

import storyRouter from './story/router.js'
const app = express()

app.use(express.json()) // application/json Body 로 파싱
// app.use(express.urlencoded({extended: true})) // application/x-www-form-urlencoded 파싱

app.use('/api/v1/story', storyRouter)

app.listen(8000, () => {
    console.log(`PORT 8000 Open`)
})
