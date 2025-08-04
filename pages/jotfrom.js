
export default function Jotform() {
  return (
    <main style={{ padding: '2rem', color: '#000', backgroundColor: '#f5f0e6', minHeight: '80vh' }}>
      <h1>Contact & Feedback Form</h1>
      
      {/* Try the direct Jotform embed first */}
      <div style={{ marginTop: '2rem' }}>
        <iframe
          id="JotFormIFrame-251944073377059"
          title="Contact & Feedback Form"
          onLoad={() => window.parent.scrollTo(0,0)}
          allowTransparency="true"
          allowFullScreen="true"
          src="https://form.jotform.com/251944073377059"
          frameBorder="0"
          style={{
            minWidth: '100%',
            maxWidth: '100%',
            height: '700px',
            border: 'none',
          }}
          scrolling="no"
        >
        </iframe>
      </div>
      
      {/* Fallback link if iframe doesn't work */}
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <p>Form not loading? <a href="https://form.jotform.com/251944073377059" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc' }}>Open form in new tab</a></p>
      </div>
    </main>
  );
}
