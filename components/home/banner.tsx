import React from "react";
import Banner from "../common/banner";
import { FC } from "react";
import { Post } from "~/pages";
import { useRouter } from "next/router";

export type HomeBannerProps = {
  post: Banner;
};
type Banner = {
  id: number;
  image: string;
  content: Post;
};

const HomeBanner: FC<HomeBannerProps> = ({ post }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/studies/${post.content.slug}`)}>
      <Banner img={post.image} overlay="right">
        <div className="relative max-w-7xl mx-auto h-[260px] sm:h-[336px] px-4 sm:px-6 lg:px-8 flex flex-col items-start space-y-4  justify-center py-4">
          <div className="relative justify-start max-w-7xl  h-[264px] sm:h-[500px] px-4 sm:px-6 lg:px-8 flex items-end py-8">
            <div className="flex flex-col space-y-3">
              <span className="text-sm text-[#FAFAFA] border-r-2 border-theme-primary pr-2">
                {post.content.subcategory}
              </span>
              <span className="text-white text-xl">{post.content.title}</span>
              <p className="text-[#ECEEED] text-sm">{post.content.excerpt}</p>
              <p className="text-[#ECEEED] text-sm">
                بواسطه {post.content.author}
              </p>
            </div>
          </div>
        </div>
      </Banner>
    </div>
  );
};

export default HomeBanner;
