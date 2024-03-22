"use client"

import { useState } from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

const Sidebar = ({children}) => {

    const [open, isOpen] = useState(false)

    return (
        <div className="flex overflow-x-hidden">
            <div>
                <div className={`fixed h-screen bg-blue-950 flex flex-col justify-between ${
                    open ? 'w-40' : ''
                }`}>
                    <button className={`bg-blue-950 py-4 absolute top-1/2 ${open ? 'left-36' : '-left-1'}`} onClick={() => isOpen(!open)}>
                    {
                        open ? <GoTriangleLeft className="text-3xl text-white" /> : <GoTriangleRight className="text-3xl text-white" />
                    }
                    </button>
                </div>
            </div>

            {/* right side content */}
            <div className={`${open ? "ml-40" : ""} w-full `}>
                {children}
            </div>
        </div>
    );
};

export default Sidebar;