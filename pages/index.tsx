import CompareAlternatives from "../components/CompareAlternatives";
import Database from "../components/Database";
import Faq from "../components/Faq";
import Features from "../components/Features";
import GettingStarted from "../components/GettingStarted";
import MarketPosition from "../components/MarketPosition";
import AiUseCase from "../components/AiUseCase";
import DeveloperApi from "../components/DeveloperApi";
import AppPreview from "../components/AppPreview";

import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonial";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AppPreview />
      <CompareAlternatives />
      <Features />
      <AiUseCase />
      <DeveloperApi />
      <Database />
      <MarketPosition />
      <Testimonials />
      <GettingStarted />
      <Faq />
    </Layout>
  );
}
