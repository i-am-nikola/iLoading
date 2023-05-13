import Image from "next/image";
import Link from "next/link";
import { StatsItem } from "../client/posts";
import FollowButton from "../common/FollowButton";

const UserItem = () => {
    return (
        <div className="col-span-5 bg-white shadow-md rounded-xl p-4 relative mt-10">
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#F0F2F5] p-2 rounded-full">
                <Image src="/images/avatar-generations_prsz.jpeg" alt="avatar" width={50} height={50} className="w-20 h-20 object-cover rounded-full" />
            </div>
            <div className="pt-10 content-center text-center">

                <Link href="#" className="text-blue-500 font-bold hover:text-blue-700">Guodong (Troy) Zhao</Link>
                <p className="text-slate-500">@hongdung</p>
                <div className="flex justify-center mt-2">
                    <StatsItem itemShow={['posts', 'follower']} />
                </div>
                <div className="flex justify-center mt-2">
                </div>
            </div>
        </div>
    );
}

export default UserItem;