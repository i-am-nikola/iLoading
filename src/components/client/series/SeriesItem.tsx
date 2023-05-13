import { faClipboardList, faEye, faPaste } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "../../ui";
import UserPopover from "../posts/UserPopover";
import { StatsItem } from "../posts";

const SeriesItem = () => {
    return (
        <div className="border-b p-4 flex flex-col sm:flex-row bg-white rounded-xl">
            <div className="w-full">
                <UserPopover />
                <Link href="/bai-viet">
                    <h2 className="text-lg font-semibold my-3">It’s Been 20 Years Since We Invaded Iraq. I Am Still in the Desert.It’s Been 20 Years Since We Invaded Iraq. I Am Still in the Desert.</h2>
                </Link>
                <div className="flex justify-start w-full">
                    <StatsItem itemShow={['posts']} />
                </div>
            </div>
        </div>
    );
}

export default SeriesItem;