import type { GetStaticProps } from "next";
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

interface HomeProps {
  stars: number;
}

export default function Home({ stars }: HomeProps) {
  return (
    <Layout>
      <Hero stars={stars} />
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

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const res = await fetch(
      "https://api.github.com/repos/authorizerdev/authorizer",
      { headers: { Accept: "application/vnd.github+json" } }
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data = await res.json();
    const stars =
      typeof data.stargazers_count === "number" ? data.stargazers_count : 0;
    return { props: { stars }, revalidate: 3600 };
  } catch {
    return { props: { stars: 0 }, revalidate: 3600 };
  }
};
