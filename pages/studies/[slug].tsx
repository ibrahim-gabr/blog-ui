import React from "react";
import Client from "~/utils/Client";
import { FC } from "react";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import ArticleHeader from "~/components/articles/header";
import { Post } from "..";
import { Container } from "~/components/common/container";
import ArticleTags from "~/components/articles/tags";
import ArticleComments from "~/components/articles/comments";
import FontControll from "~/components/articles/FontControll";
import { useAppSelector } from "~/app/hooks";

export type ArticleProps = {
  articleData: Post;
  loading: boolean;
};

const StudiesArticle: FC<ArticleProps> = ({ articleData, loading }) => {
  const postBody = articleData.body;

  const size = useAppSelector((state) => state.article.fontSize);

  return (
    <div>
      {!loading && <ArticleHeader article={articleData} />}
      <Container className="py-10 mt-10">
        {postBody?.mainImage && (
          <img
            className="w-full h-[195px] md:h-[428px] object-cover"
            src={postBody?.mainImage}
            alt={articleData?.title}
          />
        )}
        <FontControll />
        <div className="flex flex-col space-y-7">
          {postBody?.sections.map((section) => (
            <div key={section.id} className="flex flex-col space-y-7 ">
              <h2 className={`text-${size.title}`}>{section.title}</h2>

              {section?.image && (
                <img
                  className=" h-[195px] md:h-[534px] object-cover"
                  src={section?.image}
                  alt={articleData?.title}
                />
              )}

              <div className="flex flex-col space-y-3">
                {section.content.map((content, idx) => (
                  <p
                    className={`text-[#606564] text-${size.paragraph} font-normal`}
                    key={idx}
                  >
                    {content}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <ArticleTags tags={articleData.tags} />
          {postBody?.comments && !loading && (
            <ArticleComments comments={postBody?.comments} />
          )}
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
