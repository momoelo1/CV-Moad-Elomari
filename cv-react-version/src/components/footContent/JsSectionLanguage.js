import { useRef } from "react";
import { useEffect } from "react";

export default function JsSection() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const htmlLang = document.getElementById("html");
    const cssLang = document.getElementById("css");
    const javascriptLang = document.getElementById("javascript");
    const languageDiv = document.getElementById("javascript-language");
    const handleClick = () => {
      if (languageDiv.className === "javascript") {
        javascriptLang.addEventListener("click", () => {
          languageDiv.classList.remove("javascript");
          languageDiv.classList.add("javascript-class-change");
          htmlLang.classList.remove("html-language-button");
          htmlLang.classList.add("javascript-html-modify");
          cssLang.classList.remove("css-language-button");
          cssLang.classList.add("javascript-css-modify");
        });
      }

      if (languageDiv.className === "javascript-class-change") {
        javascriptLang.addEventListener("click", () => {
          languageDiv.classList.remove("javascript-class-change");
          languageDiv.classList.add("javascript");
          htmlLang.classList.remove("javascript-html-modify");
          htmlLang.classList.add("html-language-button");
          cssLang.classList.remove("javascript-css-modify");
          cssLang.classList.add("css-language-button");
        });
      }
    };

    javascriptLang.addEventListener("click", handleClick);
    return () => {
      javascriptLang.removeEventListener("click", handleClick);
    };
  });

  return (
    <button
      id="javascript"
      className="javascript-language-button"
      ref={ref}
      onClick={handleClick}
    >
      JAVASCRIPT
    </button>
  );
}
