"use client";

import { useState } from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { FaCircleUser } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";
import Link from "next/link";

const Sidebar = ({ children }) => {
    const [open, isOpen] = useState(false);

    return (
        <div className="flex overflow-x-hidden">
            <div>
                <div
                    className={`fixed h-screen bg-blue-950 flex flex-col justify-between ${
                        open ? "w-52 " : ""
                    }`}
                >
                    {/* sidebar button */}
                    <button
                        className={`bg-blue-950 py-4 absolute top-1/2 transition-all duration-100 ease-in-out ${
                            open ? "left-48" : "-left-1"
                        }`}
                        onClick={() => isOpen(!open)}
                    >
                        {open ? (
                            <GoTriangleLeft className="text-3xl text-white" />
                        ) : (
                            <GoTriangleRight className="text-3xl text-white" />
                        )}
                    </button>

                    {/* sidebar content */}
                    {open ? (
                        <div className="">
                            {/* top title */}
                            <div className="flex items-center justify-between text-white px-4 pt-8">
                                <div className="flex items-center gap-3">
                                    <FaCircleUser className="text-2xl" />
                                    <p>Hello, User</p>
                                </div>
                                <div>
                                    <IoNotifications className="text-2xl" />
                                </div>
                            </div>

                            {/* line */}
                            <div>
                                <div className="border border-white mt-7 mb-5"></div>
                            </div>

                            {/* Navigation */}
                            <div className="">
                                <Link href="/">
                                    <li className="list-none text-white flex items-center gap-2 px-4 hover:bg-[#0F1741] py-3 text-sm">
                                        <BiMessageDetail className="text-xl" />{" "}
                                        Discussion Forum
                                    </li>
                                </Link>
                                <Link href="/">
                                    <li className="list-none text-white flex items-center gap-2 px-4 hover:bg-[#0F1741] py-3 text-sm">
                                        <AiFillDollarCircle className="text-xl" />{" "}
                                        Market Stories
                                    </li>
                                </Link>
                                <Link href="/">
                                    <li className="list-none text-white flex items-center gap-2 px-4 hover:bg-[#0F1741] py-3 text-sm">
                                        Sentiment
                                    </li>
                                </Link>
                                <Link href="/">
                                    <li className="list-none text-white flex items-center gap-2 px-4 hover:bg-[#0F1741] py-3 text-sm">
                                        Market
                                    </li>
                                </Link>
                                <Link href="/">
                                    <li className="list-none text-white flex items-center gap-2 px-4 hover:bg-[#0F1741] py-3 text-sm">
                                        Sector
                                    </li>
                                </Link>
                                <Link href="/">
                                    <li className="list-none text-white flex items-center gap-2 px-4 hover:bg-[#0F1741] py-3 text-sm">
                                        Watchlist
                                    </li>
                                </Link>
                                <Link href="/">
                                    <li className="list-none text-white flex items-center gap-2 px-4 hover:bg-[#0F1741] py-3 text-sm">
                                        Events
                                    </li>
                                </Link>
                                <Link href="/">
                                    <li className="list-none text-white flex items-center gap-2 px-4 hover:bg-[#0F1741] py-3 text-sm">
                                        News/Interview
                                    </li>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>

            {/* right side content */}
            <div className={`${open ? "ml-56" : ""} w-full `}>{children}</div>
        </div>
    );
};

export default Sidebar;
