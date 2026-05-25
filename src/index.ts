import express from 'express'

const app = express()

app.use(express.json()) // application/json Body 로 파싱
// app.use(express.urlencoded({extended: true})) // application/x-www-form-urlencoded 파싱

app.post('/api/v1/story', async (request, response) => {
    console.log(request.body)
    response.status(200).json({ message: 'success' })
})

app.listen(8000, () => {
    console.log(`PORT 8000 Open`)
})
