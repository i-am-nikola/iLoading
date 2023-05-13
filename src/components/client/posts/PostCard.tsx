import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserPopover from "./UserPopover";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import StatsItem from "./StatsItem";
import Link from "next/link";
import { Tooltip } from "@/components/ui";
import BookmarkPlus from "@/components/icons/BookmarkPlus";
import Image from "next/image";

const PostCard = () => {
    return (
        <div className="border-b p-4 bg-white  rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
            <div className="mb-2">
                <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--liw1YOsA--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ohn4jhk6eykdcex4umst.png" width={650} height={275} alt="dfd" className="w-full h-64 object-cover" />
            </div>
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
}

export default PostCard;