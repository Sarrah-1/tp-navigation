import { useState } from 'react';

function Contact() {
  const [nom, setNom] = useState('');
  const [message, setMessage] = useState('');
  const [envoye, setEnvoye] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom.trim() || !message.trim()) return;
    setEnvoye(true);
  };

  return (
    <div>
      <h2>Page Contact</h2>
      {envoye ? (
        <div>
          <p>Merci {nom}, votre message a bien été envoyé.</p>
          <button
            onClick={() => {
              setNom('');
              setMessage('');
              setEnvoye(false);
            }}
          >
            Nouveau message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Votre nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div>
            <textarea
              placeholder="Votre message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
