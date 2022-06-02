import React from "react";
import Client from "~/utils/Client";
import { FC } from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { IncomingMessage } from "http";
import ArticleHeader from "~/components/articles/header";
import { Post } from "..";

export type ArticleProps = {
  articleData: Post;
  loading: boolean;
};

const StudiesArticle: FC<ArticleProps> = ({ articleData, loading }) => {
  console.log(articleData);
  return <div>{!loading && <ArticleHeader article={articleData} />}</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params as ParsedUrlQuery;

  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  let loading = true;
  let articleData = {
    content: {
      post: {},
    },
  };
  try {
    let { data } = await Client.get("getPost?slug=" + slug);
    articleData = data;
    loading = false;
  } catch (error: any) {
    console.log(error?.response || error);
  }

  return {
    props: {
      loading,
      articleData: articleData.content,
    },
  };
};

export default StudiesArticle;
