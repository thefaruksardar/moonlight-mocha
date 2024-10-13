import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const social = [
  { platform: React.createElement(MdMailOutline), url: "#" },
  { platform: React.createElement(FaTiktok), url: "#" },
  { platform: React.createElement(FaTwitter), url: "#" },
  { platform: React.createElement(FaInstagram), url: "#" },
];

const links = [
  { name: "Terms of services", url: "#" },
  { name: "Privacy policy", url: "#" },
  { name: "Disclaimer", url: "#" },
  { name: "Licenses", url: "#" },
];

export default function Footer() {
  return (
    <footer className="text-neutral-200  mt-16 bg-neutral-950 ">
      <div className="py-12 px-8 flex flex-col gap-16 md:flex-row md:justify-around">
        <div>
          <div className="text-sm mb-6">
            <h3 className="flex items-center gap-2 mb-4">
              <Image
                src="/coffee-mug.svg"
                alt="Moonlight Mocha"
                title="Moonlight Mocha"
                width={200}
                height={200}
                className="w-9"
              />
              <span className="!text-2xl font-bold">Moonlight Mocha</span>
            </h3>
            <p>Where Every Sip Shines Bright as the Moonlight</p>
          </div>
          <div className="flex items-center gap-3">
            {social.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className={`text-2xl transition-all text-neutral-50 p-2 bg-neutral-950 rounded-xl border-4 border-neutral-800/70 hover:shadow hover:shadow-neutral-400  ${
                  index === 0
                    ? "bg-neutral-50 text-neutral-50 flex items-center gap-1"
                    : ""
                }`}
              >
                {item.platform}{" "}
                {index === 0 && (
                  <span className="text-neutral-50 text-lg px-3">Contact</span>
                )}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl mb-4">LINKS</h3>

          <div className="flex flex-col gap-3 text-neutral-500">
            {links.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className="transition-all hover:text-neutral-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-700 py-12 px-8 text-center ">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="underline">
            Moonlight Mocha
          </Link>{" "}
          - All rights reserved
        </p>
      </div>
    </footer>
  );
}
