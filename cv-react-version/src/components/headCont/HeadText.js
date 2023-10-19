import GitHubLogo from "./GitHubLogo";
import React, { useEffect } from "react";

export default function HeadText({ name, image }) {
  useEffect(() => {
    const handleScroll = () => {
      const head = document.getElementById("head-content");
      const title = document.getElementById("title");
      const image = document.getElementById("hero-img1");
      const github = document.getElementById("github-logo");

      if (window.pageYOffset > 400) {
        /*** HEAD CLASS SWITCH ***/
        head.classList.remove("cont-head");
        head.classList.add("cont-head-modified");
        /*** TITLE CLASS SWITCH ***/
        title.classList.remove("title-div");
        title.classList.add("title-div-modified");
        /*** IMG CLASS SWITCH ***/
        image.classList.remove("head-img");
        image.classList.add("head-img-visible");
        /*** GITHUB CLASS SWITCH ***/
        github.classList.remove("github-class");
        github.classList.add("github-modified");
      } else {
        /*** HEAD CLASS SWITCH ***/
        head.classList.add("cont-head");
        head.classList.remove("cont-head-modified");
        /*** TITLE CLASS SWITCH ***/
        title.classList.remove("title-div-modified");
        title.classList.add("title-div");
        /*** IMG CLASS SWITCH ***/
        image.classList.remove("head-img-visible");
        image.classList.add("head-img");
        /*** GITHUB CLASS SWITCH ***/
        github.classList.remove("github-modified");
        github.classList.add("github-class");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div id="head-content" className="cont-head">
      <picture className="mx-auto rounded-full w-6/12 top-img">
        <img
          className="head-img"
          id="hero-img1"
          style={{
            height: "90px",
            width: "90px",
          }}
          src={image}
          alt="samurai"
        />
      </picture>
      <div id="title" className="title-div">
        <h1 id="title-text" className="title-text-class">
          {name}
        </h1>
      </div>
      <div id="github-logo" className="github-class">
        <GitHubLogo />
      </div>
    </div>
  );
}
