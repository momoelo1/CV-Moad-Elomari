import { useRef } from "react";
import { useEffect } from "react";
export default function CssSection() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const htmlLang = document.getElementById("html");
    const cssLang = document.getElementById("css");
    const javascriptLang = document.getElementById("javascript");
    const languageDiv = document.getElementById("css-language");
    const handleClick = () => {
      if (languageDiv.className === "css") {
        cssLang.addEventListener("click", () => {
          languageDiv.classList.remove("css");
          languageDiv.classList.add("css-class-change");
          htmlLang.classList.remove("html-language-button");
          htmlLang.classList.add("css-html-modify");
          javascriptLang.classList.remove("javascript-language-button");
          javascriptLang.classList.add("css-javascript-modify");
        });
      }

      if (languageDiv.className === "css-class-change") {
        cssLang.addEventListener("click", () => {
          languageDiv.classList.remove("css-class-change");
          languageDiv.classList.add("css");
          htmlLang.classList.remove("css-html-modify");
          htmlLang.classList.add("html-language-button");
          javascriptLang.classList.remove("css-javascript-modify");
          javascriptLang.classList.add("javascript-language-button");
        });
      }
    };

    cssLang.addEventListener("click", handleClick);
    return () => {
      cssLang.removeEventListener("click", handleClick);
    };
  });

  return (
    <button
      type="button"
      id="css"
      className="css-language-button"
      ref={ref}
      onClick={handleClick}
    >
      CSS
    </button>
  );
}
