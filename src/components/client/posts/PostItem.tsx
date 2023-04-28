import BookmarkPlus from "@/components/icons/BookmarkPlus";
import { Tooltip } from "@/components/ui";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import StatsItem from "./StatsItem";
import UserPopover from "./UserPopover";

const PostItem = () => {
    return (
        <div className="border-b pl-0 p-4 flex flex-col sm:flex-row">
            <div className="w-full">
                <div className="flex items-center">
                    <UserPopover />
                    <span className="text-sm text-slate-500 mr-2">
                        <FontAwesomeIcon
                            icon={faCircle}
                            size="sm"
                            className="w-1 h-1"
                        />
                    </span>
                    <span className="text-sm text-slate-500 mr-2">
                        11/3/2015, 12:48 AM
                    </span>
                    <span className="text-sm text-slate-500 mr-2">-</span>
                    <span className="text-sm text-slate-500 mr-2">
                        4 phút đọc
                    </span>
                </div>
                <Link href="/bai-viet">
                    <h2 className="text-lg font-semibold my-3">
                        It’s Been 20 Years Since We Invaded Iraq. I Am Still in
                        the Desert.
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Even though many veterans came home physically from
                        Iraq, we never fully returned home
                    </p>
                </Link>
                <div className="flex justify-between items-center">
                    <div className="w-full">
                        <StatsItem
                            itemShow={[
                                "views",
                                "bookmark",
                                "comments",
                                "heart",
                            ]}
                        />
                    </div>
                    <div className="flex justify-end w-full">
                        <div className="mr-5">
                            <Tooltip content="Bookmark bài viết này">
                                <span className="text-xs text-slate-500 mr-1 cursor-pointer hover:text-slate-700">
                                    <BookmarkPlus />
                                </span>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
