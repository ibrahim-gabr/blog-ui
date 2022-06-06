import React from "react";
import { FC } from "react";
import { Comment } from "~/pages";
import { Container } from "../common/container";
import { GoClock } from "react-icons/go";
import cn from "classnames";
import CommentsForm from "./CommentsForm";

export type TagsProps = {
  comments: Comment[];
};

const ArticleComments: FC<TagsProps> = ({ comments }) => {
  return (
    <Container>
      <section className="flex flex-col space-y-5  py-5  ">
        <h2 className="flex justify-start border-theme-primary pr-4 border-r-2 text-lg">
          التعليقات
          <span className="mr-1">( {comments?.length} )</span>
        </h2>
        <div className="flex flex-col space-y-2.5">
          {comments?.map((comment, idx) => (
            <section
              key={comment.id}
              className={cn(
                "flex flex-col space-y-3 py-2.5",
                idx != 0 && "border-t-2 border-theme-light-gray"
              )}
            >
              <div className="flex justify-between items-center text-lg">
                <span>{comment?.name}</span>
                <div className="flex text-[#A0A8A7] items-center">
                  <span>
                    <GoClock className="w-6 h-6" />
                  </span>
                  <span className="mr-1 text-sm">منذ يوم</span>
                </div>
              </div>
              <span className="text-sm text-[#606564] leading-5">
                {comment?.content}
              </span>
            </section>
          ))}
        </div>
      </section>
      <div>
        <div className="flex justify-start border-theme-primary pr-4 border-r-2 text-lg">
          كن اول من يعلق
        </div>
        <CommentsForm />
      </div>
    </Container>
  );
};

export default ArticleComments;
