import FollowButton from "@/components/common/FollowButton";
import ClientLayout from "@/layout/ClientLayout";
import { faFacebook, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBirthdayCake, faComments, faEllipsis, faEnvelope, faFilePen, faLocationDot, faTags, faUserEdit, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const tabs = [
    {
        name: 'Bài viết',
        url: '/profile/@hongdung'
    },
    {
        name: 'Series',
        url: '/profile/@hongdung/series'
    },
    {
        name: 'Người theo dõi',
        url: '/profile/@hongdung/followers'
    },
    {
        name: 'Đang theo dõi',
        url: '/profile/@hongdung/following'
    }
]

const navItems = [
    {
        text: "%s bài viết đã xuất bản",
        stat: 1000,
        icon: <FontAwesomeIcon icon={faFilePen} size="sm" className="h-5 w-5" />
    },
    {
        text: "%s người theo dõi",
        stat: "1tr",
        icon: <FontAwesomeIcon icon={faUsers} size="sm" className="h-5 w-5" />
    },
    {
        text: "Đang theo dõi %s người ",
        stat: 100   ,
        icon: <FontAwesomeIcon icon={faUserPlus} size="sm" className="h-5 w-5" />
    },
    {
        text: "%s bình luận đã viết",
        stat: 20000,
        icon: <FontAwesomeIcon icon={faComments} size="sm" className="h-5 w-5" />
    },
    {
        text: "Đang theo dõi %s chủ đề",
        stat: 30,
        icon: <FontAwesomeIcon icon={faTags} size="sm" className="h-5 w-5" />
    }
]

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = router.asPath;
    return (
        <ClientLayout>
            <div className="container mx-auto max-w-screen-xl">
                <div className="bg-white rounded-xl mt-5 overflow-hidden">
                    <div className="h-64">
                        <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--liw1YOsA--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ohn4jhk6eykdcex4umst.png" width={650} height={275} alt="dfd" className="w-full h-64 object-cover" />
                    </div>
                    <div className="relative px-10">
                        <div className="absolute top-0 left-10 -translate-y-1/2">
                            <Image src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" alt="avatar" width={100} height={100} className="rounded-full w-28 h-28 object-cover" />
                        </div>
                        <div className="flex justify-end p-5 items-center">
                            <FollowButton />
                            <Link href="#" className="text-slate-500 p-2 hover:text-slate-700">
                                <FontAwesomeIcon icon={faUserEdit} size="sm" className="w-6 h-6" />
                            </Link>
                        </div>
                        <div className="">
                            <p className="text-2xl">Guodong (Troy) Zhao</p>
                            <p className="text-slate-500">@hongdung</p>
                            <p className="text-slate-500"><span className="font-bold mr-2">+5tr</span>followers</p>

                            <p className="text-slate-600 py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, numquam, neque nihil inventore doloribus adipisci nam nisi nemo ad perferendis quis rerum aliquid expedita dolorem provident odit a deserunt molestias!</p>
                        </div>
                        <div className="flex justify-between py-3">
                            <div className="flex items-center text-slate-500">
                                <FontAwesomeIcon icon={faLocationDot} size="sm" className="w-5 h-5" />
                                <span className="ml-2">Da Nang, Vietnam</span>
                            </div>
                            <div className="flex items-center text-slate-500">
                                <FontAwesomeIcon icon={faBirthdayCake} size="sm" className="w-5 h-5" />
                                <span className="ml-2">Joined on 2020/02/01</span>
                            </div>
                            <div className="flex items-center text-slate-500">
                                <FontAwesomeIcon icon={faEnvelope} size="sm" className="w-5 h-5" />
                                <span className="ml-2">hongdung@gmail.com</span>
                            </div>
                            <div className="flex items-center text-slate-500">
                                <Link href="#" className="px-2 hover:text-blue-500">
                                    <FontAwesomeIcon icon={faFacebook} size="sm" className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="px-2 hover:text-blue-500">
                                    <FontAwesomeIcon icon={faTwitter} size="sm" className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="px-2 hover:text-blue-500">
                                    <FontAwesomeIcon icon={faGithub} size="sm" className="w-5 h-5" />
                                </Link>

                            </div>
                        </div>
                        <div className="flex justify-between border-t">
                            <div className="flex">
                                {
                                    tabs.map((tab, index) => {
                                        return (
                                            <Link key={index} href={tab.url} className={`text-slate-700 block p-3 hover:bg-slate-100  ${tab.url == pathname ? 'border-b-4 border-yellow-500' : ''}`}>{tab.name}</Link>
                                        )
                                    })
                                }
                            </div>
                            <button className="text-slate-500 p-2 hover:text-slate-700" >
                                <FontAwesomeIcon icon={faEllipsis} size="sm" className="w-10 h-8 bg-gray-100 p-2 rounded-md" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-12">
                <aside className="col-span-4 mt-5">
                        <div className="sticky top-20">
                            <div className="p-5 bg-white rounded-xl shadow-md">
                                <ul className="">
                                    {
                                        navItems.map((item, index) => {
                                            return (
                                                <li key={index} className="hover:bg-white rounded-lg mb-2">
                                                    <Link href="#" className="flex items-center justify-start text-slate-600 p-2">
                                                        {item.icon}
                                                        <span className="ml-4">{item.text.replace('%s', item.stat as string)}</span>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </aside>
                    <div className="col-span-8">
                        <div className="my-5">{children}</div>
                    </div>

                </div>
            </div>
        </ClientLayout>
    );
}

export default ProfileLayout;