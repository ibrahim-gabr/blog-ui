import React from "react";
import { Post } from "~/pages";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import FeaturedPostBody from "../common/FeaturedPostBody";
import { Container } from "../common/container";
import FeaturedCard from "../common/FeaturedCard";
import CardSideImage from "../common/CardSideImage";
import cn from 'classnames';

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
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-y-10 gap-x-7  py-4">
          {posts &&
            posts.slice(0, 4).map((post) => (
              <>
                <div className="flex flex-col space-y-3" key={post.id}>
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
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-y-10 gap-x-4  py-8">
          <div className="flex flex-col space-y-5 md:col-span-1  ">
            {posts &&
              posts.slice(4, 7).map((post, i) => (
                <div
                  key={post.id}
                  className={cn('pt-3',i != 0 && 'border-t-2 border-theme-light-gray')}
                >
                  <FeaturedPostBody post={post} />
                </div>
              ))}
          </div>
          <div className="md:col-start-2 md:col-end-4 ">
            {featuredPost && <FeaturedCard post={featuredPost} />}
          </div>
        </div>
      </Container>
    </>
  );
};

export default OtherPosts;
