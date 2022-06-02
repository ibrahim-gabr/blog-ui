import React from "react";
import { Post } from "~/pages";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
type Props = {
  post: Post;
};

export const CardOverlay: FC<Props> = ({ post }) => {
  return (
    <div className="relative  ">
      <div className="absolute inset-0">
        <Image
          src={post.image}
          width={340}
          height={250}
          alt={post.title}
          objectFit="cover"
          layout="fill"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.23) 38.02%, rgba(29, 29, 29, 0.72) 64.06%, rgba(29, 29, 29, 0.95) 100%)",
          }}
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto h-[250px] px-4 sm:px-6 lg:px-8 flex items-end py-4">
        <div className="flex flex-col justify-end">
          <h1 className="text-lg  font-normal tracking-tight text-white  ">
            {post.subcategory}
          </h1>
          <p className="mt-2 text-base  text-[#ECEEED] max-w-3xl">
            {post.excerpt}
          </p>
          <p className="mt-2 text-sm  text-[#ECEEED] max-w-3xl">
            بواسطه {post.author}
          </p>
        </div>
      </div>
    </div>
  );
};