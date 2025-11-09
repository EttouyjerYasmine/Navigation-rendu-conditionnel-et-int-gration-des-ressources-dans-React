// App.js
import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Connexion from './Connexion'; 

function App() {
  return (
    <div>
       <h1 className="titre">Mon Application React</h1>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/apropos">À propos</Link> |{" "}
        <Link to="/connexion">Connexion</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </div>
  );
}

export default App;
