import ListeTaches from './ListeTaches';
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';
import Notification from './Notification';
import ListeCourses from './ListeCourses';
import Galerie from './Galerie';

function Accueil() {
  const mesCourses = ['Pain', 'Lait', 'Beurre', 'Fruits'];
  return (
    <div>
      <h2>Page d’accueil</h2>
      <ListeTaches />
      <Logo />
      <LecteurAudio />
      <ListeTaches />
      <Notification />
      <ListeCourses items={mesCourses} />
      <Galerie />
    </div>
  );
}

export default Accueil;
