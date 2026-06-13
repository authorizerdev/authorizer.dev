import CompareAlternatives from "../components/CompareAlternatives";
import Database from "../components/Database";
import Faq from "../components/Faq";
import Features from "../components/Features";
import GettingStarted from "../components/GettingStarted";
import MarketPosition from "../components/MarketPosition";

import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonial";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CompareAlternatives />
      <MarketPosition />
      <GettingStarted />
      <Features />
      <Database />
      <Testimonials />
      <Faq />
      {/* <Contributors /> */}
    </Layout>
  );
}
