"use client";
import { desserts, drinks, main } from "@/utils/libs";
import { motion } from "framer-motion";

type FoodType = {
  name: string;
  price: string;
  description: string;
};
export default function Foodmenu() {
  return (
    <main className="text-slate-50 px-5 my-12">
      <h2 className="text-3xl text-slate-50 text-center">Best Dishes</h2>

      <div className="xl:grid xl:grid-cols-3 gap-6 xl:mt-10">
        <FoodMenuList food={drinks} name="- Drinks -" index={1} />
        <FoodMenuList food={main} name="- Main -" index={2} />
        <FoodMenuList food={desserts} name="- Desserts -" index={3} />
      </div>
    </main>
  );
}

const FoodMenuList = ({
  food,
  name,
  index,
}: {
  food: FoodType[];
  name: string;
  index: number;
}) => {
  return (
    <motion.div
      className={`relative mt-16 bg-neutral-800 px-8 py-8 rounded-3xl border-2 ${
        index % 2
          ? "xl:scale-90 border-neutral-950"
          : "xl:scale-105 border-2 border-yellow-500"
      }`}
      //   style={{
      //     clipPath:
      //       "polygon(0% 17%, 0 0, 82% 0%, 100% 8%, 100% 85%, 100% 100%, 20% 100%, 0% 93%)",
      //   }}

      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{
        once: true,
      }}
    >
      <div
        className={`absolute -top-[2.84rem] right-[50%] z-10 translate-x-[50%] text-xl  rounded-t-2xl px-8 py-2 border-t-2 border-x-2 ${
          index % 2
            ? "border-neutral-950 bg-neutral-950"
            : "border-yellow-500 bg-yellow-500 text-neutral-800 font-semibold"
        }`}
      >
        {name}
      </div>

      {food.map((i) => (
        <div className="mb-8" key={index}>
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-xl">{i.name}</h3>
            <span className="text-xl">{i.price}</span>
          </div>
          <p className="text-neutral-400">{i.description}</p>
        </div>
      ))}
    </motion.div>
  );
};
