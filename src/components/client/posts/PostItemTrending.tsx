import Image from "next/image";
import Link from "next/link";

const PostItemTrending = () => {
    return (
        <div className="overflow-hidden shadow-md">
            <div className="p-4">
                <Link href="/bai-viet" className="flex items-center gap-4">
                    <Image src="/images/avatar-generations_prsz.jpeg" width={24} height={24} alt="your-image-alt" className="rounded-2xl" />
                    <h4 className="text-sm font-medium">Guodong (Troy) Zhao</h4>
                </Link>
                <h3 className="text-lg font-bold my-3">A step-by-step guide to building a chatbot based on your own documents with GPT</h3>
                <div className="rounded-tr-md">
                    <span className="text-xs mr-2 text-gray-500">100 views</span>
                    <span className="text-xs text-gray-500">March 15, 2023</span>
                </div>
            </div>
        </div>
    );
}

export default PostItemTrending;