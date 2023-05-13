import Link from "next/link";
import StatsItem from "./StatsItem";
import UserPopover from "./UserPopover";

const PostItemTrending = () => {
    return (
        <div className="shadow-md bg-white rounded-md">
            <div className="p-4">
                <UserPopover />
                <Link href="/baiviet" className="text-lg font-bold my-3">A step-by-step guide to building a chatbot based on your own documents with GPT</Link>
                <div className="rounded-tr-md mt-2">
                    <StatsItem itemShow={['views', 'bookmark', 'comments', 'heart']}/>
                </div>
            </div>
        </div>
    );
}

export default PostItemTrending;