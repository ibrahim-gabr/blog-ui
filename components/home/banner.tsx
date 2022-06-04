import React from "react";
import Banner from "../common/banner";
import { FC } from "react";
import { Banner as HomeBanner } from "~/pages";
import { useRouter } from "next/router";
import { Author, Excerpt, Title } from "../common/PostBody";

export type HomeBannerProps = {
  post: HomeBanner;
};

const HomeBanner: FC<HomeBannerProps> = ({ post }) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push(`/studies/${post.content.slug}`)}
    >
      <Banner img={post.image} overlay="right">
        <div className="relative max-w-7xl mx-auto h-[260px] sm:h-[336px] px-4 sm:px-6 lg:px-8 flex flex-col items-start space-y-4  justify-center py-4">
          <div className="relative justify-start max-w-7xl  h-[264px] sm:h-[500px] px-4 sm:px-6 lg:px-8 flex items-end py-8">
            <div className="flex flex-col space-y-3">
              <span className="text-sm text-[#FAFAFA] border-r-2 border-theme-primary pr-2">
                {post.content.subcategory}
              </span>

              <Title title={post.content.title} size="xl" color="white" />
              <Excerpt
                excerpt={post.content.excerpt}
                size="sm"
                color="[#ECEEED]"
              />
              <Author
                author={post.content.author}
                size="sm"
                color="[#ECEEED]"
              />
            </div>
          </div>
        </div>
      </Banner>
    </div>
  );
};

export default HomeBanner;
