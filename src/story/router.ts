import { Router } from 'express'
import { getStory, getStoryList } from './service.js'

const router: Router = Router()

router.get('/', async (request, response) => {
    response.status(200).json({ message: 'good', data: await getStoryList() })
})

router.get('/:id', async (request, response) => {
    response.status(200).json({ message: 'good', data: await getStory(request.params.id) ?? null })
})

export default router
