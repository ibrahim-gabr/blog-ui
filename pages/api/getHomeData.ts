// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const fs = require("fs");

export const posts = [
  {
    author: "عبدالله عادل",
    title: " ما هو مستقبل التجارة الإلكترونية ",
    excerpt:
      "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    category: "التقارير والدراسات",
    subcategory: "أفكار البزنس",
    created_at: "2019-01-30T12:00:00.000Z",
    id: 1,
    tags: ["#تسويق", "#استراتيجيات", "#بيع المنتجات"],
    is_featured: false,
    image: "/images/posts/1.png",
    slug:"non-maiores-reiciendis"
  },
  {
    author: "عبدالله عادل",
    title: " ما هو مستقبل التجارة الإلكترونية ",
    excerpt:
      "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    category: "التقارير والدراسات",
    subcategory: "أفكار البزنس",
    created_at: "2019-01-30T12:00:00.000Z",
    id: 2,
    tags: ["#تسويق", "#استراتيجيات", "#بيع المنتجات"],
    is_featured: false,
    image: "/images/posts/2.png",
    slug:"consequatur-facilis-minus"
  },
  {
    author: "عبدالله عادل",
    title: " ما هو مستقبل التجارة الإلكترونية ",
    excerpt:
      "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    category: "التقارير والدراسات",
    subcategory: "أفكار البزنس",
    created_at: "2019-01-30T12:00:00.000Z",
    id: 3,
    tags: ["#تسويق", "#استراتيجيات", "#بيع المنتجات"],
    is_featured: false,
    image: "/images/posts/3.png",
    slug:"sequi-ut-reiciendis"
  },
  {
    author: "عبدالله عادل",
    title: " ما هو مستقبل التجارة الإلكترونية ",
    excerpt:
      "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    category: "التقارير والدراسات",
    subcategory: "أفكار البزنس",
    created_at: "2019-01-30T12:00:00.000Z",
    id: 4,
    tags: ["#تسويق", "#استراتيجيات", "#بيع المنتجات"],
    is_featured: false,
    image: "/images/posts/4.png",
    slug:"quos-fugiat-illo"
  },
  {
    author: "عبدالله عادل",
    title: " ما هو مستقبل التجارة الإلكترونية ",
    excerpt:
      "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    category: "التقارير والدراسات",
    subcategory: "أفكار البزنس",
    created_at: "2019-01-30T12:00:00.000Z",
    id: 5,
    tags: ["#تسويق", "#استراتيجيات", "#بيع المنتجات"],
    is_featured: false,
    image: "/images/posts/5.png",
    slug:"autem-aut-ut"
  },
  {
    author: "عبدالله عادل",
    title: " ما هو مستقبل التجارة الإلكترونية ",
    excerpt:
      "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    category: "التقارير والدراسات",
    subcategory: "أفكار البزنس",
    created_at: "2019-01-30T12:00:00.000Z",
    id: 6,
    tags: ["#تسويق", "#استراتيجيات", "#بيع المنتجات"],
    is_featured: false,
    image: "/images/posts/6.png",
    slug:"alias-facere-sapiente"
  },
  {
    author: "عبدالله عادل",
    title: " ما هو مستقبل التجارة الإلكترونية ",
    excerpt:
      "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    category: "التقارير والدراسات",
    subcategory: "أفكار البزنس",
    created_at: "2019-01-30T12:00:00.000Z",
    id: 7,
    tags: ["#تسويق", "#استراتيجيات", "#بيع المنتجات"],
    is_featured: false,
    image: "/images/posts/7.png",
    slug:"ipsum-consequatur-eos"
  },
  {
    author: "عبدالله عادل",
    title: " ما هو مستقبل التجارة الإلكترونية ",
    excerpt:
      "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    category: "التقارير والدراسات",
    subcategory: "أفكار البزنس",
    created_at: "2019-01-30T12:00:00.000Z",
    id: 8,
    tags: ["#تسويق", "#استراتيجيات", "#بيع المنتجات"],
    is_featured: false,
    image: "/images/posts/8.png",
    slug:"non-non-dignissimos"
  },
  {
    author: "عبدالله عادل",
    title: " ما هو مستقبل التجارة الإلكترونية ",
    excerpt:
      "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    category: "التقارير والدراسات",
    subcategory: "أفكار البزنس",
    created_at: "2019-01-30T12:00:00.000Z",
    id: 9,
    tags: ["#تسويق", "#استراتيجيات", "#بيع المنتجات"],
    is_featured: false,
    image: "/images/posts/9.png",
    slug:"voluptatem-impedit-ipsam"
  },
  {
    author: "عبدالله عادل",
    title: " ما هو مستقبل التجارة الإلكترونية ",
    excerpt:
      "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    category: "التقارير والدراسات",
    subcategory: "أفكار البزنس",
    created_at: "2019-01-30T12:00:00.000Z",
    id: 10,
    tags: ["#تسويق", "#استراتيجيات", "#بيع المنتجات"],
    is_featured: true,
    image: "/images/featured_post.png",
    slug:"dolorum-tempore-et"
  },
];

export interface Post {
  author: string;
  title: string;
  excerpt: string;
  category: string;
  subcategory: string;
  created_at: string;
  id: number;
  tags: string[];
  is_featured: boolean;
  image: string;
  slug:string
}

type Data = {
  most_read: Post[];
  posts: Post[];
};

export default async function handler( // Generated by https://quicktype.io
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  res.status(200).json({ most_read: posts, posts });
}
