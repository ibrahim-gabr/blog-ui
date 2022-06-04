import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { GetServerSideProps } from "next";
import Client from "../../utils/Client";
import { Post } from "..";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const prod_url = process.env.NEXT_PUBLIC_BASE_URL;
  const pagesData = await Client.get(`getStudiesData`);
  console.log(pagesData);
  const posts = pagesData.data.posts;

  const studiesFields: ISitemapField[] = posts.map((post: Post) => ({
    loc: `${prod_url}/studies/${post.slug}`,
    lastmod: new Date().toISOString(),
    // changefreq: 'daily',
    // priority: 0.7,
  }));

  return getServerSideSitemap(ctx, [...studiesFields]);
};

export default () => {};
