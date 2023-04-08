import Comment from "./Comment";
import { CommentsType } from "./types";

type CommentsPropsType = {
    comments: Array<CommentsType>
}

const Comments = ({comments}: CommentsPropsType) => {
    return (
        <>
            {comments.map(comment => (
                <Comment key={comment.id} {...comment} />
            ))}
        </>
    );
}

export default Comments;