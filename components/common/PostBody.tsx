import React from "react";
import { Post } from "~/pages";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import cn from "classNames";

type Props = {
  post: Post;
};

export const Author: FC<{
  author: string;
  size: string;
  className?: string;
  color?: string;
}> = ({ author, size, className, color }) => {
  return (
    <p
      className={cn(
        ` text-${size} ${className} `,
        color ? `text-${color}` : "text-theme-light-black"
      )}
    >
      بواسطه {author}
    </p>
  );
};

export const Excerpt: FC<{
  excerpt: string;
  size: string;
  className?: string;
  color?: string;
}> = ({ excerpt, size, className, color }) => {
  return (
    <p
      className={cn(
        ` text-${size} ${className} `,
        color ? `text-${color}` : "text-theme-gray"
      )}
    >
      {excerpt}
    </p>
  );
};
export const Title: FC<{
  title: string;
  size: string;
  className?: string;
  color?: string;
}> = ({ title, size, className, color }) => {
  return (
    <p
      className={cn(
        ` text-${size} ${className} `,
        color ? `text-${color}` : "text-theme-black"
      )}
    >
      {title}
    </p>
  );
};
export const SubCategory: FC<{
  subcategory: string;
  size: string;
  className?: string;
}> = ({ subcategory, size, className }) => {
  return (
    <p
      className={`text-theme-light-black border-r-2 border-theme-primary pr-2 text-${size} ${className} `}
    >
      {subcategory}
    </p>
  );
};

const PostBody: FC<Props> = ({ post }) => {
  return (
    <>
      <SubCategory subcategory={post.subcategory} size="sm" />
      <div className="flex flex-col space-y-3">
        <Title title={post.title} size="xl" />
        <Excerpt excerpt={post.excerpt} size="sm" />
        <Author author={post.author} size="sm" />
      </div>
    </>
  );
};

export default PostBody;
