import Connexion from './Connexion';
import Notification from './Notification';
import ListeTaches from './ListeTaches';
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';
import AdminPanel from './AdminPanel';

function Accueil() {
  return (
    <div className="carte-conteneur">
      <h2>Tableau de bord principal</h2>
      <Logo />
      <Connexion />
      <Notification />
      <ListeTaches />
      <AdminPanel />
      <LecteurAudio />
    </div>
  );
}

export default Accueil;
