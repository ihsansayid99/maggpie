"use client";
import { PreloaderContext } from '@/app/context';
import React, { useState, useEffect, useContext } from 'react'
export const Preloader = () => {
    const preload = useContext(PreloaderContext)
    const [isLoading, setIsLoading] = useState(true)
    const [isDone, setIsDone] = useState(false)
    const [percentage, setPercentage] = useState(0);
  
    useEffect(() => {
        // Check if the route is currently loading
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
        if (!isLoading) {
            const interval = setInterval(() => {
                setPercentage((prevPercentage) => {
                    const newPercentage = prevPercentage + 8;
                    if (newPercentage >= 100) {
                        clearInterval(interval); // Stop the animation at 100%
                        setTimeout(() => {
                           setIsDone(true)
                           setTimeout(() => {
                            preload?.setIsLoading(false)
                           }, 710)
                        }, 1000)
                        return 100;
                    }
                    return newPercentage;
                });
            }, 250);

            return () => {
                clearInterval(interval);
            };
        }
    }, [isLoading]);

    const isRed = !isDone && percentage >= 64 ? true : false
    const isYellow = !isDone && percentage >= 8 ? true : false
    const isBigg1 = !isDone && percentage >= 48 ? true : false
    const isBigg2 = !isDone && percentage >= 72 ? true : false
    return (
        <div className="preloader_wrapper flex relative">
            {
                !isLoading ? (
                    <div className="wrapper_big_transition">
                        <div className={`big_transition big_transition_1 ${isBigg1 ? 'active' : ''}`}></div>
                        <div className={`big_transition big_transition_2 ${isBigg2 ? 'active' : ''}`}></div>
                    </div>
                ) : null
            }
            <div className="wrapper_inside relative w-full flex items-center justify-center">
                <div className={`loading-mid-animation ${isDone ? 'slide_out' : ''}`}>
                    <div className={`fill fill-red ${isRed ? 'active' : ''}`}></div>
                    <div className={`fill fill-yellow ${isYellow ? 'active' : ''}`}></div>
                </div>
                {
                    !isLoading ? (
                        <>
                            <div className="top_header flex justify-between w-full absolute top-0">
                                <div className="magpiee-title text-2xl text-white font-bold">Maggpie.</div>
                                <div className="magpiee-information-right">
                                    <h2 className="text-[#000] font-medium">Stay In Touch</h2>
                                    <div className={`list_socmed mt-[1.2rem] gap-y-2 flex flex-col items-start justify-start ${isBigg1 ? 'active' : ''}`}>
                                        <button className="text-[#828382] font-light">Instagram</button>
                                        <button className="text-[#828382] font-light">Linkedin</button>
                                        <button className="text-[#828382] font-light">Twitter</button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-0 bottom-0">
                                <h2 className="text-[190px] text-black font-normal">{percentage}%</h2>
                            </div>
                            <div className="magpiee-information-right absolute right-0 bottom-0">
                                <h2 className="text-[#000] font-medium text-xl">© 2023</h2>
                            </div>
                        </>
                    ) : null
                }
            </div>
        </div>
    )
}