import HeadText from "./components/headCont/HeadText";
import IntroSect from "./components/introCont/IntroSect";
import MiddleContent from "./components/middleCont/MiddleContent";
import SamuraiImage from "./images/coding-samurai.svg";
import UiUx from "./images/ui&ux jap.gif";
import Project from "./images/Progettazione jap.gif";
import TeamWork from "./images/team-work jap.gif";
import Testing from "./images/Debug jap.gif";
import FooterContent from "./components/footContent/FooterContent";
import BootstrapLogo from "./images/bootstrap-logo.png";
import TailwindLogo from "./images/tailwind-logo.png";
import SassLogo from "./images/sass-logo.png";
import ReactLogo from "./images/react-logo.png";
import JQueryLogo from "./images/jQuery-logo.png";

const user = "Moad Elomari";

function App() {
  return (
    <div>
      <HeadText name={user} image={SamuraiImage} />
      <IntroSect image={SamuraiImage} />
      <MiddleContent
        firstImg={UiUx}
        secondImg={Project}
        thirdImg={TeamWork}
        fourthImg={Testing}
      />
      <FooterContent
        bsImage={BootstrapLogo}
        tailImage={TailwindLogo}
        sassImage={SassLogo}
        reactImage={ReactLogo}
        jQImage={JQueryLogo}
      />
    </div>
  );
}

export default App;
