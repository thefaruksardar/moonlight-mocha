"use client";
import { reviews } from "@/utils/libs";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Reviews() {
  return (
    <section className="text-slate-100 px-8 flex flex-col gap-6 ">
      <h2 className="text-2xl font-extrabold mt-8 mb-6 text-center">
        Moonlight Mocha: A Taste Testimonial
      </h2>
      <div className="grid md:grid-cols-2 gap-6 xl:grid-cols-3">
        {reviews.map((item, index) => (
          <motion.div
            className="flex flex-col gap-6 bg-neutral-950 px-8 py-10 rounded-3xl border border-neutral-600"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.img}
                alt={item.user}
                height={200}
                width={200}
                className="w-16 rounded-full"
              />
              <div className="border-l border-neutral-700 pl-5">
                <p className="text-xl">{item.user}</p>
                <span className="text-neutral-400">{item.dateTime}</span>
              </div>
            </div>
            <p className="text-xl leading-8 text-neutral-200">{item.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
