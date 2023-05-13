import { faCheck, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const TopicItem = () => {
    return (
        <div className="relative bg-white rounded-xl p-4">
            <Link href="/topics/javascript" className="block h-20 absolute bottom-6 right-6 animate-spin-10s">
                <Image src="/images/javascript.webp" priority={true} width={100} height={100} alt="topics" className="h-20 w-20 object-cover" />
            </Link>
            <div className="ml-2">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faTag} size="sm" className="text-slate-500 h-4 w-4"/>
                    <Link href="/topics/javascript" className="ml-2 text-blue-500 hover:text-blue-700 font-bold">Javascript</Link>
                </div>
                <p className="text-slate-700 py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="font-light text-slate-500 py-1"><span className="font-semibold">1000</span> bài viết được xuất bản</p>
                <p className="font-light text-slate-500 py-1"><span className="font-semibold">1000</span> người theo dõi</p>
                <button className="mt-2 flex items-center h-5 leading-5 text-sm px-3 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full">
                    <FontAwesomeIcon icon={faCheck} size="sm" className="mr-2 h-3 w-3 inline" />
                    Theo dõi
                </button>
            </div>
        </div>
    );
}

export default TopicItem;