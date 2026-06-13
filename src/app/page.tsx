import { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "ZoraMeeto | The Exclusive Dating Collective for High-Achievers",
  description: "Meet the elite and date with intention. ZoraMeeto is a precision-engineered dating network for the modern high-achiever.",
};

export default function Home() {
  return <HomePageClient />;
}