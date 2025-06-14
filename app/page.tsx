import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { PackagesSection } from "@/components/landing/packages-section";
import { WhyChooseUsSection } from "@/components/landing/why-choose-us-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { ContactSection } from "@/components/landing/contact-section";
import { Footer } from "@/components/landing/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Khazanah Tours Jakarta - Paket Wisata Terbaik di Jakarta | Tour & Travel",
  description:
    "Khazanah Tours Jakarta menawarkan paket wisata terlengkap di Jakarta dan sekitarnya. Wisata budaya, kuliner, sejarah dengan harga terjangkau. Booking sekarang!",
  keywords: [
    "wisata jakarta",
    "tour jakarta",
    "paket wisata murah",
    "travel agent jakarta",
    "wisata kota tua",
    "wisata monas",
    "tour guide jakarta",
  ],
  openGraph: {
    title: "Khazanah Tours Jakarta - Paket Wisata Terbaik di Jakarta",
    description:
      "Khazanah Tours Jakarta menawarkan paket wisata terlengkap di Jakarta dan sekitarnya. Wisata budaya, kuliner, sejarah dengan harga terjangkau.",
    type: "website",
    url: "https://khazzanahtoursjakarta.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PackagesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
