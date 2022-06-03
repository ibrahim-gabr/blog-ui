import React from "react";
import SocialIcon from "../common/socialicon";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { FC } from "react";
import { Comment } from "~/pages";
import { Container } from "../common/container";
import moment from "moment";
import "moment/locale/ar";

export type TagsProps = {
  comments: Comment[];
};

const ArticleComments: FC<TagsProps> = ({ comments }) => {
  return (
    <Container>
      <div className="flex flex-col space-y-3  py-5  ">
        <div className="flex justify-start border-theme-primary pr-4 border-r-2 text-lg">
          التعليقات
          <span>( {comments?.length} )</span>
        </div>
        <div>
          {comments?.map((comment) => (
            <div key={comment.id} className="flex flex-col space-y-3">
              <div className="flex justify-between text-lg">
                <span>
                {comment?.name}
                </span>
                <span>
                  {moment(comment?.createdAt).locale("ar-AR").fromNow()}{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ArticleComments;
