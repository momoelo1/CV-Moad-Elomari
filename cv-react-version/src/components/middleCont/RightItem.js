export default function RightUItem({thirdImage, fourthImage}) {
  return (
    <ul className="right-ul col-6">
      <li className="right-item">
        <div className="item-img">
          <img className="li-img" src={thirdImage} alt="first" />
        </div>
        <div className="item-text">
          <h4 className="item-header">Lavoro in Team</h4>
          <p className="item-paragraph">
            Capacità di Lavorare a progetti che coinvolgono più persone.
          </p>
        </div>
      </li>
      <li className="right-item">
        <div className="item-img">
          <img className="li-img" src={fourthImage} alt="first" />
        </div>
        <div className="item-text">
          <h4 className="item-header">Testing</h4>
          <p className="item-paragraph">
            Testing dell'interfaccia, di compatibilità e prestazioni.
          </p>
        </div>
      </li>
    </ul>
  );
}
