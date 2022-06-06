import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Post } from "~/pages";
import Breadcrumbs from "../common/breadcrumb";
import { FC } from "react";
import moment from "moment";
import Banner from "../common/banner";

export type ArticleHeaderProps = {
  article: Post;
};

const ArticleHeader: FC<ArticleHeaderProps> = ({ article }) => {
  const router = useRouter();
  const title = router.pathname.startsWith("studies")
    ? "الدرااسات"
    : "االمقالات";

  return (
    <Banner img="/images/article_header.jpg">
      <div className="relative max-w-7xl mx-auto h-[260px] sm:h-[336px] px-4 sm:px-6 lg:px-8 flex flex-col items-start space-y-4  justify-center py-4">
        <Breadcrumbs title={title} />
        <div className="flex flex-col justify-end space-y-8">
          <h1 className="text-3xl md:text-5xl md:font-bold font-normal max-w-3xl tracking-tight text-theme-lily-white  ">
            {article?.title}
          </h1>
          <p className="flex items-center text-sm text-theme-lily-white">
            <img
              className="inline-block h-8 w-8 rounded-full ml-2.5"
              src="/images/avatar.jpg"
              alt=""
            />
            <span>بواسطة / </span>
            <span className="mr-1">{article?.author}</span>
            <span className="mx-2">|</span>
            <span className="ml-2">منذ</span>
            <time>{moment(article?.created_at).format("DD/MM/YYYY")}</time>
          </p>
        </div>
      </div>
    </Banner>
  );
};

export default ArticleHeader;
