import "./Intro.css";
import Me from "../../img/me.jpg"

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="introSentence">Bonjour! Je suis</h2>
          <h1 className="introName">Christian Neveu !</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Enseignant en informatique</div>
              <div className="intro-title-item">Développeur Web FrontEnd</div>
              <div className="intro-title-item">Développeur Web BackEnd</div>
              <div className="intro-title-item">
                Expert en sécurité informatique
              </div>
              <div className="intro-title-item">Administrateur Unix</div>
            </div>
          </div>
          <div className="intro-description">
            Avec une vision très large de l'informatique, je construis, je
            transmets. Dans des entreprises de toute taille, j'ai pu
            apporter mes connaissances dans des contextes allant du studio au groupe de dimension internationale, dans
            des milieux industriels et contrôlés comme Renault ou Lactalis, artistiques (chez Yves Saint Laurent Haute Couture), et étudiants (Facultés et lycées).
            Partout, la qualité reste ma préoccupation première.
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="image-bg"></div>
        <img src={Me} alt="Mon portrait" className="intro-img-portrait" />
      </div>
    </div>
  );
};

export default Intro;
