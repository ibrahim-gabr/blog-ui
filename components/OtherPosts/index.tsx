import React from "react";
import { Post } from "~/pages";
import { FC, useEffect, useState } from "react";
import Image from "next/image";

import { Container } from "../common/container";
import cn from "classnames";
import Overlay from "../common/overlay";
import { useRouter } from "next/router";
import Card from "../common/card";
import PostBody from "../common/PostBody";

type Props = {
  posts: Post[];
};

const OtherPosts: FC<Props> = ({ posts }) => {
  const [featuredPost, setFeaturedPost] = useState<Post>();
  useEffect(() => {
    const featured = posts.find((post) => post.is_featured);
    if (featured) {
      setFeaturedPost(featured);
    }
  }, [posts]);
  const router = useRouter();
  return (
    <>
      <Container>
        <div className="relative grid grid-cols-1 md:grid-cols-4 mt-4 gap-y-10 gap-x-7  py-4 h-full">
          {posts &&
            posts.slice(0, 4).map((post) => (
              <>
                <Card post={post}>
                  <div className="relative flex justify-center h-[230px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <PostBody post={post} />
                </Card>
              </>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-y-10 gap-x-4  py-8">
          <div className="flex flex-col space-y-5 md:col-span-1">
            {posts &&
              posts.slice(4, 7).map((post, i) => (
                <div
                  key={post.id}
                  onClick={() => router.push(`/studies/${post.slug}`)}
                  className={cn(
                    "pt-3 cursor-pointer",
                    i != 0 && "border-t-2 border-theme-light-gray"
                  )}
                >
                  <PostBody post={post} />
                </div>
              ))}
          </div>
          <div className="md:col-start-2 md:col-end-4 h-[490px]">
            {featuredPost && (
              <div
                className="relative cursor-pointer"
                onClick={() => router.push(`/studies/${featuredPost.slug}`)}
              >
                <div className="absolute inset-0 flex justify-center h-[490px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    objectFit="cover"
                    layout="fill"
                  />
                  <Overlay />
                </div>
                <div className="relative max-w-7xl mx-auto h-[500px]  sm:h-[500px] px-4 sm:px-6 lg:px-8 flex items-end py-8">
                  <div className="flex flex-col space-y-3">
                    <span className="text-sm text-[#FAFAFA] border-r-2 border-theme-primary pr-2">
                      {featuredPost.subcategory}
                    </span>
                    <span className="text-white text-xl">
                      {featuredPost.title}
                    </span>
                    <p className="text-[#ECEEED] text-sm">
                      {featuredPost.excerpt}
                    </p>
                    <p className="text-[#ECEEED] text-sm">
                      بواسطه {featuredPost.author}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default OtherPosts;
