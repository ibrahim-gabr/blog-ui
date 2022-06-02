import React from "react";
import { Post } from "~/pages";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
type Props = {
  post: Post;
};
const FeaturedCard: FC<Props> = ({ post }) => {
  return (
    <div>
      <Image src={post.image} width={340} height={350} alt="post.title" />
    </div>
  );
};

export default FeaturedCard;
