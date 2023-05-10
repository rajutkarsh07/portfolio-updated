import React, { useState, useEffect } from "react";
import "./Footer.scss";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import cheerio from "cheerio";
import axios from "axios";

const Footer = () => {
  const [fork, setFork] = useState("");
  const [star, setStar] = useState("");

  useEffect(() => {
    axios.get(
      "https://github.com/rajutkarsh07/portfolio-updated",
      (err, res, html) => {
        if (!err && res.statusCode == 200) {
          const $ = cheerio.load(html);
          const forkData = $("#repo-network-counter");
          setFork(forkData.text());

          const starData = $("#repo-stars-counter-unstar");
          setStar(starData.text());
        }
      }
    );
  }, []);

  return (
    <a
      href="https://github.com/rajutkarsh07/portfolio-updated"
      target="_blank"
      className="footer"
    >
      <p>Designed & Built with 💖 by Utkarsh Raj</p>
      <p>
        <span>
          <AiOutlineStar className="icon" /> {star}
        </span>
        <span>
          <AiOutlineFork className="icon" /> {fork}
        </span>
      </p>
    </a>
  );
};

export default Footer;
