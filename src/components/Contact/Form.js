import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message envoyé !</p>";
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          formMess.innerHTML =
            "<p class='error'> Une erreur s'est produite, veuillez réessayer !</p>";
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label className="label-name">Name</label>
        <input
          className="form-name"
          type="text"
          name="name"
          required
          autoComplete="off"
        />
        <label className="label-email">Email</label>
        <input
          className="form-email"
          type="email"
          name="email"
          required
          autoComplee="off"
        />
        <label className="label-message" required>
          Message
        </label>
        <textarea className="form-mess" name="message" required />
        <input className="submit" type="submit" value="Envoyer" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default Form;
