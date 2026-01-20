'use client';

import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ReviewsSection } from "@/components/ReviewsSection";
import { VehiclesSection } from "@/components/VehiclesSection";
import { OneDayTripSection } from "@/components/OneDayTripSection";
import { GallerySection } from "@/components/GallerySection";
import { FinalCTASection } from "@/components/FinalCTASection";


export default function Home() {


  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <VehiclesSection />
      <OneDayTripSection />
      <ReviewsSection />
      <GallerySection />
      <FinalCTASection />
    </div>
  );
}
