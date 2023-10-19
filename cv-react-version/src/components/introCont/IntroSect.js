export default function IntroSect({ image }) {
  return (
    <div className="intro">
      <h1 className="intro-head fw-bolder">Junior Web Developer</h1>
      <p className="intro-paragraph">
        Sviluppatore Web Junior con 1 anno di esperienza nella creazione di siti
        Web. Maturata conoscenza delle tecnologie Front-end{" "}
        <b className="bold-html">HTML5</b>,{" "}
        <b className="bold-css">CSS3</b> e{" "}
        <b className="bold-javascript">JAVASCRIPT</b>.
      </p>
      <picture className="middle-hero">
        <img
          className="mx-auto rounded-full w-6/12 middle-hero-img"
          src={image}
          alt="samurai"
        />
      </picture>
    </div>
  );
}
