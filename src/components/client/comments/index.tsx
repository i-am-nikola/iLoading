import Comments from "./Comments";
import ReplyForm from "./ReplyForm";
import { CommentsType } from "./types";

const CommentSystem = () => {
    const comments: Array<CommentsType> = [
        {
            id: 1,
            author: 'Alice',
            created_at: '2023-03-31 12:34',
            content: 'This is the first comment!',
            replies: [
                {
                    id: 2,
                    author: 'Bob',
                    created_at: '2023-03-31 12:35',
                    content: 'I agree with Alice!',
                    replies: [
                        {
                            id: 2,
                            author: 'Bob',
                            created_at: '2023-03-31 12:35',
                            content: 'I agree with Alice!',
                            replies: [
                                {
                                    id: 2,
                                    author: 'Bob',
                                    created_at: '2023-03-31 12:35',
                                    content: 'I agree with Alice!',
                                    replies: []
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 3,
                    author: 'Charlie',
                    created_at: '2023-03-31 12:36',
                    content: 'I disagree with Alice!',
                    replies: []
                },
            ],
        },
    ];
    return (
        <>
            <div className="flex items-center js-comments">
                <h3 className="mr-2 text-lg">Bình luận</h3>
                <span className="text-slate-500 text-sm">(19)</span>
            </div>
            <div className="mt-5">
                <ReplyForm />
            </div>
            <div className="mt-5">
                <Comments comments={comments} />
            </div>
        </>
    );
}

export default CommentSystem;