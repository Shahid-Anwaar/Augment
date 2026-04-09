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
                console.log("entry.....", entry);
                
                setInView(entry.isIntersecting);
            },
            {
                threshold: 0.0001, // kitna visible ho to true ho
            }
        );

        observer.observe(pRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <> <p ref={pRef}></p>
            <div className='fixed z-50 w-full bottom-0 right-0 pointer-events-none '>
                <div className='flex items-center justify-between px-6 pb-6'>
                    <div></div>
                    <div className={`border pointer-events-auto border-primary-600/60 rounded-[10px] w-full max-w-180 h-15 bg-primary-600/20 p-2 transition-all duration-700 ${inView ? "translate-y-28" : ""}`}>
                        <div className='rounded-[10px] w-full h-full bg-white p-1 flex items-center'>
                            <Icon icon="humbleicons:ai" className="ms-2 h-6 w-6 text-primary-600 mr-2 rotate-180" />
                            <input
                                type='text'
                                placeholder={inView ? "In view" : "Not in view"}
                                // placeholder='Ask anything about Augment'
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
        </>
    )
}
