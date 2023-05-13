import React from "react";
import { faBookmark, faHouse, faPaperPlane, faTag, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import Link from "next/link";
import Logo from '/assets/images/logo.png';
import TopAuthorItem from "@/components/common/TopAuthorItem";
import PriorityTopics from "@/components/client/topics/PriorityTopics";

const navItems = [
    {
        text: "Trang chủ",
        url: "/",
        icon: <FontAwesomeIcon icon={faHouse} size="sm" className="h-5 w-5" />
    },
    {
        text: "Hong Dung Nguyen",
        url: "/profile/@hongdung",
        icon: <Image src="/images/avatar-generations_prsz.jpeg" alt="avatar" width={24} height={24} sizes="100vw" className="rounded-full" />
    },
    {
        text: "Bookmark",
        url: "/dashboard/bookmark",
        icon: <FontAwesomeIcon icon={faBookmark} size="sm" className="h-5 w-5" />
    },
    {
        text: "Chủ đề",
        url: "/topics",
        icon: <FontAwesomeIcon icon={faTags} size="sm" className="h-5 w-5" />
    },
    {
        text: "Về chúng tôi",
        url: "/about",
        icon: <Image src={Logo.src} alt="logo" width={21} height={10} className="h-5 w-5" />
    },
    {
        text: "Liên hệ",
        url: "/contact",
        icon: <FontAwesomeIcon icon={faPaperPlane} size="sm" className="h-5 w-5" />
    }
]

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


const CrayonsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="px-4 py-6">
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
                    <aside className="col-span-1 sm:col-span-3">
                        <div className="sticky top-16">
                            <nav className=" border-b border-gray-300 pb-5">
                                <ul className="">
                                    {
                                        navItems.map((item, index) => {
                                            return (
                                                <li key={index} className="hover:bg-white rounded-lg mb-2">
                                                    <Link href={item.url} className="flex items-center justify-start text-slate-600 p-2">
                                                        {item.icon}
                                                        <span className="ml-4">{item.text}</span>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </nav>
                            <nav className="py-5">
                                <PriorityTopics topics={topics} title="Chủ đề bạn quan tâm" />
                            </nav>
                        </div>
                    </aside>
                    <section className="col-span-1 sm:col-span-6">
                        {children}
                    </section>
                    <aside className="col-span-1 sm:col-span-3 pl-4">
                        <div className="sticky top-20 h-screen-64 overflow-y-auto scroll-my-1">
                            <div className="bg-white rounded-xl p-4 w-full">
                                <header className="mb-2">
                                    <h3 className="text-slate-700">Ads</h3>
                                </header>
                                <Link href="#" className="inline-block w-full">
                                    <Image
                                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--kUZijgSE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gxs2kw7xsfruxa53bqz3.png"
                                        alt="ads"
                                        width={994}
                                        height={557}
                                        className="w-full h-auto object-contain"
                                    />
                                </Link>
                                <Link href="#" className="py-2inline-block text-lg text-blue-500 hover:text-blue-600 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Link>
                                <p className="text-slate-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi soluta quia quis maiores!?
                                </p>
                            </div>
                            <div className="py-5">
                                <div className="bg-white rounded-xl p-4">
                                    <h2 className=" text-slate-600 font-bold">Tác giả hàng đầu</h2>
                                    <div className="my-2">
                                        <TopAuthorItem />
                                        <TopAuthorItem />
                                        <TopAuthorItem />

                                    </div>
                                    <a href="#" className='text-blue-500 hover:text-slate-600'>Xem thêm</a>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default CrayonsLayout;