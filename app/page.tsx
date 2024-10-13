import Faq from "@/components/faq";
import Featured from "@/components/featured";
import Foodmenu from "@/components/foodmenu";
import Foodshowcase from "@/components/foodshowcase";
import MainSection from "@/components/main-section";
import Promotion from "@/components/promotion";
import Reviews from "@/components/reviews";
import React from "react";

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto">
      <MainSection />
      <Featured />
      <Foodshowcase />
      <Foodmenu />
      <Faq />
      <Promotion />
      <Reviews />
    </main>
  );
}
