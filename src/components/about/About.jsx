import "./about.css";
// import Award from "../../img/award.png";
import Hidding from "../../img/hidding.JPG"
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        {/* <div className="a-card bg"></div> */}
        <div className="a-card">
          <img
            src={Hidding}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">A mon propos</h1>
        <p className="a-sub">
          Informaticien passionné, curieux, j'observe l'évolution d'internet depuis des débuts en France.
        </p>
        <p className="a-desc">
          Une carrière d'administrateur d'abord, de développeur ensuite, ma soif d'apprendre m'a conduit à explorer de nombreux univers: l'informatique si vaste ( l'intelligence articicielle, le temps réel, le Web, la progammation de jeux), l'électronique, le matériel, la sécurité. Chacun de ces thèmes, est en soit un univers en éternelle évolution.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
