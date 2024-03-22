"use client";
import Image from "next/image";
import storyImage from "../../../assets/story.jpg";

const MarketCard = () => {
    return (
        <div>
            {/* Title */}
            <p className="font-bold text-xl mb-2">MARKET STORIES</p>

            {/* card */}
            <div className="shadow-md mb-10">
                <Image src={storyImage} width={320} height={100} alt="sunset" />
                <div className="p-4">
                    <h3 className="text-lg font-bold">The Coldest Sunset</h3>
                    <p className="text-justify text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ullam cupiditate, vitae dolores doloribus numquam
                        adipisci magnam qui quas expedita accusantium ipsum
                        error, excepturi sapiente consequatur dicta dignissimos
                        et
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MarketCard;
