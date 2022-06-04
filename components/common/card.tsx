import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Post } from "~/pages";
import NextLink from "./NextLink";
import PostBody, { Author, Excerpt, SubCategory, Title } from "./PostBody";

type CardProps = {
  post: Post;
  children?: React.ReactNode;
  sideImage?: boolean;
};

const Card: FC<CardProps> = ({ post, children, sideImage }) => {
  const router = useRouter();
  return (
    <>
      {sideImage ? (
        <NextLink
          className="relative flex items-center cursor-pointer"
          href={`/studies/${post.slug}`}
        >
          <div className="relative w-[150px] h-[150px] ">
            <Image
              layout="fill"
              objectFit="cover"
              src={post.image}
              alt={post.title}
            />
          </div>
          <div className="flex flex-col space-y-3 mr-4">
            <SubCategory subcategory={post.subcategory} size="xs" />
            <Title title={post.title} size="sm" />
            <Excerpt
              excerpt={post.excerpt}
              className="max-w-[220px]"
              size="sm"
            />
            <Author author={post.author} size="xs" />
          </div>
        </NextLink>
      ) : (
        <NextLink
          className="flex flex-col space-y-3 cursor-pointer"
          href={`/studies/${post.slug}`}
        >
          <div className="relative h-[350px]">
            <Image
              src={post.image}
              alt={post.title}
              objectFit="cover"
              layout="fill"
            />
          </div>
          <PostBody post={post} />
        </NextLink>
      )}
    </>
  );
};

export default Card;
