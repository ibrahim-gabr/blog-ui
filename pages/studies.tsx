import React from "react";
import { GetServerSideProps } from "next";
import Client from "~/utils/Client";
import { FC } from "react";
import { Post } from ".";
import Image from "next/image";
import FeaturedPostBody from "~/components/common/FeaturedPostBody";
import { Container } from "~/components/common/container";

export type StudiesPageProps = {
  studiesData: {
    posts: Post[];
  };
  loading: boolean;
};

const Studies: FC<StudiesPageProps> = ({ studiesData, loading }) => {
  return (
    <Container>
      <div className="flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl">التقارير والدراسات</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-7 mt-4 py-4">
        {studiesData.posts &&
          studiesData.posts.map((post) => (
            <div className="max-w-[343px] md:max-w-[370px]" key={post.id}>
              <div className="flex flex-col space-y-3">
                <div className="relative flex justify-center h-[230px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <FeaturedPostBody post={post} />
              </div>
            </div>
          ))}
      </div>
    </Container>
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
  console.log(studiesData);
  return {
    props: {
      loading,
      studiesData,
    },
  };
};

export default Studies;
