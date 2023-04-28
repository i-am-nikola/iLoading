import Popover from "@/components/ui/Popover";
import Image from "next/image";
import { useState } from "react";
import UserElement from "@/components/common/UserElement";

const UserPopover = () => {
    const [showPopover, setShowPopover] = useState(false);
    return (
        <div onMouseEnter={() => setShowPopover(true)} onMouseLeave={() => setShowPopover(false)} >
            <Popover
                show={showPopover}
                position="bottom"
                className="w-72"
                target={
                    <div className="flex items-center gap-4 mr-2 cursor-pointer py-2">
                        <Image
                            src="/images/avatar-generations_prsz.jpeg"
                            alt="avatar"
                            width={24}
                            height={24}
                            sizes="100vw"
                            className="rounded-2xl"
                        />
                        <h4 className="text-sm font-medium text-blue-500">
                            Guodong (Troy) Zhao
                        </h4>
                    </div>
                }
            >
                <UserElement />
            </Popover>
        </div>
    );
}

export default UserPopover;