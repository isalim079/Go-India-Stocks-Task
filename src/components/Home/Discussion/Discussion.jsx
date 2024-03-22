"use client";

import DiscussionCard from "./DiscussionCard";

const Discussion = () => {
    return (
        <div>
            {/* Title */}
            <p className="font-bold text-xl mb-2">DISCUSSION FORUM</p>
            <DiscussionCard />
            <DiscussionCard />
            <DiscussionCard />
            <DiscussionCard />
            <DiscussionCard />
            <DiscussionCard />
        </div>
    );
};

export default Discussion;
