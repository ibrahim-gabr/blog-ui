import React from "react";
import { GetServerSideProps } from "next";
import Client from "~/utils/Client";
import { FC } from "react";
import Image from "next/image";
import { Container } from "~/components/common/container";
import { Post } from "..";
import { useRouter } from "next/router";
import PostBody from "~/components/common/PostBody";
import NextLink from "~/components/common/NextLink";
import { NextSeo } from "next-seo";

export type StudiesPageProps = {
  studiesData: {
    posts: Post[];
  };
  loading: boolean;
};

const Studies: FC<StudiesPageProps> = ({ studiesData, loading }) => {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="الدراسات"
        description="Blog UI in Arabic using Nextjs Typescript | studies"
        additionalMetaTags={[
          { name: "keywords", content: "blog, nextjs , typescript" },
        ]}
        openGraph={{
          type: "website",
          url: "https://blog-ui-psi.vercel.app",
          title: "الدراسات",
          description: "Blog UI in Arabic using Nextjs Typescript | studies",
        }}
      />
      <Container>
        <header className="flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl">التقارير والدراسات</h1>
        </header>
        <div className="flex justify-center items-center flex-wrap gap-7 mt-4 py-4">
          {studiesData.posts &&
            studiesData.posts.map((post) => (
              <NextLink
                className="max-w-[343px] md:max-w-[370px] cursor-pointer"
                key={post.id}
                href={`/studies/${post.slug}`}
              >
                <div className="flex flex-col space-y-3">
                  <div className="relative flex justify-center h-[230px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <PostBody post={post} />
                </div>
              </NextLink>
            ))}
        </div>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  let loading = true;
  let studiesData = {
    posts: [],
  };
  try {
    let { data } = await Client.get("getStudiesData");
    studiesData = data;
    loading = false;
  } catch (error: any) {
    console.log(error?.response || error);
  }

  return {
    props: {
      loading,
      studiesData,
    },
  };
};

export default Studies;
