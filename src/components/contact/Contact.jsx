import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  // const theme = useContext(ThemeContext);
  const darkMode = false // theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5gcgp2x",
        "template_v7eb2dl",
        formRef.current,
        "AI0EPLrxeNd9czmn7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Parlons de votre projet !</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              Seulement après un premier contact par mail.
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              mistralkriss hâte gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              44 Rue JJ Rousseau, 94120 Fontenay sous bois, France
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Une question ?</b> Contactez moi et voyons si mes compétences peuvent vous être utiles ?
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nom" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Sujet" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Adresse email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Votre message" name="message" />
            <input type="hidden" name="dest" value="Christian" />
            <button>Envoyer</button>
            {done && " Merci de votre message."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
