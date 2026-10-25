import { useState } from 'react';

function AdminPanel() {
  const [role, setRole] = useState('utilisateur');

  return (
    <div style={{ margin: '20px 0' }}>
      <h3>Rôle actuel : {role}</h3>
      <button onClick={() => setRole(role === 'admin' ? 'utilisateur' : 'admin')}>
        Changer de rôle
      </button>

      {role === 'admin' && (
        <div style={{ border: '2px solid #2c3e50', padding: '10px', marginTop: '10px' }}>
          <h4>Panneau d'administration</h4>
          <p>Cette zone est visible uniquement pour un administrateur.</p>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
