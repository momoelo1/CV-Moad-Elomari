import { useRef } from "react";
import { useEffect } from "react";

export default function HtmlSectionLanguage() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const htmlLang = document.getElementById("html");
    const cssLang = document.getElementById("css");
    const javascriptLang = document.getElementById("javascript");
    const languageDiv = document.getElementById("html-language");
    const handleClick = () => {
      if (languageDiv.className === "html") {
        htmlLang.addEventListener("click", () => {
          languageDiv.classList.remove("html");
          languageDiv.classList.add("html-class-change");
          cssLang.classList.remove("css-language-button");
          cssLang.classList.add("html-css-modify");
          javascriptLang.classList.remove("javascript-language-button");
          javascriptLang.classList.add("html-javascript-modify");
        });
      }

      if (languageDiv.className === "html-class-change") {
        htmlLang.addEventListener("click", () => {
          languageDiv.classList.remove("html-class-change");
          languageDiv.classList.add("html");
          cssLang.classList.remove("html-css-modify");
          cssLang.classList.add("css-language-button");
          javascriptLang.classList.remove("html-javascript-modify");
          javascriptLang.classList.add("javascript-language-button");
        });
      }
    };

    htmlLang.addEventListener("click", handleClick);
    return () => {
      htmlLang.removeEventListener("click", handleClick);
    };
  });

  return (
    <button
      ref={ref}
      type="button"
      id="html"
      className="html-language-button"
      onClick={handleClick}
    >
      HTML
    </button>
  );
}
