import React from "react";
import SocialIcon from "../common/socialicon";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { FC } from "react";

export type TagsProps = {
  tags: string[];
};

const ArticleTags: FC<TagsProps> = ({ tags }) => {
  return (
    <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between items-center py-5 border-t-2 border-b-2 border-theme-light-gray ">
      {/* tags */}
      <div className="flex space-x-2 space-x-reverse justify-center sm:justify-start">
        {tags?.map((tag, idx) => (
          <span
            key={idx}
            className="flex w-24 h-7.5 justify-center items-center px-2 py-2.5 rounded-lg text-sm font-medium bg-[#F7F7F7] text-[#808686]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* social icos */}
      <div className="flex w-44  items-center justify-between  px-1">
        <SocialIcon>
          <FaFacebookF className="w-5 h-5" />
        </SocialIcon>
        <SocialIcon>
          <BsTwitter className="w-5 h-5" />
        </SocialIcon>
        <SocialIcon>
          <RiLinkedinFill className="w-5 h-5" />
        </SocialIcon>
      </div>
    </div>
  );
};

export default ArticleTags;
