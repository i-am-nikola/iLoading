import Image from "next/image";
import Link from "next/link";

const PostItem = () => {
    return (
        <div className="border-b pl-0 p-4 flex flex-col sm:flex-row">
            <div className="w-full sm:w-3/4 sm:px-4">
                <Link href="/profile/@hongdung" className="flex items-center gap-4">
                    <Image src="/images/avatar-generations_prsz.jpeg" alt="your-image-alt" width={24} height={24} sizes="100vw " className="rounded-2xl" />
                    <h4 className="text-sm font-medium">Guodong (Troy) Zhao</h4>
                </Link>
                <Link href="/bai-viet">
                    <h2 className="text-lg font-semibold my-3">It’s Been 20 Years Since We Invaded Iraq. I Am Still in the Desert.</h2>
                    <p className="text-gray-600 mb-4">Even though many veterans came home physically from Iraq, we never fully returned home</p>
                </Link>

                <div className="rounded-tr-md">
                    <span className="text-xs mr-2 text-gray-500">100 views</span>
                    <span className="text-xs text-gray-500">March 15, 2023</span>
                </div>
            </div>
            <div className="object-right w-full sm:w-1/4 flex justify-end">
                <Image src="https://img-b.udemycdn.com/course/480x270/3616978_b3f2_4.jpg" placeholder="blur" blurDataURL="https://img-b.udemycdn.com/course/480x270/3616978_b3f2_4.jpg" alt="Hình ảnh" width="100" height="100"  sizes="100vw" className="object-contain w-full h-auto" />
            </div>
        </div>
    );
}

export default PostItem;