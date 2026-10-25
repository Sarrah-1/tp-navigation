import { useState, useEffect } from 'react';

function Lectures() {
  const [livres, setLivres] = useState(() => {
    const sauvegarde = localStorage.getItem('mesLectures');
    return sauvegarde ? JSON.parse(sauvegarde) : [];
  });
  const [titre, setTitre] = useState('');
  const [filtre, setFiltre] = useState('tous');

  useEffect(() => {
    localStorage.setItem('mesLectures', JSON.stringify(livres));
  }, [livres]);

  const ajouter = (e) => {
    e.preventDefault();
    if (!titre.trim()) return;
    setLivres(prev => [...prev, { id: Date.now(), titre: titre.trim(), lu: false }]);
    setTitre('');
  };

  const basculer = (id) => {
    setLivres(prev => prev.map(l => (l.id === id ? { ...l, lu: !l.lu } : l)));
  };

  const supprimer = (id) => {
    setLivres(prev => prev.filter(l => l.id !== id));
  };

  const affiches = livres.filter(l => {
    if (filtre === 'lus') return l.lu;
    if (filtre === 'alire') return !l.lu;
    return true;
  });

  const nbLus = livres.filter(l => l.lu).length;

  return (
    <div>
      <h2>Mes lectures</h2>
      <form onSubmit={ajouter}>
        <input
          placeholder="Titre du livre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      <div>
        <button onClick={() => setFiltre('tous')}>Tous</button>
        <button onClick={() => setFiltre('alire')}>À lire</button>
        <button onClick={() => setFiltre('lus')}>Lus</button>
      </div>

      {affiches.length === 0 ? (
        <p>Aucun livre à afficher.</p>
      ) : (
        <ul>
          {affiches.map((l) => (
            <li key={l.id}>
              <span style={{ textDecoration: l.lu ? 'line-through' : 'none' }}>
                {l.titre}
              </span>
              <button onClick={() => basculer(l.id)}>
                {l.lu ? 'Marquer à lire' : 'Marquer lu'}
              </button>
              <button onClick={() => supprimer(l.id)}>X</button>
            </li>
          ))}
        </ul>
      )}

      {livres.length > 0 && (
        <p>
          {nbLus} livre(s) lu(s) sur {livres.length}
        </p>
      )}
    </div>
  );
}

export default Lectures;