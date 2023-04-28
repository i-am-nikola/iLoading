import React from "react";

const Tooltip = ({ children, content }: { children: React.ReactNode, content: String }) => {
    return (
        <div className="relative group content-center items-center">
            <div className="flex items-center justify-center">
                {children}
            </div>
            <div className="absolute top-6 group-hover:block hidden p-2 bg-gray-800 text-xs text-center text-white rounded w-28 z-10">
                {content}
            </div>
        </div>
    );
};

export default Tooltip;
