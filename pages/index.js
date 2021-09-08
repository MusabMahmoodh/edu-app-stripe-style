import Head from "next/head";
// import Header from "@components/Header";
import Footer from "@components/Footer";
import Hero from "../sections/landing_page/Hero";
import LandinPageHeader from "../components/Header.LandingPage";
export default function Home() {
  return (
    <div>
      <LandinPageHeader />
      <Hero />
    </div>
  );
}
