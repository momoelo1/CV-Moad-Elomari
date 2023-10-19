import { useRef } from "react";
import CssLibraries from "./CssLibraries";
import JsLibraries from "./JsLibraries";

export default function FooterContent({
  bsImage,
  tailImage,
  sassImage,
  reactImage,
  jQImage,
}) {
  const cssButtonRef = useRef(null);
  const jsButtonRef = useRef(null);

  return (
    <div id="progLang" className="programmingLibraries">
      <h3 className="progLangHead">Skills</h3>
      <div className="buttons">
        <button
          onClick={() => {
            cssButtonRef.current.click();
          }}
          type="button"
          id="cssButton"
          className="cssLibrariesHeader"
          ref={cssButtonRef}
        >
          CSS
        </button>
        <button
          onClick={() => {
            jsButtonRef.current.click();
          }}
          type="button"
          id="jsButton"
          className="jsLibrariesHeader"
          ref={jsButtonRef}
        >
          JS
        </button>
      </div>
      <CssLibraries bootImg={bsImage} tailImg={tailImage} sassImg={sassImage} />
      <JsLibraries reactImg={reactImage} jQImg={jQImage} />
    </div>
  );
}
