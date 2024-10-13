import { reviewPerson } from "@/utils/libs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaGift, FaStar } from "react-icons/fa6";
import Slider from "./slider";

export default function MainSection() {
  return (
    <section className="lg:flex lg:justify-center gap-20 px-12">
      <div className="!text-slate-50 my-10 relative lg:max-w-[55%] ">
        <div className="absolute w-full translate-x-[50%] -left-[50%] -top-14 -z-10">
          <Image
            src="/bg.svg"
            alt="main background"
            height={200}
            width={200}
            className="w-full"
          />
        </div>
        <h1 className="font-extrabold text-4xl text-center leading-[2.9rem] lg:text-5xl lg:leading-[3.5rem]">
          Where Every Sip Shines Bright as the{" "}
          <span className="bg-neutral-100 text-neutral-900 px-2 rounded inline-block -rotate-2">
            Moonlight
          </span>
        </h1>
        <p className="text-center text-xl my-12 leading-8">
          Moonlight Mocha offers enchanting coffee and treats in a serene,
          moonlit ambiance. Relax and unwind with us.
        </p>
        <div>
          <Link
            href="#"
            className=" bg-slate-50 text-neutral-900 flex items-center gap-2 justify-center py-3 rounded-md group"
          >
            Order Now{" "}
            <FaArrowRight className="text-xl transition group-hover:translate-x-2" />
          </Link>
          <div>
            <p className="my-3 text-center">
              <span className="text-green-500 animate-pulse mr-2">
                <FaGift className="text-2xl mr-2 inline-block" /> $100 off
              </span>
              for the first 3000 customers (11 left)
            </p>
          </div>
        </div>
        <div className="lg:flex lg:items-center">
          <div className="flex justify-center items-center mt-16 mb-6 translate-x-[35px]">
            {reviewPerson.map((item, index) => (
              <Image
                key={index}
                src={item.img}
                alt={item.name}
                height={200}
                width={200}
                style={{ transform: `translateX(-${index * 18}px)` }}
                className="w-12 rounded-full border-[3px] border-slate-50"
              />
            ))}
          </div>
          <div className="flex flex-col items-center lg:mt-8 ">
            <div className="flex gap-1 my-2">
              {[...Array(5).keys()].map((i) => (
                <FaStar key={i} className="text-yellow-500 text-2xl" />
              ))}
            </div>
            <p>
              <span className="font-semibold">8349</span> happy reviews since
              day one.
            </p>
          </div>
        </div>
      </div>
      <Slider />
    </section>
  );
}
