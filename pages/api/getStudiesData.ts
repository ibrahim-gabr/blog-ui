// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Post } from "./getHomeData";
import { posts } from "./getHomeData";
const fs = require("fs");

type Data = {
  posts: Post[];
};

export default async function handler( // Generated by https://quicktype.io
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  res.status(200).json({ posts });
}
