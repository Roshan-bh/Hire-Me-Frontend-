import Image from "next/image";
import Head from "next/head";
import { Navbar } from "../components/navbar";
import { Banner } from "@/components/home/banner";
import { Joiners } from "@/components/home/Joiners";
import { Main } from "next/document";
import { PopularInternships } from "@/components/home/popularInternships";
import { FeaturedInternships } from "@/components/home/featuredInternships";
import { FeaturedJobs } from "@/components/home/featuredjobs";
import { UpcomingEvents } from "@/components/home/upcomingEvents";

export default function Home() {
  return (
    <main className="">
      <Head>
        <title>Hire Me</title>
        <meta name="discription" content="hireme.com" />
      </Head>
      <Banner />
      <Joiners />
      <PopularInternships />
      <FeaturedInternships />
      <FeaturedJobs />
      <UpcomingEvents />
    </main>
  );
}
