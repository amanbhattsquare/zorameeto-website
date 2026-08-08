import { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "ZoraMeeto | Smart Social Networking for Serious Singles",
  description: "Meet verified singles and date with clear intention. ZoraMeeto is a safe Social Networking app for serious people.",
};

export default function Home() {
  return <HomePageClient />;
}
