import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <h3>Sidebar</h3>
            <div className="flex-grow">{children}</div>
        </div>
    );
};

export default AdminLayout;
