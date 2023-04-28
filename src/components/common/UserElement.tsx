import Image from "next/image";
import Link from "next/link";
import { StatsItem } from "../client/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const UserElement = () => {
    return (
        <>
            <div className="border-b py-2">
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
                <button className=" flex items-center h-7 leading-5 text-sm px-3 py-1 bg-sky-500 hover:bg-sky-600 text-white rounded-full">
                    <FontAwesomeIcon icon={faCheck} size="sm" className="mr-2 h-3 w-3 inline" />
                    Đã theo dõi
                </button>
            </div>
        </>
    );
}

export default UserElement;