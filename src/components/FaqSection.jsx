"use client";

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiOutlinePlus } from "react-icons/hi2";
import PrimaryButton from "./PrimaryButton"

const accordionData = [
    {
        title: "How will I get my receipt?",
        content:
            "If you bought a digital receipt, you will get it via email. Physical receipts will be shipped to you."
    },
    {
        title: "What's the delivery time?",
        content: "Your receipts will be sent to your email inbox immediately after submission."
    },
    {
        title: "There's wrong info on my receipt.",
        content: "Don't worry. Message us with your order number and we will re-send you the fixed version."
    },
];


const AccordionItem = ({ title, content, isOpen, onClick, isLast }) => {
    return (
        <div className={`border-t-(--secondary-text) border-t-[1px] ${isLast ? "border-b-(--secondary-text) border-b-[1px]" : ""
            }`}>
            <button
                className="flex items-center justify-between w-full py-7  text-left focus:outline-none "
                onClick={onClick}
            >
                <h2 className="tablet:text-3xl text-2xl font-semibold text-(--primary-text) tracking-tight">{title}</h2>
                <HiOutlinePlus
                    className={`w-7 h-7 transition-transform duration-200 text-(--accent-text) ${isOpen ? "transform rotate-45" : ""
                        }`}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
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
        <div className="faq-section flex tablet:flex-row flex-col tablet:justify-between w-full items-start pb-5 gap-10" id="faq">
            <div className="flex flex-col gap-10 w-full">
                <span className="text-(--accent-text) text-[1.2rem] font-light">Frequently asked questions</span>
                <h1 className="tablet:font-bold font-semibold text-(--primary-text) text-5xl tablet:text-7xl tracking-tighter tablet:leading-20">
                    FAQ & Contact
                </h1>
                <p className="tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl tablet:pt-10">
                    Here you can find frequently asked questions. If you didn&apos;t find the one you were looking for, you can jump to the contact page.
                </p>
                <PrimaryButton text="Contact us" href="https://discord.gg/resellora"/>
            </div>
            <div className="accordion flex flex-col  overflow-hidden tablet:w-[45%] w-full">
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
