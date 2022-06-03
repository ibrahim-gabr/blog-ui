import React from "react";
import Banner from "../common/banner";
import { FC } from "react";
import { Post } from "~/pages";

export type HomeBannerProps = {
  post: Banner;
};
type Banner = {
  id: number;
  image: string;
  content: Post;
};

const HomeBanner: FC<HomeBannerProps> = ({ post }) => {
  return (
    <Banner img={post.image}>
      <div className="relative justify-start max-w-7xl  h-[264px] sm:h-[500px] px-4 sm:px-6 lg:px-8 flex items-end py-8">
        <div className="flex flex-col space-y-3">
          <span className="text-sm text-[#FAFAFA] border-r-2 border-theme-primary pr-2">
            {post.content.subcategory}
          </span>
          <span className="text-white text-xl">{post.content.title}</span>
          <p className="text-[#ECEEED] text-sm">{post.content.excerpt}</p>
          <p className="text-[#ECEEED] text-sm">بواسطه {post.content.author}</p>
        </div>
      </div>
    </Banner>
  );
};

export default HomeBanner;
