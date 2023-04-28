import PostItem from '@/components/client/posts/PostItem';
import PostItemTrending from '@/components/client/posts/PostItemTrending';
import ClientLayout from '@/layout/ClientLayout';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <ClientLayout>
                <section>
                    <div className="bg-cover bg-center h-60 sm:h-96" style={{ backgroundImage: 'url("https://source.unsplash.com/random")' }}>
                        <div className="container mx-auto items-center">
                            <div className="text-white font-bold text-xl text-center">Welcome to my website</div>
                        </div>
                    </div>
                </section>
                <section className="px-4 py-6 border-b">
                    <div className="container mx-auto max-w-screen-xl">
                        <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                            <PostItemTrending />
                            <PostItemTrending />
                            <PostItemTrending />
                            <PostItemTrending />
                            <PostItemTrending />
                            <PostItemTrending />
                        </div>
                    </div>
                </section>
                <section className="px-4 py-6">
                    <div className="container mx-auto max-w-screen-xl">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
                            <section className="col-span-1 sm:col-span-4">
                                <div className="grid grid-cols-1 gap-4">
                                    <PostItem />
                                    <PostItem />
                                    <PostItem />
                                    <PostItem />
                                    <PostItem />
                                </div>
                            </section>
                            <aside className="col-span-1 sm:col-span-2 border-l pl-3">
                                <div className="sticky top-20">
                                    <div className="border-b py-5">
                                        <div className="p-2 mb-2">
                                            <a href="#" className="border border-gray-300 rounded-2xl text-slate-500 py-1 px-4 inline-flex items-center hover:bg-gray-50 m-1">
                                                <span>Programing</span>
                                            </a>
                                            <a href="#" className="border border-gray-300 rounded-2xl text-slate-500 py-1 px-4 inline-flex items-center hover:bg-gray-50 m-1">
                                                <span>Writing</span>
                                            </a>
                                            <a href="#" className="border border-gray-300 rounded-2xl text-slate-500 py-1 px-4 inline-flex items-center hover:bg-gray-50 m-1">
                                                <span>Javascript</span>
                                            </a>
                                            <a href="#" className="border border-gray-300 rounded-2xl text-slate-500 py-1 px-4 inline-flex items-center hover:bg-gray-50 m-1">
                                                <span>English</span>
                                            </a>
                                            <a href="#" className="border border-gray-300 rounded-2xl text-slate-500 py-1 px-4 inline-flex items-center hover:bg-gray-50 m-1">
                                                <span>Nextjs</span>
                                            </a>
                                        </div>
                                        <a href="#" className='px-4 text-blue-500 hover:text-slate-600'>Xem thêm chủ đề</a>
                                    </div>

                                    <div className="p-2">
                                        <a href="" className="text-slate-500 py-1 px-4 inline-flex items-center">
                                            Help
                                        </a>
                                        <a href="" className="text-slate-500 py-1 px-4 inline-flex items-center">
                                            About
                                        </a>
                                        <a href="" className="text-slate-500 py-1 px-4 inline-flex items-center">
                                            Blog
                                        </a>
                                        <a href="" className="text-slate-500 py-1 px-4 inline-flex items-center">
                                            Help
                                        </a>
                                        <a href="" className="text-slate-500 py-1 px-4 inline-flex items-center">
                                            Privacy
                                        </a>
                                        <a href="" className="text-slate-500 py-1 px-4 inline-flex items-center">
                                            Terms
                                        </a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </ClientLayout>
        </>
    )
}
