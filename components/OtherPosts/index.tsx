import React from "react";
import { Post } from "~/pages";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import FeaturedPostBody from "../common/FeaturedPostBody";
import { Container } from "../common/container";
type Props = {
  posts: Post[];
};

const OtherPosts: FC<Props> = ({ posts }) => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-y-10 gap-x-7  py-4">
          {posts &&
            posts.slice(0, 4).map((post) => (
              <>
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
              </>
            ))}
        </div>
      </Container>
    </>
  );
};

export default OtherPosts;
