"use client";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { foodShowCases } from "@/utils/libs";
import Image from "next/image";

export default function Carousel() {
  let [index, setIndex] = useState(0);

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        if (index > 0) {
          setIndex(index - 1);
        }
      } else if (e.key === "ArrowRight") {
        if (index < foodShowCases.length - 1) {
          setIndex(index + 1);
        }
      }
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [index]);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="flex h-full flex-col justify-between md:mx-6 xl:max-w-7xl lg:mx-auto">
        <h2 className="text-3xl text-slate-50 text-center">
          Top 6 Must-Try Delicacies:
        </h2>
        <div className="relative mt-6 overflow-hidden md:mt-10">
          <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
            {foodShowCases.map((image, i) => (
              <motion.img
                key={image.img}
                src={image.img}
                animate={{ opacity: i === index ? 1 : 0.3 }}
                className="aspect-[1.85] h-screen max-h-[70vh] w-full flex-shrink-0 object-cover"
              />
            ))}
          </motion.div>

          <AnimatePresence initial={false}>
            {index > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whileHover={{ opacity: 1 }}
                className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                onClick={() => setIndex(index - 1)}
              >
                <HiChevronLeft className="h-6 w-6 text-black" />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {index + 1 < foodShowCases.length && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whileHover={{ opacity: 1 }}
                className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                onClick={() => setIndex(index + 1)}
              >
                <HiChevronRight className="h-6 w-6 text-black" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <Thumbnails index={index} setIndex={setIndex} />
      </div>
    </MotionConfig>
  );
}

const COLLAPSED_ASPECT_RATIO = 1 / 3;
const FULL_ASPECT_RATIO = 3 / 5;
const MARGIN = 12;
const GAP = 2;

function Thumbnails({
  index,
  setIndex,
}: {
  index: number;
  setIndex: (value: number) => void;
}) {
  return (
    <div className="mb-6 flex h-20 justify-center overflow-hidden">
      <motion.div
        initial={false}
        animate={{
          x: `-${
            index * 100 * (COLLAPSED_ASPECT_RATIO / FULL_ASPECT_RATIO) +
            MARGIN +
            index * GAP
          }%`,
        }}
        style={{
          aspectRatio: FULL_ASPECT_RATIO,
          gap: `${GAP}%`,
        }}
        className="flex min-w-0"
      >
        {foodShowCases.map((image, i) => (
          <motion.button
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? "active" : "inactive"}
            variants={{
              active: {
                aspectRatio: FULL_ASPECT_RATIO,
                marginLeft: `${MARGIN}%`,
                marginRight: `${MARGIN}%`,
              },
              inactive: {
                aspectRatio: COLLAPSED_ASPECT_RATIO,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            className={`${
              i === index ? "" : "grayscale hover:grayscale-0"
            } h-full shrink-0 transition will-change-[filter]`}
            key={image.img}
          >
            <Image
              quality={90}
              priority
              height={1000}
              width={1000}
              src={image.img}
              className="h-full object-cover"
              alt={image.img}
            />
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
