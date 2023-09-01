export default function LeftItem({ firstImage, secondImage }) {
  return (
    <ul className="left-ul col-6">
      <li className="left-item hidden-div">
        <div className="item-img">
          <img className="li-img" src={firstImage} alt="first"/>
        </div>
        <div className="item-text">
          <h4 className="item-header">UI & UX</h4>
          <p className="item-paragraph">
            Costruzione di siti web facili da usare, intuitivi e User-friendly.
          </p>
        </div>
      </li>
      <li className="left-item hidden-div">
        <div className="item-img">
          <img className="li-img" src={secondImage} alt="second"/>
        </div>
        <div className="item-text">
          <h4 className="item-header">Progettazione</h4>
          <p className="item-paragraph">
           Progettazione del design grafico e sviluppo di web app.
          </p>
        </div>
      </li>
    </ul>
  );
}
