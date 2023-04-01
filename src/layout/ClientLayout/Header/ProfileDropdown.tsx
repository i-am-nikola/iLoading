import { useEffect, useRef, useState } from "react";

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleHideDropDown (event: Event) {
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
                <img src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" className="rounded-full w-6 h-6" />

            </button>
            {isOpen &&
                (<div className="absolute right-0 mt-2 w-64 bg-white border-solid border border-gray-200 drop-shadow-lg">
                    <div className="border-b ">
                        <a href="#" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                            <img src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" className="rounded-full w-10 h-10" />
                            <div className="ml-2">
                                <p className="text-lg text-slate-700">Nguyen Hong Dung</p>
                                <p className="text-sm text-slate-500">hongdung@gmail.com</p>
                            </div>
                        </a>
                    </div>
                    <div className="border-b">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bài viết của tôi</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Yêu thích</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Đã đọc</a>
                    </div>
                    <div className="border-b">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Thông báo</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tin nhắn</a>
                    </div>
                    <div className="border-b">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cài đặt</a>
                    </div>
                    <div className="border-b">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Đăng xuất</a>
                    </div>
                </div>)}
        </div>
    );
}

export default ProfileDropdown;