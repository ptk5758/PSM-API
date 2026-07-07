import type { Project } from './types.js'

/**
 * 샘플 데이터
 */
const MOCK_PROJECTS: Project[] = [
    {
        id: 'project-001',
        title: '별이 잠든 도시',
        description: '기억을 잃은 주인공이 밤의 도시를 여행하는 미스터리 비주얼 노벨',
        createAt: new Date('2026-06-10T09:00:00Z'),
        updateAt: new Date('2026-07-07T12:00:00Z'),
    },
    {
        id: 'project-002',
        title: '여름의 마지막 편지',
        description: '작은 해변 마을에서 시작되는 청춘 드라마 프로젝트',
        createAt: new Date('2026-06-20T10:30:00Z'),
        updateAt: new Date('2026-07-02T14:20:00Z'),
    },
]

export function getProjectList(): Promise<Project[]> {
    return Promise.resolve(MOCK_PROJECTS)
}

export function getProject(projectId: string): Promise<Project | undefined> {
    return Promise.resolve(MOCK_PROJECTS.find((item) => item.id === projectId))
}
