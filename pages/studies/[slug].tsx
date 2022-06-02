import React from "react";
import Client from "~/utils/Client";
import { FC } from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { IncomingMessage } from "http";
import ArticleHeader from "~/components/articles/header";
import { Post } from "..";
import { Container } from "~/components/common/container";

export type ArticleProps = {
  articleData: Post;
  loading: boolean;
};

const StudiesArticle: FC<ArticleProps> = ({ articleData, loading }) => {
  console.log(articleData);
  const postBody = articleData.body;
  return (
    <div>
      {!loading && <ArticleHeader article={articleData} />}
      <Container className="pt-10 mt-10">
        {postBody?.mainImage && (
          <img
            className="w-full h-[195px] md:h-[428px]"
            src={postBody?.mainImage}
            alt={articleData?.title}
          />
        )}
        <div className="flex flex-col space-y-3">
          {postBody?.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl sm:text-3xl">{section.title}</h2>
              <div className="flex flex-col space-y-3">
                {section.content.map((content) => (
                  <p key={content}>{content}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
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
