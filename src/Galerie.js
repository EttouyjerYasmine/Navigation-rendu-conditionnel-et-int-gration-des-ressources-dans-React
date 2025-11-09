import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';

function Galerie() {
  return (
    <div>
      <h3>Ma galerie</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        <img src={img1} alt="Photo 1" width="150" />
        <img src={img2} alt="Photo 2" width="150" />
        <img src={img3} alt="Photo 3" width="150" />
      </div>
    </div>
  );
}

export default Galerie;