
import { faChevronDown, faChevronUp, faEllipsis, faReply, faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ReplyForm from "./ReplyForm";
import { CommentsType } from "./types";

const Comment = ({ author, content, replies }: CommentsType) => {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [showContent, setShowContent] = useState(true);

    return (
        <div className="relative border-l pl-5 py-5 mt-4">
            <div className="flex items-center">
                <div className="mr-5 w-4">
                    <button className="text-slate-700">
                        <FontAwesomeIcon icon={faChevronUp} size="sm" className="w-4 h-4" />
                    </button>
                    <p className="text-slate-700">12</p>
                    <button className="text-slate-700">
                        <FontAwesomeIcon icon={faChevronDown} size="sm" className="w-4 h-4" />
                    </button>
                </div>
                <a href="#" className="mr-2 w-10">
                    <img src="/images/avatar-generations_prsz.jpeg" alt="your-image-alt" className="w-8 h-8 rounded-full" />
                </a>
                <div className="w-full">
                    <p className="block text-sm text-blue-500 hover:text-blue-700">{author}</p>
                    <p className="text-sm text-slate-500">3h ago</p>
                </div>
                <div className="w-4">
                    <button className="text-slate-500" onClick={() => setShowContent(!showContent)}>
                        <FontAwesomeIcon className="w-5 h-5" icon={showContent ? faSquareMinus : faSquarePlus} />
                    </button>
                </div>
            </div>
            {showContent && (<div className="mt-3">
                <div className="ml-10">
                    <p className="text-sm text-slate-800 leading-6">{content}</p>
                </div>
                <div className="mt-3 ml-10">
                    <button className="text-slate-500" onClick={() => setShowReplyForm(!showReplyForm)}>
                        <FontAwesomeIcon icon={faReply} />
                    </button>
                    <button className="ml-5 text-slate-500">
                        <FontAwesomeIcon icon={faEllipsis} />
                    </button>
                </div>
                <div className="ml-10">
                    {showReplyForm && <ReplyForm />}
                    {replies && replies.length > 0 && (
                        <>
                            {replies.map(reply => (
                                <Comment key={reply.id} {...reply} />
                            ))}
                        </>
                    )}
                </div>
            </div>)}
        </div>
    );
}

export default Comment;