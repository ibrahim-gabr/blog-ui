import React from "react";
import { Post } from "~/pages";
import { Container } from "../common/container";
import MostReadHeader from "./header";
import { FC, useEffect, useState } from "react";
import { CardOverlay } from "../common/CardOverlay";

import Card from "../common/card";

type Props = {
  posts: Post[];
};

const MostRead: FC<Props> = ({ posts }) => {
  const [featuredPost, setFeaturedPost] = useState<Post>();
  useEffect(() => {
    const featured = posts.find((post) => post.is_featured);
    if (featured) {
      setFeaturedPost(featured);
    }
  }, [posts]);

  const havePosts = posts && posts.length > 0;

  return (
    <>
      {havePosts && (
        <Container className="pt-8 pb-4 sm:pb-8 sm:border-b-2 sm:border-theme-lily-white ">
          <MostReadHeader />
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6">
            {posts.slice(0, 3).map((post) => (
              <CardOverlay key={post.id} post={post} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-y-10 gap-x-4  py-8">
            {featuredPost && <Card post={featuredPost} />}
            <div className="flex flex-col space-y-5 ">
              {posts.slice(4, 7).map((post) => (
                <Card sideImage key={post.id} post={post} />
              ))}
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default MostRead;
