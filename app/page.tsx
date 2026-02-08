import FeaturedTeachers from "@/components/HomePage/Featured/FeaturedTeachers";
import Footer from "@/components/HomePage/Footer";
import Hero from "@/components/HomePage/Hero";
import HowItWork from "@/components/HomePage/HowItWork/HowItWork";
import Ready from "@/components/HomePage/Ready";
import Sponsor from "@/components/HomePage/Sponsor";
import Subjects from "@/components/HomePage/Subjects";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col gap-10 ">
      <Hero />
      <Sponsor />
      <Subjects />
      <HowItWork />
      <FeaturedTeachers />
      <WhyChooseUs />
      <Ready />
      <Footer />
    </div>
  );
}
