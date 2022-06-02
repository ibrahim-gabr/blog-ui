import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Post } from "~/pages";
import Breadcrumbs from "../common/breadcrumb";
import { FC } from "react";
import moment from "moment";

export type ArticleHeaderProps = {
  article: Post;
};

const ArticleHeader: FC<ArticleHeaderProps> = ({ article }) => {
  const router = useRouter();
  const title = router.pathname.startsWith("studies")
    ? "الدرااسات"
    : "االمقالات";
  console.log(article);
  return (
    <div className="relative  ">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/images/article_header.png"
          alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto h-[260px] sm:h-[336px] px-4 sm:px-6 lg:px-8 flex flex-col items-start space-y-4  justify-center py-4">
        <Breadcrumbs title={title} />
        <div className="flex flex-col justify-end space-y-8">
          <h1 className="text-3xl md:text-5xl md:font-bold font-normal max-w-3xl tracking-tight text-[#ECEEED]  ">
            {article?.title}
          </h1>
          <p className="flex text-sm text-[#ECEEED]">
            <span>بواسطة / </span>
            <span className="mr-1">{article?.author}</span>
            <span className="mx-2">|</span>
            <span className="ml-2">منذ</span>
            <span>{moment(article?.created_at).format("DD/MM/YYYY")}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
