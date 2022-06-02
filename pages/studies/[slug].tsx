import React from "react";
import Client from "~/utils/Client";
import { FC } from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { IncomingMessage } from "http";

const StudiesArticle = () => {
  return <div>Article</div>;
};

interface Params extends IncomingMessage {
  slug: string;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  let loading = true;
  let articleData = {
    post: {},
  };
  try {
    let { data } = await Client.get("getPost");
    articleData = data;
    loading = false;
  } catch (error: any) {
    console.log(error?.response || error);
  }
  console.log(articleData);
  return {
    props: {
      loading,
      articleData,
    },
  };
};

export default StudiesArticle;
