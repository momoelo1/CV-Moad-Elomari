import MiddleContentList from "./MiddleContentList";

export default function MiddleContent({
  firstImg,
  secondImg,
  thirdImg,
  fourthImg,
}) {
  return (
    <div className="blurred-section">
      <div className="blurred-section-header">
        <h2 className="blurred-text-header" style={{ color: "#8aa8ff" }}>
          Contesti Applicativi
        </h2>
        <p className="blurred-text-paragraph">
          Nei numerosi corsi frequentati ho acquisito le seguenti competenze
        </p>
      </div>
      <MiddleContentList
        firstImage={firstImg}
        secondImage={secondImg}
        thirdImage={thirdImg}
        fourthImage={fourthImg}
      />
    </div>
  );
}
