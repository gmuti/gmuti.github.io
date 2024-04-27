import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ny6sjvm', 'template_za8npis', form.current, 'SlzNwR-ng2-nl18iH')
      .then(
        (result) => {
          console.log('E-mail envoyé avec succès:', result.text);
        },
        (error) => {
          console.error('Erreur lors de l\'envoi de l\'e-mail:', error.text);
        },
      );
    
    // Réinitialiser les champs du formulaire après soumission
    form.current.reset();
  };

  return (
    <div className='contact'>
        <table>
            <tr>
                <td>
                    <div className="mes-photo">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>
                </td>

                <td>
                    <div className="contact-container">
                        <h2>Me contacter</h2>
                        <form ref={form} onSubmit={sendEmail} className="contact-form">
                            <input
                              type="text"
                              name="user_name"
                              placeholder="Nom"
                              className="form-input"
                            />
                            <input
                              type="email"
                              name="user_email"
                              placeholder="Email"
                              className="form-input"
                            />
                            <textarea
                              name="message"
                              placeholder="Message"
                              className="form-textarea"
                            />
                            <button type="submit" className="form-button">
                              Envoyer
                            </button>
                        </form>
                    </div>
                </td>
            </tr>
        </table>
    </div>
  );
};

export default Contact;
