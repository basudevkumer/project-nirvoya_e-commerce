import React from 'react'

const Filter = () => {
    return (
        <div className=" ml-[261px] justify-center items-center">
            <div className="w-[300px] h-[694px] bg-[#FFFFFF] pl-[19px]">


                <div>
                    <p className="pt-[25px] text-[18px] font-medium">
                        Related Categories
                    </p>
                    <p className="mt-[4px] text-[16px] font-normal text-[#757575]">
                        Men’s fashion
                    </p>
                    <ul className="pl-[18px] text-[16px] font-normal text-[#757575]">
                        <li className="hover:text-blue-300 cursor-pointer transition-colors">
                            Men’s Jacket
                        </li>
                        <li className="hover:text-blue-300 cursor-pointer transition-colors">
                            Men's T-Shirts
                        </li>
                        <li className="hover:text-blue-300 cursor-pointer transition-colors">
                            Casual Shirts
                        </li>
                        <li className="hover:text-blue-300 cursor-pointer transition-colors">
                            Summer T-Shirts
                        </li>
                    </ul>
                </div>

                <div className="bg-[#f4f4f4] h-[2px] w-full mt-[18px]" />

                <div className="w-[269px] h-[134px] mt-[22px] relative">
                    <p className="font-medium text-[#383838] text-[18px] [text-shadow:2px_2px_2px_rgba(0,0,0,0.5)]">
                        Filter by Price
                    </p>

                    <input
                        className="w-[262px] mt-[32px]"
                        type="range"
                        id="cowbell"
                        name="cowbell"
                        min="0"
                        max="100"
                        defaultValue="90"
                        step="10"
                    />

                    <p className="text-[18px] mt-[24px]">
                        <span className="text-[#a7a7a7]">Price: </span>
                        <span className="font-medium text-[#383838]">
                            ৳1000 - ৳2500
                        </span>
                    </p>
                </div>

                <div className="bg-[#f4f4f4] h-[2px] w-full mt-[25px]" />


                <div className="w-[269px] h-[243px] mt-[25px]">
                    <p className="text-[18px] font-medium text-[#383838] mb-3">
                        Filter by Rating
                    </p>

                    <div className="flex flex-col gap-2 mt-[32px]">

                        {[1, 2, 3, 4, 5].map((stars) => (
                            <label
                                key={stars}
                                className={`flex items-center cursor-pointer ${stars !== 1 ? "mt-[16px]" : ""
                                    }`}
                            >
                                <input
                                    type="checkbox"
                                    className="w-[24px] h-[24px] mr-[16px]"
                                />

                                <div className="flex gap-[8px]">
                                    {Array.from({ length: stars }).map((_, index) => (
                                        <img
                                            key={index}
                                            className="w-[24px] h-[24px]"
                                            src="./src/assets/images/star 1.png"
                                            alt="star"
                                        />
                                    ))}
                                </div>
                            </label>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Filter