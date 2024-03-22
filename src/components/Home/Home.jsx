"use client";

import Discussion from "./Discussion/Discussion";
import Market from "./Market/Market";

const HomePage = () => {
    return (
        <div>
            <div className="grid grid-cols-8 gap-20 mt-10 xl:px-10 lg:px-8 md:px-6 sm:px-4 px-2">
                <div className="col-span-6">
                    <Discussion />
                </div>
                <div className="col-span-2">
                    <Market />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
