import Head from "next/head";
import { Showcase } from "../components/Showcase";
import { GetServerSideProps } from "next";
import Client from "~/utils/Client";
import { FC, useEffect, useState } from "react";
import MostRead from "~/components/MostRead";
import { NextSeo } from "next-seo";
import OtherPosts from "~/components/OtherPosts";
import Banner from "~/components/common/banner";
import HomeBanner from "~/components/home/banner";
import { useRouter } from "next/router";

import { MutatingDots } from "react-loader-spinner";

export interface Post {
  author: string;
  title: string;
  excerpt: string;
  category: string;
  subcategory: string;
  created_at: string;
  id: number;
  tags: string[];
  is_featured: boolean;
  image: string;
  slug: string;
  body?: {
    mainImage?: string;
    sections: Section[];
    comments?: Comment[];
  };
}
export interface Section {
  content: string[];
  title?: string;
  id: number;
  image?: string;
  tags: string[];
}
export interface Comment {
  id: number;
  name: string;
  content: string;
  createdAt: string;
}

export type HomePageProps = {
  homeData: {
    most_read: Post[];
    posts: Post[];
    banner: Banner;
    topBanner: Banner;
  };
};
export type Banner = {
  id: number;
  image: string;
  content: Post;
};
const Home: FC<HomePageProps> = ({ homeData }) => {
  return (
    <div>
      <NextSeo
        title="مدونه | Blog"
        description="Blog UI in Arabic using Nextjs Typescript"
        additionalMetaTags={[
          { name: "keywords", content: "blog, nextjs , typescript" },
        ]}
        openGraph={{
          type: "website",
          url: "https://blog-ui-psi.vercel.app",
          title: "مدونه | Blog",
          description: "Blog UI in Arabic using Nextjs Typescript",
        }}
      />

      <main>
        <Showcase banner={homeData.topBanner} />
        <MostRead posts={homeData.most_read} />
        <HomeBanner post={homeData.banner} />
        {/* other posts */}
        <OtherPosts posts={homeData.posts} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );

  let homeData = {
    most_read: [],
    posts: [],
    banner: {},
  };
  try {
    let { data } = await Client.get("getHomeData");
    homeData = data;
  } catch (error: any) {
    console.log(error?.response || error);
  }

  return {
    props: {
      homeData,
    },
  };
};

export default Home;
