import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ padding: '1rem', backgroundColor: '#282c34', color: 'white' }}>
        <h1>App Shell</h1>
      </header>
      <div style={{ display: 'flex', flex: 1 }}>
        <aside style={{ width: '200px', padding: '1rem', borderRight: '1px solid #ccc' }}>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/health">Health Check</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main style={{ flex: 1, padding: '1rem' }}>
          <Outlet />
        </main>
      </div>
      <footer style={{ padding: '1rem', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
        &copy; 2026 Shipyard Engineering
      </footer>
    </div>
  );
};

export default Layout;
