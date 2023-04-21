import React from "react";

const Tooltip = ({ children, content }: { children: React.ReactNode, content: String }) => {
    return (
        <div className="relative group">
            {children}
            <div className="absolute top-6 group-hover:block hidden p-2 bg-gray-800 text-xs text-center text-white rounded">
                {content}
            </div>
        </div>
    );
};

export default Tooltip;
