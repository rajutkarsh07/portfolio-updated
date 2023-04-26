import React from "react";
import "./OtherProjectCard.scss";
import { AiOutlineFolder, AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

const OtherProjectCard = () => {
  return (
    <div className="otherprojects">
      <AiOutlineFolder className="gradient__text icons" />

      <div className="description">
        <h3>Google News Clone</h3>
        <p>
          Social media platform exclusively designed for programmers, where
          users receive personalized problem recommendations based on their
          skill ratings and rankings.
        </p>
      </div>

      <div className="techstack">
        <span>react</span>
        <span>node</span>
        <span>firebase</span>
        <span>axios</span>
        <span>mongoDB</span>
      </div>

      <div className="links">
        <a href="https://github.com/rajutkarsh07" target="blank">
          <AiOutlineGithub className="icon" />
        </a>
        <a href="#">
          <BiLinkExternal className="icon" />
        </a>
      </div>
    </div>
  );
};

export default OtherProjectCard;
