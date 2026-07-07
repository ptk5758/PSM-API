/**
 * 프로젝트 인터페이스
 */
export interface Project {
    /**
     * Primary Key
     */
    id: string

    /**
     * 프로젝트명
     */
    title: string

    /**
     * 설명
     */
    description?: string

    /**
     * 생성일
     */
    createAt: Date

    /**
     * 수정일
     */
    updateAt: Date
}
