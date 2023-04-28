import { faClipboardList, faEye, faPaste } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "../../ui";
import UserPopover from "../posts/UserPopover";

const SeriesItem = () => {
    return (
        <div className="border-b p-4 flex flex-col sm:flex-row">
            <div className="w-full">
                <UserPopover />
                <Link href="/bai-viet">
                    <h2 className="text-lg font-semibold my-3">It’s Been 20 Years Since We Invaded Iraq. I Am Still in the Desert.It’s Been 20 Years Since We Invaded Iraq. I Am Still in the Desert.</h2>
                </Link>
                <div className="flex justify-start w-full">
                    <div className="mr-5">
                        <Tooltip content="Lượt xem">
                            <span className="text-xs text-gray-500 mr-1">
                                <FontAwesomeIcon size="sm" className="w-3 h-3"  icon={faEye} />
                            </span>
                            <span className="text-xs text-gray-500">100  </span>
                        </Tooltip>
                    </div>
                    <div className="mr-5">
                        <Tooltip content="Bài viết">
                            <span className="text-xs text-gray-500 mr-1">
                                <FontAwesomeIcon size="sm" className="w-3 h-3" icon={faPaste} />
                            </span>
                            <span className="text-xs text-gray-500">100  </span>
                        </Tooltip>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SeriesItem;