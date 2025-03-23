"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlinePlus } from "react-icons/hi2";
import Link from 'next/link';

const accordionData = [
    {
        title: "How will I get my receipt?",
        content:
            "If you bought a digital receipt, you will get it via email. Physical receipts will be shipped to you."
    },
    {
        title: "What's the delivery time?",
        content:
            "24 - 48 hours for digital receipts. 7 - 21 days for physical receipts."
    },
    {
        title: "There's wrong info on my receipt.",
        content:
            "Don't worry. Message us with your order number and we will re-send you the fixed version."
    },
];


const AccordionItem = ({ title, content, isOpen, onClick, isLast }) => {
    return (
        <div className={`border-t-(--secondary-text) border-t-[1px] ${
            isLast ? 'border-b-(--secondary-text) border-b-[1px]' : ''
        }`}>
            <button
                className="flex items-center justify-between w-full py-7  text-left focus:outline-none "
                onClick={onClick}
            >
                <h2 className="text-3xl font-semibold text-(--primary-text) tracking-tight">{title}</h2>
                <HiOutlinePlus
                    className={`w-7 h-7 transition-transform duration-200 text-(--accent-text) ${isOpen ? 'transform rotate-45' : ''
                        }`}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="text-xl font-light tracking-tight text-(--primary-text) pb-7">{content}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null)

    const handleItemClick = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="flex justify-between w-full items-start pb-5 gap-10" id='faq'>
            <div className="flex flex-col gap-10">
                <span className="text-(--accent-text) text-[1.2rem] font-light">Frequently asked questions

                </span>
                <h1 className='font-bold text-(--primary-text) text-7xl tracking-tighter leading-20'>
                    Get to know <br />HYPECEIPT
                </h1>
                <div className="flex justify-center items-center w-fit h-fit py-3 px-7 rounded-xl bg-(--accent-text)">
                    <Link href='/' className='text-[1.2rem] font-light tracking-tight'>
                        Buy Receipts
                    </Link>
                </div>
            </div>
            <div className="accordion flex flex-col  overflow-hidden w-[45%]">
                {accordionData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onClick={() => handleItemClick(index)}
                        isLast={index === accordionData.length - 1}
                    />
                ))}
            </div>
        </div>
    )
}

export default FaqSection
