import ClientLayout from "@/layout/ClientLayout";
import { faAngleDown, faBookmark, faClockRotateLeft, faEarth, faEarthAmericas, faFilePen, faHouse, faListCheck, faLock, faTags, faUserPlus, faUsersRectangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionBody, AccordionHeader, Card, Chip, List, ListItem, ListItemPrefix, ListItemSuffix, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    HomeIcon,
    ClipboardDocumentIcon,
    ClipboardDocumentListIcon,
    GlobeAmericasIcon,
    LockClosedIcon,
    ListBulletIcon,
    UserGroupIcon,
    UserPlusIcon,
    BookmarkIcon,
    TagIcon,
    ClockIcon
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const navItems = [
    {
        text: "Trang chủ",
        url: "/",
        icon: <HomeIcon className="h-5 w-5" />
    },
    {
        text: "Hong Dung Nguyen",
        url: "/profile/@hongdung",
        icon: <Image src="/images/avatar-generations_prsz.jpeg" alt="avatar" width={24} height={24} sizes="100vw" className="rounded-full" />
    },
    {
        text: 'Bài viết',
        url: '/dashboard',
        icon: <ClipboardDocumentListIcon className="h5 w-5" />,
        count: 10,
        children: [
            {
                text: 'Công khai',
                url: '/dashboard/posts/published',
                icon: <GlobeAmericasIcon className="h-5 w-5" />,
                count: 10,
            },
            {
                text: 'Bản nháp',
                url: '/dashboard/posts/draft',
                icon: <LockClosedIcon className="h-5 w-5" />,
                count: 10,
            },
        ]
    },
    {
        text: 'Series',
        url: '/dashboard/series',
        icon: <ListBulletIcon className="h-5 w-5" />,
        count: 10,
    },
    {
        text: 'Người theo dõi',
        url: '/dashboard/followers',
        icon: <UserGroupIcon className="h-5 w-5" />,
        count: 100,
    },
    {
        text: 'Đang theo dõi',
        url: '/dashboard/following',
        icon: <UserPlusIcon className="h-5 w-5" />,
        count: 10,

    },
    {
        text: 'Bookmark',
        url: '/dashboard/bookmark',
        icon: <BookmarkIcon className="h-5 w-5" />,
        count: 10,
        children: [
            {
                text: 'Bài viết',
                url: '/dashboard/bookmark/posts',
                icon: <ClipboardDocumentListIcon className="h5 w-5" />,
                count: 10,
            },
            {
                text: 'Series',
                url: '/dashboard/bookmark/series',
                icon: <ListBulletIcon className="h-5 w-5" />,
                count: 10,
            }
        ]
    },
    {
        text: 'Chủ đề quan tâm',
        url: '/dashboard/topics',
        icon: <TagIcon className="h-5 w-5" />,
        count: 10000,
    },
    {
        text: 'Nhật ký hoạt động',
        url: '/dashboard/histories',
        icon: <ClockIcon className="h-5 w-5" />,
        count: 10000,
    },
];

const ClientDashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = router.asPath;

    let navOpen = 0;
    if (['/dashboard/posts/published', '/dashboard/posts/draft'].includes(pathname)) {
        navOpen = 2;
    }
    if (['/dashboard/bookmark/posts', '/dashboard/bookmark/series'].includes(pathname)) {
        navOpen = 6;
    }

    const [open, setOpen] = useState(navOpen);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <ClientLayout>
            <div className="container mx-auto max-w-screen-xl">
                <aside className="fixed col-span-1 sm:col-span-3 bg-white w-80 h-full shadow-md">
                    <Card className="py-5 h-[calc(100vh-2rem)] w-full max-w-[20rem] shadow-xl shadow-blue-gray-900/5">
                        {
                            navItems.map((item, index) => {
                                return (
                                    <List key={index} className="p-0">{
                                        <Accordion
                                            key={index}
                                            open={open === index}
                                            icon={
                                                item.children ? <ChevronDownIcon
                                                    strokeWidth={2.5}
                                                    className={`mx-auto h-4 w-4 transition-transform ${open === index ? "rotate-180" : ""}`}
                                                /> : ''
                                            }
                                        >
                                            <Link href={!item.children ? item.url : ''}>
                                                <ListItem className={`p-0 bg-inherit rounded-none hover:bg-gray-300 hover:bg-opacity-80 hover:text-gray-700 ${pathname == item.url ? 'bg-gray-300 bg-opacity-80 text-gray-700 ' : ''}`} selected={open === index}>
                                                    <AccordionHeader onClick={() => handleOpen(index)} className="border-b-0 p-3">
                                                        <ListItemPrefix> {item.icon}</ListItemPrefix>
                                                        <Typography className="mr-auto font-normal">
                                                            {item.text}
                                                        </Typography>
                                                    </AccordionHeader>
                                                </ListItem>
                                            </Link>
                                            <AccordionBody className="p-0">
                                                <List className="p-0 gap-0">
                                                    {
                                                        item.children && item.children.map((itemChild, i) => {
                                                            return (
                                                                <Link href={itemChild.url} key={i} >
                                                                    <ListItem key={i} className={`pl-8 rounded-none hover:bg-gray-300 hover:bg-opacity-80 hover:text-gray-700 ${pathname == itemChild.url ? 'bg-gray-300 bg-opacity-80 text-gray-700 ' : ''}`}>
                                                                        <ListItemPrefix>
                                                                            {itemChild.icon}
                                                                        </ListItemPrefix>
                                                                        {itemChild.text}
                                                                    </ListItem>
                                                                </Link>
                                                            );
                                                        })
                                                    }
                                                </List>
                                            </AccordionBody>
                                        </Accordion>
                                    }
                                    </List>
                                )
                            })
                        }

                    </Card>
                </aside>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-12">
                    <section className="col-span-1 sm:col-span-12 px-5 ml-80">
                        {children}
                    </section>
                </div>
            </div>
        </ClientLayout>
    );
}

export default ClientDashboardLayout;