import React from "react";
import { Post } from "~/pages";
import { FC } from "react";
import Image from "next/image";
import Overlay from "./overlay";
import { Author, Excerpt } from "./PostBody";
import NextLink from "./NextLink";
type Props = {
  post: Post;
};

export const CardOverlay: FC<Props> = ({ post }) => {
 
  return (
    <NextLink
      className="relative cursor-pointer"
      href={`/studies/${post.slug}`}
    >
      <div className="absolute inset-0">
        <Image
          src={post.image}
          width={340}
          height={250}
          alt={post.title}
          objectFit="cover"
          layout="fill"
        />
        <Overlay />
      </div>
      <div className="relative max-w-7xl mx-auto h-[250px] px-4 sm:px-6 lg:px-8 flex items-end py-4">
        <div className="flex flex-col justify-end">
          <h1 className="text-lg font-normal tracking-tight text-white">
            {post.subcategory}
          </h1>
          <Excerpt
            excerpt={post.excerpt}
            size="base"
            className="mt-2 max-w-3xl"
            color="theme-lily-white"
          />
          <Author
            author={post.author}
            color="theme-lily-white"
            size="sm"
            className="mt-2"
          />
        </div>
      </div>
    </NextLink>
  );
};
