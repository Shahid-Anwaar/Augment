"use client";
import { Icon } from '@iconify/react'
import React, { useEffect, useRef, useState } from 'react'

export default function Chats() {
    const [input, setInput] = useState("");
    const pRef = useRef<HTMLParagraphElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!pRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
                console.log(entry.isIntersecting, "yyyyyyyyy");
            },
            {
                threshold: 0.0001, // kitna visible ho to true ho
            }
        );

        observer.observe(pRef.current);

        return () => observer.disconnect();
    }, [pRef.current]);

    return (
        <>
            <p ref={pRef} />
            <div className='fixed z-50 w-full bottom-0 right-0 pointer-events-none '>
                <div className='flex items-center gap-3 justify-between px-6 pb-6'>
                    <div></div>
                    <div className={`border pointer-events-auto border-primary-600/60 rounded-[10px] w-full max-w-180 h-15 bg-primary-600/20 p-2 transition-all duration-700 ${inView ? "translate-y-28" : ""}`}>
                        <div className='rounded-[10px] w-full h-full bg-white p-1 flex items-center'>
                            <Icon icon="humbleicons:ai" className="ms-2 h-6 w-6 text-primary-600 mr-2 rotate-180" />
                            <input
                                type='text'
                                // placeholder={inView ? "In view" : "Not in view"}
                                placeholder='Ask anything about Augment'
                                className='w-full h-full focus:outline-none '
                                value={input}
                                onChange={(e) => setInput(e.target.value)}

                            />
                            <button
                                type="button"
                                aria-label="Send message"
                                className={`me-2 ${!input ? "cursor-not-allowed opacity-80 bg-transparent text-gray-800" : "cursor-pointer bg-primary-600 text-black"} inline-flex p-1.5 items-center justify-center rounded-full transition-transform duration-300`}
                            >
                                <Icon icon="mdi:arrow-top" className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                    <div className='pointer-events-auto'>
                        <button
                            type="button"
                            aria-label="Open support chat"
                            className="group inline-flex cursor-pointer h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:scale-110 sm:h-12 sm:w-12"
                        >
                            {/* <Icon icon="hugeicons:message-multiple-01" className="h-[24px] w-[24px]" /> */}
                            <Icon icon="jam:messages-alt-f" className="h-6.5 w-6.5 group-hover:scale-110 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="pointer-events-none fixed bottom-0 right-0 z-50 w-full">
                <div className="flex items-end gap-2 px-3 pb-3 sm:gap-3 sm:px-4 sm:pb-4 lg:items-center lg:justify-between lg:px-6 lg:pb-6">
                    <div className="hidden lg:block" />

                    <div
                        className={`pointer-events-auto min-w-0 flex-1 border border-primary-600/60 rounded-[10px] bg-primary-600/20 p-1.5 transition-all duration-700 sm:p-2 lg:w-full lg:max-w-180 ${inView ? "translate-y-20 sm:translate-y-24 lg:translate-y-28" : ""
                            }`}
                    >
                        <div className="flex h-11 w-full items-center rounded-[10px] bg-white p-1 sm:h-12 lg:h-15">
                            <Icon
                                icon="humbleicons:ai"
                                className="ms-1.5 me-1.5 h-5 w-5 shrink-0 rotate-180 text-primary-600 sm:ms-2 sm:me-2 sm:h-6 sm:w-6"
                            />

                            <input
                                type="text"
                                placeholder={inView ? "In view" : "Not in view"}
                                className="h-full min-w-0 flex-1 bg-transparent text-[14px] focus:outline-none sm:text-[15px]"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />

                            <button
                                type="button"
                                aria-label="Send message"
                                className={`me-1 inline-flex shrink-0 items-center justify-center rounded-full p-1.5 transition-transform duration-300 sm:me-2 ${!input
                                    ? "cursor-not-allowed bg-transparent text-gray-800 opacity-80"
                                    : "cursor-pointer bg-primary-600 text-black"
                                    }`}
                            >
                                <Icon icon="mdi:arrow-top" className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div className="pointer-events-auto shrink-0">
                        <button
                            type="button"
                            aria-label="Open support chat"
                            className="group inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:scale-110 sm:h-11 sm:w-11 lg:h-12 lg:w-12"
                        >
                            <Icon
                                icon="jam:messages-alt-f"
                                className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6"
                            />
                        </button>
                    </div>
                </div>
            </div> */}
        </>
    )
}
