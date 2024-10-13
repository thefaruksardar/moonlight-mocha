import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { SiUbereats, SiDoordash, SiGrubhub, SiPostmates } from "react-icons/si";

const icons = [
  { icon: React.createElement(FaXTwitter), name: "X (Twitter)" },
  { icon: React.createElement(SiDoordash), name: "SiDoordash" },
  { icon: React.createElement(SiUbereats), name: "Uber Eats" },
  { icon: React.createElement(SiGrubhub), name: " Grubhub" },
  { icon: React.createElement(SiPostmates), name: " Postmates" },
];
export default function Featured() {
  return (
    <section className="text-slate-50 my-24">
      <h2 className="text-2xl font-semibold text-center my-4">Fearured On:</h2>

      <div className="flex justify-center gap-3 px-3">
        {icons.map((item, index) => (
          <div
            key={index}
            className=" flex items-center gap-3 whitespace-nowrap bg-slate-50/10 px-5 py-4 rounded-md"
          >
            <span className="text-5xl">{item.icon}</span> {item.name}
          </div>
        ))}
      </div>
    </section>
  );
}
