import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe('pk_live_51RknniCBwovzydBv3zzT4P8B5CSQCHGDK8Z2TBk20xEHErzjXiaBDOXFacVnz40sBiodvb2qOimhkS1aEE61Tt4b004TWSBuhL');

const products = [
  { id: 'prod_SgaUZdPzYWF9ow', name: 'Lite Package', price: 125 },
  { id: 'prod_SgaVr3wZSGHlji', name: 'Standard Package', price: 250 },
  { id: 'prod_SgaWkVWAwg0HoW', name: 'Premium Package', price: 600 },
];

export default function Purchase() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function handleBuy(productId) {
    setLoading(true);
    setErrorMsg(null);
    const stripe = await stripePromise;

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
      const data = await response.json();

      if (data.sessionId) {
        const result = await stripe.redirectToCheckout({ sessionId: data.sessionId });
        if (result.error) setErrorMsg(result.error.message);
      } else {
        setErrorMsg('Failed to create checkout session');
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
    setLoading(false);
  }

  return (
    <main style={{ padding: '2rem', color: '#000', backgroundColor: '#f5f0e6', minHeight: '80vh' }}>
      <h1>Purchase a Report</h1>

      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{
            flex: '1 1 250px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            backgroundColor: '#fff',
          }}>
            <h2>{product.name}</h2>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>£{product.price}</p>
            <button
              onClick={() => handleBuy(product.id)}
              disabled={loading}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Processing...' : 'Buy Now'}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
