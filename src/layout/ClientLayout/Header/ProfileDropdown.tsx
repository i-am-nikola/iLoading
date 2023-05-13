import { faBell, faChartLine, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleHideDropDown(event: Event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handleHideDropDown);
        window.addEventListener('scroll', handleHideDropDown);
        return () => {
            document.removeEventListener('click', handleHideDropDown);
            window.removeEventListener('scroll', handleHideDropDown);
        }
    }, [dropdownRef])


    return (
        <div className="relative" ref={dropdownRef}>
            <button className="flex items-center focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                <Image src="/images/avatar-generations_prsz.jpeg" alt="avatar" width={24} height={24} sizes="100vw" className="rounded-full" />
            </button>
            {isOpen &&
                (<div className="absolute right-0 mt-2 w-64 bg-white border-solid border border-gray-200 drop-shadow-lg">
                    <div className="border-b ">
                        <Link href="/profile/@hongdung" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                            <Image src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" alt="avatar" width={40} height={40} sizes="100vw" className="rounded-full" />
                            <div className="ml-2">
                                <p className="text-lg text-slate-700">Nguyen Hong Dung</p>
                                <p className="text-sm text-slate-500">hongdung@gmail.com</p>
                            </div>
                        </Link>
                    </div>
                    <div className="border-b">
                        <Link href="/dashboard" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <FontAwesomeIcon icon={faChartLine} size="sm" className="h-5 w-5 mr-3" />
                            Bảng điều khiển
                        </Link>
                    </div>
                    <div className="border-b">
                        <Link href="#" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <FontAwesomeIcon icon={faBell} size="sm" className="h-5 w-5 mr-3" />
                            Thông báo</Link>
                    </div>
                    <div className="border-b">
                        <Link href="#" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <FontAwesomeIcon icon={faGear} size="sm" className="h-5 w-5 mr-3" />
                            Cài đặt
                        </Link>
                    </div>
                    <div className="border-b">
                        <Link href="#" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <FontAwesomeIcon icon={faRightFromBracket} size="sm" className="h-5 w-5 mr-3" />
                            Đăng xuất
                        </Link>
                    </div>
                </div>)}
        </div>
    );
}

export default ProfileDropdown;