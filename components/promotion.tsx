"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function Promotion() {
  return (
    <motion.section
      className="bg-neutral-950 py-20 my-12 xl:bg-transparent xl:max-w-3xl xl:mx-auto"
      initial={{ scale: 0.6, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{
        once: true,
      }}
      transition={{ duration: 0.75, delay: 0.5 }}
    >
      <div className="bg-neutral-200 mx-6 p-6 rounded-3xl text-center">
        <h2 className="text-2xl font-extrabold mt-8 mb-12 xl:text-4xl">
          Visit Moonlight Mocha Today
        </h2>
        <p className="text-xl mb-16">
          Experience artisanal coffee like never before.
        </p>
        <Link
          href="#"
          className="bg-neutral-900 text-slate-50 px-10 py-3 rounded-3xl mb-12 flex justify-center items-center gap-2 w-64 mx-auto hover:shadow-xl hover:border-slate-50 group transition-all"
        >
          View Location{" "}
          <HiArrowRight className="transition-all group-hover:translate-x-3" />
        </Link>
      </div>
    </motion.section>
  );
}
