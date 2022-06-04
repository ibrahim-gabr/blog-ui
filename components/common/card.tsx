import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Post } from "~/pages";
import PostBody from "./PostBody";


type CardProps = {
  post: Post;
  children?: React.ReactNode;
};

const Card: FC<CardProps> = ({ post, children }) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col space-y-3 cursor-pointer"
      onClick={() => router.push(`/studies/${post.slug}`)}
    >
      <div className="relative flex justify-center h-[350px]">
        <Image
          src={post.image}
          alt={post.title}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <PostBody post={post} />
    </div>
  );
};

export default Card;
