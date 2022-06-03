import Head from "next/head";
import { Showcase } from "../components/Showcase";
import { GetServerSideProps } from "next";
import Client from "~/utils/Client";
import { FC } from "react";
import MostRead from "~/components/MostRead";
import { NextSeo } from "next-seo";
import OtherPosts from "~/components/OtherPosts";
import Banner from "~/components/common/banner";
import FeaturedPostBody from "~/components/common/FeaturedPostBody";
import HomeBanner from "~/components/home/banner";
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
  };
  loading: boolean;
};
export type Banner = {
  id: number;
  image: string;
  content: Post;
};
const Home: FC<HomePageProps> = ({ homeData, loading }) => {
  console.log("loading", loading);
  return (
    <div>
      <Head>
        <title>Blog UI</title>
        <meta
          name="description"
          content="Blog UI in Arabic using Nextjs Typescript"
        />
      </Head>
      <NextSeo
        title="Blog UI"
        description="Blog UI in Arabic using Nextjs Typescript"
        additionalMetaTags={[
          { name: "keywords", content: "blog, nextjs , typescript" },
        ]}
        openGraph={{
          type: "website",
          url: "https://blog-ui-psi.vercel.app",
          title: "Blog UI",
          description: "Blog UI in Arabic using Nextjs Typescript",
        }}
      />
      <main>
        <Showcase />
        <MostRead posts={homeData.most_read} />
        <HomeBanner post={homeData.banner} />
        {/* other posts */}
        <OtherPosts posts={homeData.posts} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  let loading = true;
  let homeData = {
    most_read: [],
    posts: [],
    banner: {},
  };
  try {
    let { data } = await Client.get("getHomeData");
    homeData = data;
    loading = false;
  } catch (error: any) {
    console.log(error?.response || error);
  }

  return {
    props: {
      loading,
      homeData,
    },
  };
};

export default Home;
