import Head from "next/head";
// import Header from "@components/Header";
import Footer from "@components/Footer";
import Hero from "../sections/landing_page/Hero";
import Features from "../sections/landing_page/Features";
import Blogs from "sections/landing_page/Blogs";
export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Blogs />
    </div>
  );
}
