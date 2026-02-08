import FeaturedTeachers from "@/components/HomePage/Featured/FeaturedTeachers";
import Hero from "@/components/HomePage/Hero";
import HowItWork from "@/components/HomePage/HowItWork/HowItWork";
import Sponsor from "@/components/HomePage/Sponsor";
import Subjects from "@/components/HomePage/Subjects";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";

export default function Home() {
  return (
    <div className=" min-h-screen font-sans flex flex-col gap-10 ">
      <Hero />
      <Sponsor />
      <Subjects />
      <HowItWork />
      <FeaturedTeachers />
      <WhyChooseUs />
    </div>
  );
}
