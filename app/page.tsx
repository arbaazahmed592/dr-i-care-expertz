import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingButtons from "@/components/FloatingButtons";
import About from "@/components/About";
import Services from "@/components/Services";
import DeviceDatabase from "@/components/DeviceDatabase";
import CostEstimator from "@/components/CostEstimator";
import BookRepairForm from "@/components/BookRepairForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import MapSection from "@/components/MapSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <FloatingButtons />
      <About />
      <Services />
      <DeviceDatabase />
      <CostEstimator />
      <BookRepairForm />
      <WhyChooseUs />
      <Testimonials />
      <MapSection />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
