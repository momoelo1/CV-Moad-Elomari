import { useEffect } from "react";
import ReactLang from "./ReactLang";
import JQueryLang from "./JQueryLang";

export default function JsLibraries({ reactImg, jQImg }) {
  useEffect(() => {
    const jsButton = document.getElementById("jsButton");
    const cssButton = document.getElementById("cssButton")
    const jsLibraries = document.getElementById("jsLibs");
    const handleClick = () => {
      if (jsLibraries.className === "jsLibraries") {
        jsButton.addEventListener("click", () => {
          jsLibraries.classList.remove("jsLibraries");
          jsLibraries.classList.add("jsLibsModified");
          cssButton.classList.remove("cssLibrariesHeader");
          cssButton.classList.add("cssButtonRemove");
          jsLibraries.scrollIntoView({ behavior: "smooth" });
        });
      }

      if (jsLibraries.className === "jsLibsModified") {
        jsButton.addEventListener("click", () => {
          jsLibraries.classList.remove("jsLibsModified");
          jsLibraries.classList.add("jsLibraries");
          cssButton.classList.remove("cssButtonRemove");
          cssButton.classList.add("cssLibrariesHeader");
        });
      }
    };

    jsButton.addEventListener("click", handleClick);

    return () => {
      jsButton.removeEventListener("click", handleClick);
    };
  });
  return (
    <>
      <div id="jsLibs" className="jsLibraries">
        <div className="react">
          <div className="reactImgDiv">
            <img src={reactImg} alt="" className="reactImg" />
          </div>
          <ReactLang />
        </div>
        <div className="jQuery">
          <div className="jQueryImgDiv">
            <img src={jQImg} alt="" className="jQueryImg" />
          </div>
          <JQueryLang />
        </div>
      </div>
    </>
  );
}
