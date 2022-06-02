import React from "react";
import { Post } from "~/pages";
import { Container } from "../common/container";
import MostReadHeader from "./header";
import { FC, useEffect, useState } from "react";
import FeaturedCard from "../common/FeaturedCard";
import { CardOverlay } from "../common/CardOverlay";
import CardSideImage from "../common/CardSideImage";

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

  return (
    <Container className="py-8">
      <MostReadHeader />
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6">
        {posts &&
          posts
            .slice(0, 3)
            .map((post) => <CardOverlay key={post.id} post={post} />)}
      </div>
      {featuredPost && <FeaturedCard post={featuredPost} />}
      <div className="flex flex-col space-y-6 mt-8">
        {posts &&
          posts
            .slice(4, 7)
            .map((post) => <CardSideImage key={post.id} post={post} />)}
      </div>
    </Container>
  );
};

export default MostRead;
