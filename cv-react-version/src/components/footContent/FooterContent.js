import { useEffect } from "react";
import BootstrapLang from "./BootstrapLang";
import TailwindLang from "./TailwindLang";
import SassLang from "./SassLang";
import ReactLang from "./ReactLang";
import HtmlSectionLanguage from "./HtmlSectionLanguage";
import CssSection from "./CssSectionLanguage";
import JsSection from "./JsSectionLanguage";

export default function FooterContent({
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
}) {
  useEffect(() => {
    const progLangCont = document.getElementById("progLang");
    const htmlDiv = document.getElementById("html-language");
    const cssDiv = document.getElementById("css-language");
    const javascriptDiv = document.getElementById("javascript-language");
    const handleClick = () => {
      if (
        htmlDiv.className === "html-class-change" &&
        cssDiv.className === "css-class-change" &&
        javascriptDiv.className === "javascript-class-change"
      ) {
        progLangCont.classList.remove("programming-languages-container");
        progLangCont.classList.add("programming-languages-modifier");
      }

      if (
        htmlDiv.className === "html-language-button" &&
        cssDiv.className === "css-language-button" &&
        javascriptDiv.className === "javascript-class-change"
      ) {
        progLangCont.classList.remove("programming-languages-modifier");
        progLangCont.classList.add("programming-languages-container");
      }
    };

    htmlDiv.addEventListener("click", handleClick);
    cssDiv.addEventListener("click", handleClick);
    javascriptDiv.addEventListener("click", handleClick);
    return () => {
      htmlDiv.removeEventListener("click", handleClick);
      cssDiv.removeEventListener("click", handleClick);
      javascriptDiv.removeEventListener("click", handleClick);
    };
  });

  return (
    <div id="progLang" className="programming-languages-container">
      <h3 className="programming-languages-head">Skills</h3>
      <p className="programming-languages-info">
        (Eseguire un doppio su un linguaggio a scelta)
      </p>
      <div className="programming-languages-headers">
        <HtmlSectionLanguage />
        <CssSection />
        <JsSection />
      </div>
      <div id="languages" className="programming-languages-div">
        <div id="html-language" className="html">
          <div className="bootstrap">
            <div className="bootstrap-logo-div">
              <img
                className="bootstrap-img"
                src={firstImage}
                alt="Bootstrap-logo"
              />
            </div>
            <BootstrapLang />
          </div>
          <div className="tailwind">
            <div className="tailwind-logo-div">
              <img
                className="tailwind-img"
                src={secondImage}
                alt="Bootstrap-logo"
              />
            </div>
            <TailwindLang />
          </div>
        </div>
        <div id="css-language" className="css">
          <div className="sass">
            <div className="sass-logo-div">
              <img className="sass-img" src={thirdImage} alt="sass-logo" />
            </div>
            <SassLang />
          </div>
        </div>
        <div id="javascript-language" className="javascript">
          <div className="react">
            <div className="react-logo-div">
              <img
                className="react-img"
                src={fourthImage}
                alt="Bootstrap-logo"
              />
            </div>
            <ReactLang />
          </div>
        </div>
      </div>
    </div>
  );
}
