"use client";
import { useState } from "react";
import { HiOutlinePlus, HiMinus } from "react-icons/hi";
import { faqs } from "@/utils/libs";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import Link from "next/link";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  let [ref, { height }] = useMeasure();

  const toggleQuestion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="px-8 text-slate-50 xl:grid xl:justify-evenly xl:grid-cols-2 xl:mt-20">
      <div className="text-center">
        <h2 className="text-3xl mt-7">Frequently Asked Questions</h2>
        <p className="mb-6 mt-8 text-neutral-400">
          Have another questions? Contact us on{" "}
          <Link href="#" className="text-neutral-50 underline">
            Twitter
          </Link>{" "}
          or by{" "}
          <Link href="#" className="text-neutral-50 underline">
            Email
          </Link>
          .
        </p>
      </div>
      <div className="divide-y divide-neutral-800 flex flex-col gap-5 xl:min-w-6xl">
        {faqs.map((faq, index) => (
          <motion.div
            className="text-slate-50"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <h3
              className={`text-xl mb-2 mt-7 flex justify-between cursor-pointer select-none ${
                openIndex === index ? "text-neutral-400" : "text-slate-50"
              }`}
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
              <span className="text-2xl">
                {openIndex === index ? <HiMinus /> : <HiOutlinePlus />}
              </span>
            </h3>
            <AnimatePresence>
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  height: openIndex === index ? height : 0,
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    ref={ref}
                    className="leading-7 text-neutral-200"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
