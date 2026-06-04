import React, { useEffect, useState } from 'react';
import client from '../api/client';

const HealthCheck: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading');
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    client.get('/health')
      .then((response) => {
        setStatus('ok');
        setData(response.data);
      })
      .catch((error) => {
        console.error('Health check failed:', error);
        setStatus('error');
      });
  }, []);

  return (
    <div>
      <h2>Health Check</h2>
      {status === 'loading' && <p>Checking backend health...</p>}
      {status === 'ok' && (
        <div style={{ color: 'green' }}>
          <p>Backend is UP!</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      {status === 'error' && (
        <p style={{ color: 'red' }}>Backend is DOWN or unreachable.</p>
      )}
    </div>
  );
};

export default HealthCheck;
