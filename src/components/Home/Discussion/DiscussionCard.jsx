"use client";
import Image from "next/image";
import userIcon from "../../../assets/userIcon.png";
import { FaRegHeart } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { RiShareLine } from "react-icons/ri";

const DiscussionCard = () => {
    return (
        <div className="mb-10">
            <div className="flex shadow-md p-1 md:p-7 rounded-md">
                {/* Image section */}
                <div className="md:mr-5 mr-2 w-44 ">
                    <Image src={userIcon} width={70} height={70} alt="user" />
                </div>
                <div className="space-y-4">
                    {/* top title section */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 md:gap-16">
                            <h3 className="font-bold text-sm md:text-base">Lorem Ipsum</h3>
                            <p className="bg-blue-700 text-white rounded-full px-3 text-xs md:text-sm">
                                sector 2
                            </p>
                        </div>
                        <div>
                            <p className="text-blue-700 text-xs md:text-sm">2 min ago</p>
                        </div>
                    </div>

                    {/* Middle description */}
                    <div>
                        <p className="text-xs md:text-base text-justify">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatem accusantium officiis doloremque
                            facere accusamus molestias laboriosam quibusdam
                            illo, adipisci libero commodi fuga rem consequatur
                            voluptatibus voluptates odit modi
                        </p>
                    </div>

                    {/* Bottom section */}
                    <div className="flex justify-between">
                        <p className="flex items-center gap-1 md:gap-3">
                            <FaRegHeart /> <span className="text-xs md:text-base">2k</span>
                        </p>
                        <p className="flex items-center gap-1 md:gap-3">
                            <FaEye /> <span className="text-xs md:text-base">2k</span>
                        </p>
                        <p className="flex items-center gap-1 md:gap-3">
                            <BiComment /> <span className="text-xs md:text-base">2k Comments</span>
                        </p>
                        <p className="flex items-center gap-1 md:gap-3">
                            <RiShareLine /> <span className="text-xs md:text-base">Share</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscussionCard;
