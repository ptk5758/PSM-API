import type { Story } from './types.js'

/**
 * 샘플 데이터
 */
const MOCK_STORIES: Story[] = [
    {
        id: 'story-001',
        subject: '화산파의 몰락과 매화검총',
        description:
            '마교와의 대전쟁 이후 대가 끊겨가던 화산파. 마지막 전승자가 총문 깊은 곳에 숨겨진 매화검총의 비밀을 깨닫고 화산의 검기를 다시 피워내기 시작한다.',
        createAt: new Date('2026-01-01T09:00:00Z'),
        updateAt: new Date('2026-01-15T18:30:00Z'),
    },
    {
        id: 'story-002',
        subject: '소림사 장경각의 유령',
        description:
            '밤마다 소림사 장경각에서 들리는 의문의 책장 넘기는 소리. 그곳에는 72종 절예의 기록을 지키는 맹인 소승과 백 년 전 사라진 금지된 무공의 혼이 얽혀 있다.',
        createAt: new Date('2026-01-05T10:00:00Z'),
        updateAt: new Date('2026-01-05T10:00:00Z'),
    },
    {
        id: 'story-003',
        subject: '천마신교의 후계자 경합',
        description:
            '십만대산의 절대자, 천마의 양위 선언. 일곱 명의 소교주 후보들이 피비린내 나는 암투를 시작하고, 중원은 다시 한번 마도(魔道)의 공포에 휩싸인다.',
        createAt: new Date('2026-01-10T14:20:00Z'),
        updateAt: new Date('2026-02-01T11:15:00Z'),
    },
    {
        id: 'story-004',
        subject: '개방의 만천화우',
        description:
            "거지들의 문파 개방(丐帮)에서 백 년 만에 등장한 기재. 전설로만 내려오던 암기 무공 '만천화우'를 완벽히 재현하며 강호의 은원 관계를 뒤흔든다.",
        createAt: new Date('2026-01-12T08:00:00Z'),
        updateAt: new Date('2026-01-12T08:00:00Z'),
    },
    {
        id: 'story-005',
        subject: '무당파의 태극혜검',
        description:
            '부드러움으로 단단함을 이긴다는 무당의 도리. 하지만 속세의 은원에 휘말린 한 도사가 태극의 이치를 거스르고 오직 살기만을 담은 흑색 태극혜검을 펼친다.',
        createAt: new Date('2026-01-20T16:45:00Z'),
        updateAt: new Date('2026-03-02T09:00:00Z'),
    },
    {
        id: 'story-006',
        subject: '만독문과 독왕의 눈물',
        description:
            '전신이 독으로 이루어진 만독문의 후계자가 강호에서 유일하게 자신의 독이 통하지 않는 한 여인을 만나며 겪는 비극적인 사랑과 복수의 대서사시.',
        createAt: new Date('2026-02-01T22:10:00Z'),
        updateAt: new Date('2026-02-15T23:00:00Z'),
    },
    {
        id: 'story-007',
        subject: '남궁세가의 창천남궁검',
        description:
            '검형(劍形)보다 기세(氣勢)를 중시하는 서장 제일의 명문 남궁세가. 가문의 몰락을 막기 위해 어린 가주가 창천을 가르는 거대한 검기를 휘두르며 무림맹에 입성한다.',
        createAt: new Date('2026-02-05T13:00:00Z'),
        updateAt: new Date('2026-02-05T13:00:00Z'),
    },
    {
        id: 'story-008',
        subject: '녹림칠십이채의 반란',
        description:
            '황실의 폭정에 맞서기 위해 장강의 도적떼들이 하나로 뭉쳤다. 의기(義氣)를 품은 하오문과 녹림의 도도한 기상이 대륙의 중심을 향해 진격한다.',
        createAt: new Date('2026-02-11T11:00:00Z'),
        updateAt: new Date('2026-02-28T15:40:00Z'),
    },
    {
        id: 'story-009',
        subject: '사천당가의 비수',
        description:
            '바람조차 닿지 않는 사천의 깊은 계곡, 당가의 암기 제작소에서 수십 년간 벼려온 신물(神物)이 도난당했다. 범인을 쫓는 추격자와 베일에 싸인 배후의 지략 대결.',
        createAt: new Date('2026-02-18T09:30:00Z'),
        updateAt: new Date('2026-02-18T09:30:00Z'),
    },
    {
        id: 'story-010',
        subject: '우화등선(羽化登仙)의 진실',
        description:
            '강호 최고의 절대자가 마침내 선계에 발을 들이는 우화등선의 경지에 올랐으나, 그가 마주한 선계의 실체는 아름다운 낙원이 아닌 끝없는 무(無)의 지옥이었다.',
        createAt: new Date('2026-02-25T17:00:00Z'),
        updateAt: new Date('2026-03-01T12:00:00Z'),
    },
]
export function getStoryList(): Promise<Story[]> {
    return Promise.resolve(MOCK_STORIES)
}

export function getStory(storyId: string): Promise<Story | undefined> {
    return Promise.resolve(MOCK_STORIES.find((item) => item.id === storyId))
}
