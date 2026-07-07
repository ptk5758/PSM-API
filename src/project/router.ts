import { Router } from 'express'
import { getProject, getProjectList } from './service.js'

const router: Router = Router()

router.get('/', async (request, response) => {
    response.status(200).json({ message: 'good', data: await getProjectList() })
})

router.get('/:id', async (request, response) => {
    response.status(200).json({ message: 'good', data: await getProject(request.params.id) ?? null })
})

export default router
