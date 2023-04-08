export interface CommentsType {
    id: number,
    author: string,
    created_at: string,
    content: string,
    replies: Array<CommentsType>
}