import { Tooltip } from "@/components/ui";
import { faBookmark, faComments, faEye, faFilePen, faHeart, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// views, bookmark, comments
type StatsItemPropsType = {
    itemShow: String[],
    className?: String
}
const StatsItem = (props: StatsItemPropsType) => {
    const { itemShow, className } = props;
    return (
        <div className={`flex ${className || 'justify-start'}`}>
            {itemShow && itemShow.includes('posts') && <div className="px-2">
                <Tooltip content="Số bài viết: 100">
                    <span className="text-xs text-gray-500 mr-1">
                        <FontAwesomeIcon size="sm" className="w-3 h-3" icon={faFilePen} />
                    </span>
                    <span className="text-xs text-gray-500">100</span>
                </Tooltip>
            </div>}
            {itemShow && itemShow.includes('follower') && <div className="px-2">
                <Tooltip content="Người theo dõi: 100">
                    <span className="text-xs text-gray-500 mr-1">
                        <FontAwesomeIcon size="sm" className="w-4 h-4" icon={faUserPlus} />
                    </span>
                    <span className="text-xs text-gray-500">100</span>
                </Tooltip>
            </div>}
            {itemShow && itemShow.includes('views') && <div className="px-2">
                <Tooltip content="Lượt xem: 1000K">
                    <span className="text-xs text-gray-500 mr-1">
                        <FontAwesomeIcon size="sm" className="w-3 h-3" icon={faEye} />
                    </span>
                    <span className="text-xs text-gray-500">1000K</span>
                </Tooltip>
            </div>}
            {itemShow && itemShow.includes('bookmark') && <div className="px-2">
                <Tooltip content="Bookmark: 10">
                    <span className="text-xs text-gray-500 mr-1">
                        <FontAwesomeIcon size="sm" className="w-3 h-3" icon={faBookmark} />
                    </span>
                    <span className="text-xs text-gray-500">4</span>
                </Tooltip>
            </div>}
            {itemShow && itemShow.includes('comments') && <div className="px-2">
                <Tooltip content="Bình luận: 10">
                    <span className="text-xs text-gray-500 mr-1">
                        <FontAwesomeIcon size="sm" className="w-4 h-4" icon={faComments} />
                    </span>
                    <span className="text-xs text-gray-500">10</span>
                </Tooltip>
            </div>}
            {itemShow && itemShow.includes('heart') && <div className="px-2">
                <Tooltip content="Yêu thích: 10">
                    <span className="text-xs text-gray-500 mr-1">
                        <FontAwesomeIcon size="sm" className="w-3 h-3" icon={faHeart} />
                    </span>
                    <span className="text-xs text-gray-500">10</span>
                </Tooltip>
            </div>}
        </div>
    );
}

export default StatsItem;