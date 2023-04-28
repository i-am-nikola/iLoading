import StatsItem from "./StatsItem";
import UserPopover from "./UserPopover";

const PostItemTrending = () => {
    return (
        <div className="shadow-md">
            <div className="p-4">
                <UserPopover />
                <h3 className="text-lg font-bold my-3">A step-by-step guide to building a chatbot based on your own documents with GPT</h3>
                <div className="rounded-tr-md">
                    <StatsItem itemShow={['views', 'bookmark', 'comments', 'heart']}/>
                </div>
            </div>
        </div>
    );
}

export default PostItemTrending;