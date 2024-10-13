"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Slider() {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => (prevNumber >= 5 ? 1 : prevNumber + 1));
    }, 3000); // 3000 milliseconds = 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="lg:min-w-[35%] xl:max-w-1/2 mt-12">
      <AnimatePresence mode="popLayout">
        <motion.div
          className="relative"
          key={number}
          initial={{ opacity: 0.6, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.6, scale: 0.7 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={`/coffee-images/coffee-image-${number}.jpg`}
            width={300}
            height={500}
            alt="coffee image"
            className="mx-auto w-80 rounded-2xl aspect-square object-cover lg:w-96"
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
