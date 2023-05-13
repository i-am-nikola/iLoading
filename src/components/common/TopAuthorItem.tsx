import Image from "next/image";
import FollowButton from "./FollowButton";
import { StatsItem } from "../client/posts";

const TopAuthorItem = () => {
    return (
        <>
            <div className="flex py-5 items-center border-b">
                <Image
                    src="/images/avatar-generations_prsz.jpeg"
                    alt="avatar"
                    width={10}
                    height={10}
                    sizes="100vw"
                    className="w-20 h-20 rounded-full object-cover"
                />
                <div className="ml-5 w-3/5">
                    <p className="text-sm font-medium text-blue-500 mb-1">Guodong (Troy) Zhao</p>
                    <span className="block text-sm text-slate-500 mb-2">@hongdung</span>
                    <div className="mb-2">
                        <StatsItem itemShow={['posts', 'follower']} />
                    </div>
                    <FollowButton />
                </div>
            </div>

        </>
    );
}

export default TopAuthorItem;