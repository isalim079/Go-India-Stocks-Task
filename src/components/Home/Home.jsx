"use client";

import { useState } from "react";
import Discussion from "./Discussion/Discussion";
import Market from "./Market/Market";

const HomePage = () => {
    const [tab, setTab] = useState("tab1");

    return (
        <div>
            {/* Mobile navigation */}
            <div className="bg-blue-900 text-white flex flex-row justify-around md:hidden">
                <button
                    className={`flex-1 py-4 ${
                        tab === "tab1"
                            ? "bg-blue-950 border-b-2 border-b-red-600"
                            : ""
                    }`}
                    onClick={() => setTab("tab1")}
                    id="tab1"
                >
                    Discussion Forum
                </button>
                <button
                    className={`flex-1 py-4 ${
                        tab === "tab2"
                            ? "bg-blue-950 border-b-2 border-b-red-600"
                            : ""
                    }`}
                    onClick={() => setTab("tab2")}
                    id="tab2"
                >
                    Market Stories
                </button>
            </div>

            <div className="md:grid md:grid-cols-8 gap-12 mt-10 xl:px-10 lg:px-8 md:px-6 sm:px-4 px-2">
                <div
                    className={`lg:col-span-6 md:col-span-5 ${
                        tab === "tab1" ? "block" : "hidden"
                    } md:block`}
                >
                    <Discussion />
                </div>
                <div
                    className={`lg:col-span-2 md:col-span-3 ${
                        tab === "tab2" ? "block" : "hidden"
                    } md:block`}
                >
                    <Market />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
