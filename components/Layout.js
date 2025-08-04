import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
        <Link href="/"><a style={{ marginRight: 15 }}>Home</a></Link>
        <Link href="/about"><a style={{ marginRight: 15 }}>About</a></Link>
        <Link href="/pricing"><a style={{ marginRight: 15 }}>Pricing</a></Link>
        <Link href="/purchase"><a style={{ marginRight: 15 }}>Purchase</a></Link>
        <Link href="/jotform"><a>JotForm</a></Link>
      </nav>

      <main style={{ padding: '20px' }}>
        {children}
      </main>

      <footer style={{ textAlign: 'center', marginTop: 40, padding: 10, backgroundColor: '#f5f5f5' }}>
        <p>© 2025 ClarityQQ</p>
      </footer>
    </>
  );
}
