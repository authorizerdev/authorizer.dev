import Architecture from "../components/Architecture";
import Contributors from "../components/Contributors";
import Database from "../components/Database";
import Features from "../components/Features";
import GettingStarted from "../components/GettingStarted";

import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonial";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <GettingStarted />
      <Features />
      <Database />
      <Testimonials />
      {/* <Contributors /> */}
    </Layout>
  );
}
