import { useEffect } from "react";
import LeftItem from "./LeftItem";
import RightItem from "./RightItem";

export default function MiddleContentList({
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
}) {
  useEffect(() => {
    const handleScroll = () => {
      const hiddenDivs = Array.from(document.querySelectorAll("li"));
      const scrollPosition = window.scrollY + window.innerHeight;

      hiddenDivs.forEach((hiddenDiv) => {
        if (scrollPosition >= 1200 && scrollPosition <= 2200) {
          hiddenDiv.classList.remove("hidden-div");
          hiddenDiv.classList.add("visible-div");
        } else {
          hiddenDiv.classList.remove("visible-div");
          hiddenDiv.classList.add("hidden-div");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="presentation row">
      <LeftItem firstImage={firstImage} secondImage={secondImage} />
      <RightItem thirdImage={thirdImage} fourthImage={fourthImage} />
    </div>
  );
}
