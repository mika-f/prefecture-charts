import type { Metadata } from "next";

import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
  title: "都道府県別の人口推移グラフ",
};

export default function Home() {
  return <Layout />;
}
