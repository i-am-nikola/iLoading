import ClientLayout from "@/layout/ClientLayout";
import { faCheck, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";

const profileMenuItems = [
    {
        text: 'Bài viết',
        url: '/profile/@hongdung'
    },
    {
        text: 'Series',
        url: '/profile/@hongdung/series'
    },
    {
        text: 'Người theo dõi',
        url: '/profile/@hongdung/followers'
    },
    {
        text: 'Đang theo dõi',
        url: '/profile/@hongdung/following'
    },
    {
        text: 'Bookmark',
        url: '/profile/@hongdung/bookmark'
    }
];

const profileStats = [
    {
        text: 'Tổng số bài viết',
        count: 0,
        url: "/profile/@hongdung"
    },
    {
        text: 'Tổng số lượt xem',
        count: 10,
        url: "/profile/@hongdung"
    },
    {
        text: 'Lượt theo dõi',
        count: 10000,
        url: "/profile/@hongdung/followers"
    },
    {
        text: 'Đang theo dõi',
        count: 0,
        url: "/profile/@hongdung/following"
    },
    {
        text: 'Bookmark',
        count: 0,
        url: "/profile/@hongdung/bookmark"
    }
];

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = router.pathname;
    const segments = pathname.split('/').filter(segment => segment !== '');
    return (
        <ClientLayout>
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-12">
                    <div className="col-span-8">
                        <div className="mt-5 py-10">
                            <div className="flex items-center">
                                <p className="text-4xl mb-3 mr-5">Guodong (Troy) Zhao</p>
                                <span className="text-sm text-gray-500">1 millions followers</span>
                            </div>
                            <button className="h-10 leading-5 text-sm px-5 py-2 bg-sky-500 text-white rounded-full">
                                <FontAwesomeIcon icon={faCheck} size="sm" className="mr-2" />
                                Đang theo dõi
                            </button>
                        </div>
                        <div className="flex items-center justify-between border-b">
                            <div className="flex items-baseline space-x-4">
                                {
                                    profileMenuItems.map((menuItem, index) => {
                                        const tab = menuItem.url.split('/').filter(segment => segment !== '')[2];
                                        return (
                                            <Link
                                                key={index} href={menuItem.url}
                                                className={(segments[2] == tab ? 'text-gray-800 border-b-2 border-gray-800 ' : '') + ' text-gray-500 hover:text-gray-700 whitespace-nowrap py-4 px-1 font-medium text-sm'}>
                                                {menuItem.text}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="mt-5">{children}</div>
                    </div>
                    <div className="col-span-4 p-4 ml-2">
                        <div className="sticky top-20">
                            <div className="p-4">
                                <Link href="/profile/@hongdung" className="block text-sm text-gray-700">
                                    <img src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" className="rounded-full w-1/3 h-1/3" />
                                    <div className="mt-5">
                                        <p className="text-lg text-slate-700">Nguyen Hong Dung</p>
                                        <p className="text-sm text-slate-500 mt-2">@hongdung</p>
                                    </div>
                                </Link>
                                <Link href="#" className="flex mt-3 text-blue-500 hover:text-blue-700 items-center">
                                    <FontAwesomeIcon icon={faUserPen} className="w-5 h-5" />
                                    <span className="ml-2 text-sm">Chỉnh sửa</span>
                                </Link>
                            </div>
                            <div className="mt-10 sticky top-20">
                                {
                                    profileStats.map((profileStat, index) => {
                                        return (
                                            <Link key={index} href={profileStat.url} className="flex justify-between py-1 hover:text-blue-700">
                                                <span className="text-base text-gray-700">{profileStat.text}</span>
                                                <span className="">{profileStat.count}</span>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ClientLayout>
    );
}

export default ProfileLayout;