import type { Story } from './types.js'

/**
 * 샘플 데이터
 */
const MOCK_STORIES: Story[] = [
    {
        id: 'story-001',
        subject: '사용자 로그인 기능 구현',
        description: 'OAuth2를 이용한 구글 및 카카오 소셜 로그인 기능을 추가합니다.',
        createAt: new Date('2026-06-01T09:00:00Z'),
        updateAt: new Date('2026-06-03T14:30:00Z'),
    },
    {
        id: 'story-002',
        subject: '결제 시스템 연동',
        description: '아임포트 API를 활용하여 신용카드 및 간편결제 기능을 도입합니다.',
        createAt: new Date('2026-06-02T10:15:00Z'),
        updateAt: new Date('2026-06-10T18:20:00Z'),
    },
    {
        id: 'story-003',
        subject: '메인 페이지 UI 개선',
        createAt: new Date('2026-06-05T11:00:00Z'),
        updateAt: new Date('2026-06-05T11:00:00Z'), // 수정되지 않은 상태 표현
    },
    {
        id: 'story-004',
        subject: '다크모드 지원',
        description: 'Tailwind CSS를 사용하여 시스템 설정 및 토글에 따른 다크모드를 구현합니다.',
        createAt: new Date('2026-06-07T13:45:00Z'),
        updateAt: new Date('2026-06-08T09:12:00Z'),
    },
    {
        id: 'story-005',
        subject: '실시간 알림 기능',
        description: 'WebSocket을 활용해 새로운 댓글이나 좋아요 발생 시 상단 알림을 띄웁니다.',
        createAt: new Date('2026-06-10T16:00:00Z'),
        updateAt: new Date('2026-06-12T11:25:00Z'),
    },
    {
        id: 'story-006',
        subject: '마이페이지 프로필 수정 기능',
        createAt: new Date('2026-06-12T14:00:00Z'),
        updateAt: new Date('2026-06-12T14:00:00Z'),
    },
    {
        id: 'story-007',
        subject: '이미지 업로드 최적화',
        description: 'AWS S3 업로드 전 클라이언트 측에서 이미지 압축을 진행하는 로직을 추가합니다.',
        createAt: new Date('2026-06-15T09:30:00Z'),
        updateAt: new Date('2026-06-16T17:05:00Z'),
    },
    {
        id: 'story-008',
        subject: '회원 탈퇴 프로세스 구축',
        description: '탈퇴 시 사용자의 개인정보를 비식별화 처리하고 관련 데이터를 정리합니다.',
        createAt: new Date('2026-06-18T10:00:00Z'),
        updateAt: new Date('2026-06-20T15:40:00Z'),
    },
    {
        id: 'story-009',
        subject: '검색 엔진 성능 향상',
        createAt: new Date('2026-06-22T13:10:00Z'),
        updateAt: new Date('2026-06-25T10:50:00Z'),
    },
    {
        id: 'story-010',
        subject: '관리자 대시보드 통계 그래프 추가',
        description: 'Chart.js를 이용해 월별 가입자 수와 매출 추이를 시각화합니다.',
        createAt: new Date('2026-06-25T15:20:00Z'),
        updateAt: new Date('2026-06-29T16:15:00Z'),
    },
]
export function getStoryList(): Promise<Story[]> {
    return Promise.resolve(MOCK_STORIES)
}

export function getStory(storyId: string): Promise<Story | undefined> {
    return Promise.resolve(MOCK_STORIES.find(item => item.id === storyId))
}