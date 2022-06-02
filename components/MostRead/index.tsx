import React from "react";
import { Post } from "~/pages";
import { Container } from "../common/container";
import MostReadHeader from "./header";
import { FC, useEffect, useState } from "react";
import FeaturedCard from "../common/FeaturedCard";

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
      {featuredPost && <FeaturedCard post={featuredPost} />}
    </Container>
  );
};

export default MostRead;
