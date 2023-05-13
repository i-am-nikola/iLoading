import PostCard from "@/components/client/posts/PostCard";
import PriorityTopics from "@/components/client/topics/PriorityTopics";
import FollowButton from "@/components/common/FollowButton";
import ClientLayout from "@/layout/ClientLayout";
import Image from "next/image";
import Link from "next/link";

const topics = [
    {
        name: 'Docker',
        url: 'topics/docker'
    },
    {
        name: 'Javascript',
        url: 'topics/docker'
    },
    {
        name: 'ReactJs',
        url: 'topics/docker'
    },
    {
        name: 'PHP',
        url: 'topics/docker'
    },
    {
        name: 'AI',
        url: 'topics/docker'
    },
    {
        name: 'Blockchain',
        url: 'topics/docker'
    },
    {
        name: 'Web3',
        url: 'topics/docker'
    },
    {
        name: 'Angular',
        url: 'topics/docker'
    },
    {
        name: 'Redis',
        url: 'topics/docker'
    },
    {
        name: 'AWS',
        url: 'topics/docker'
    }
]

const PostByTopic = () => {
    return (
        <ClientLayout>
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-12">
                    <div className="col-span-9">
                        <header className="rounded-xl mt-5 overflow-hidden p-5">
                            <div className="flex justify-start items-center">
                                <Link href="#" className="block w-1/12">
                                    <Image src="/images/javascript.webp" priority={true} width={100} height={100} alt="topics" className="h-16 w-16 object-cover" />
                                </Link>
                                <div className="px-5 w-9/12">
                                    <h3 className="font-bold text-slate-700 text-4xl">Javascript</h3>
                                </div>
                                <div className="w-2/12">
                                    <FollowButton />
                                </div>
                            </div>
                            <p className="mt-4 text-slate-500">Once relegated to the browser as one of the 3 core technologies of the web, JavaScript can now be found almost anywhere you find code. JavaScript developers move fast and push software development forward; they can be as opinionated as the frameworks they use, so let's keep it clean here and make it a place to learn from each other!</p>
                        </header>
                        <div className="mt-5">
                            <div className="flex border-b">
                                <Link href="#" className="p-2 js-topic-item text-slate-500 hover:text-slate-700">Mới nhất </Link>
                                <Link href="#" className="p-2 js-topic-item text-slate-500 hover:text-slate-700">Top</Link>

                            </div>
                            <div className="grid grid-cols-1 gap-4 mt-5">
                                <PostCard />
                                <PostCard />
                                <PostCard />
                                <PostCard />
                                <PostCard />
                            </div>
                        </div>
                    </div>
                    <aside className="col-span-3 mt-5">
                        <div className="sticky top-20">
                            <div className="flex justify-between border-b py-10">
                                <div className="text-center">
                                    <p className="font-bold text-slate-700 text-xl">78K</p>
                                    <p className="text-slate-700 mt-3">Bài viết</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-slate-700 text-xl">78K</p>
                                    <p className="text-slate-700 mt-3">Tác giả</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-slate-700 text-xl">78K</p>
                                    <p className="text-slate-700 mt-3">Người theo dõi</p>
                                </div>
                            </div>
                            <div className="py-10">
                                <h2 className="text-slate-600 font-bold p-2">Chủ để phổ biến</h2>
                                <div className="mt-2">
                                    <Link href="/topics/javascript" className="inline-block bg-gray-200 px-4 py-2 rounded-2xl text-slate-700 ml-2 my-1 hover:bg-gray-300">Javascript</Link>
                                    <Link href="/topics/javascript" className="inline-block bg-gray-200 px-4 py-2 rounded-2xl text-slate-700 ml-2 my-1 hover:bg-gray-300">Docker</Link>
                                    <Link href="/topics/javascript" className="inline-block bg-gray-200 px-4 py-2 rounded-2xl text-slate-700 ml-2 my-1 hover:bg-gray-300">PHP</Link>
                                    <Link href="/topics/javascript" className="inline-block bg-gray-200 px-4 py-2 rounded-2xl text-slate-700 ml-2 my-1 hover:bg-gray-300">AWS</Link>
                                    <Link href="/topics/javascript" className="inline-block bg-gray-200 px-4 py-2 rounded-2xl text-slate-700 ml-2 my-1 hover:bg-gray-300">Javascript</Link>
                                    <Link href="/topics/javascript" className="inline-block bg-gray-200 px-4 py-2 rounded-2xl text-slate-700 ml-2 my-1 hover:bg-gray-300">Docker</Link>
                                    <Link href="/topics/javascript" className="inline-block bg-gray-200 px-4 py-2 rounded-2xl text-slate-700 ml-2 my-1 hover:bg-gray-300">PHP</Link>
                                    <Link href="/topics/javascript" className="inline-block bg-gray-200 px-4 py-2 rounded-2xl text-slate-700 ml-2 my-1 hover:bg-gray-300">AWS</Link>






                                </div>


                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </ClientLayout>
    );
}

export default PostByTopic;