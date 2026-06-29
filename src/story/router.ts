import { Router } from 'express'
import { getStoryList } from './service.js'

const router: Router = Router()

router.get('/', async (request, response) => {
    response.status(200).json({ message: 'good', data: await getStoryList() })
})

export default router
