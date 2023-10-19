import { useEffect } from "react";
import BootstrapLang from "./BootstrapLang";
import TailwindLang from "./TailwindLang";
import SassLang from "./SassLang";

export default function CssLibrariesSection({ bootImg, tailImg, sassImg }) {
  useEffect(() => {
    const cssButton = document.getElementById("cssButton");
    const jsButton = document.getElementById("jsButton");
    const cssLibraries = document.getElementById("cssLibs");
    const handleClick = () => {
      if (cssLibraries.className === "cssLibraries") {
        cssButton.addEventListener("click", () => {
          cssLibraries.classList.remove("cssLibraries");
          cssLibraries.classList.add("cssLibsModified");
          jsButton.classList.remove("jsLibrariesHeader");
          jsButton.classList.add("jsButtonRemove");
          cssLibraries.scrollIntoView({ behavior: "smooth" });
        });
      }

      if (cssLibraries.className === "cssLibsModified") {
        cssButton.addEventListener("click", () => {
          cssLibraries.classList.remove("cssLibsModified");
          cssLibraries.classList.add("cssLibraries");
          jsButton.classList.remove("jsButtonRemove");
          jsButton.classList.add("jsLibrariesHeader");
        });
      }
    };

    cssButton.addEventListener("click", handleClick);

    return () => {
      cssButton.removeEventListener("click", handleClick);
    };
  });
  return (
    <>
      <div id="cssLibs" className="cssLibraries">
        <div className="bootstrap">
          <div className="bootstrapImgDiv">
            <img src={bootImg} alt="" className="bootstrapImg" />
          </div>
          <BootstrapLang />
        </div>
        <div className="tailwind">
          <div className="tailwindImgDiv">
            <img src={tailImg} alt="" className="tailwindImg" />
          </div>
          <TailwindLang />
        </div>
        <div className="sass">
          <div className="sassImgDiv">
            <img src={sassImg} alt="" className="sassImg" />
          </div>
          <SassLang />
        </div>
      </div>
    </>
  );
}
