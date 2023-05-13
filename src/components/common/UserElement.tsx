import Image from "next/image";
import Link from "next/link";
import { StatsItem } from "../client/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import FollowButton from "./FollowButton";

const UserElement = () => {
    return (
        <>
            <div className="border-b py-2 z-10">
                <div className="flex justify-around items-center">
                    <div className="mr-2">
                        <Link href="/profile/@hongdung" >
                            <Image
                                src="/images/avatar-generations_prsz.jpeg"
                                alt="your-image-alt"
                                width={64}
                                height={64}
                                sizes="100vw "
                                className="rounded-full"
                            />
                        </Link>

                    </div>
                    <div className="p-2 w-40">
                        <Link
                            href="/profile/@hongdung"
                            className="text-sm font-medium text-blue-500 hover:underline block"
                        >
                            Guodong (Troy) Zhao
                        </Link>
                        <p className="text-sm text-left text-slate-500 my-1">
                            @hongdung
                        </p>
                        <StatsItem itemShow={["posts", "views"]} />
                    </div>
                </div>
            </div>
            <div className="flex justify-around items-center py-2">
                <p className="text-sm text-slate-500">
                    1.5K Followers
                </p>
                <FollowButton isFollowing={false} />
            </div>
        </>
    );
}

export default UserElement;