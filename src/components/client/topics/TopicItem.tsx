import { faCheck, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const TopicItem = () => {
    return (
        <div className="flex items-center p-2 justify-start">
            <Link href="#" className="block h-20">
                <Image src="/images/javascript.webp" priority={true} width={48} height={64} alt="topics" className="h-20 w-20 object-fill" />
            </Link>
            <div className="ml-8">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faTag} size="sm" className="text-slate-500 h-4 w-4"/>
                    <Link href="#" className="ml-2 text-blue-500 hover:text-blue-700">Javascript</Link>
                </div>
                <p className="text-sm text-slate-500 font-bold mt-1">1000</p>
                <p className="text-sm text-slate-500 font-bold mt-1">1000</p>
                <button className="mt-1 flex items-center h-5 leading-5 text-sm px-3 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full">
                    <FontAwesomeIcon icon={faCheck} size="sm" className="mr-2 h-3 w-3 inline" />

                    Theo dõi
                </button>
            </div>
        </div>
    );
}

export default TopicItem;