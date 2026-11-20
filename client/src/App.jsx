import { useEffect, useState } from 'react';
import api from '@/services/api';

export default function App() {
  const [status, setStatus] = useState('checking');

  useEffect(() => {
    api
      .get('/health')
      .then(() => setStatus('connected'))
      .catch(() => setStatus('unreachable'));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cream px-6 text-center">
      <h1 className="text-5xl font-semibold tracking-tight text-charcoal">
        Oak <span className="text-oak">&amp;</span> Form
      </h1>
      <p className="text-stone">Modern craftsmanship, made to live in.</p>
      <p className="rounded-full border border-beige bg-sand px-4 py-1 text-sm">
        API status: <strong>{status}</strong>
      </p>
    </main>
  );
}