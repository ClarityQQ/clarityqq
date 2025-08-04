const pricingData = [
  {
    name: 'Lite Package',
    price: '£125',
    productId: 'prod_SgaUZdPzYWF9ow',
    features: [
      'For fast, early screening',
      'Price Range: 50-150',
      'Depth: High',
      'Key Sections: Summary, Problem/Solution Fit, Product, Risk Factors',
      'Expected Turnaround: 3-4 days',
      'Addons: £100',
      'Number of analysts: 2',
      'Priority Cost: £50',
      'Optional Call: -',
    ],
  },
  {
    name: 'Standard Package',
    price: '£250',
    productId: 'prod_SgaVr3wZSGHlji',
    features: [
      'For confident angel checks',
      'Price Range: 200-500',
      'Depth: Very High',
      'Key Sections: Summary, Problem/Solution Fit, Product, Risk Factors, Investment Ask, GTM Strategy',
      'Expected Turnaround: 5-7 days',
      'Addons: £75',
      'Number of analysts: 3',
      'Priority Cost: £75',
      'Optional Call: £75',
    ],
  },
  {
    name: 'Premium Package',
    price: '£600',
    productId: 'prod_SgaWkVWAwg0HoW',
    features: [
      'For syndicates and high-conviction investing',
      'Price Range: 600-1000',
      'Depth: Deep Dive',
      'Key Sections: Summary, Company Overview, Problem/Solution Fit, Product, Risk Factors/Red Flags, Investment Ask, GTM Strategy, Financials & Metrics, Overall Summary, Founding Team, Market Opportunity',
      'Expected Turnaround: 7-10 days',
      'Addons: -',
      'Number of analysts: Full team',
      'Priority Cost: £100',
      'Optional Call: Free',
    ],
  },
];

export default function Pricing() {
  return (
    <main style={{ padding: '2rem', color: '#000', backgroundColor: '#f5f0e6', minHeight: '80vh' }}>
      <h1>Pricing</h1>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        {pricingData.map(pkg => (
          <div key={pkg.name} style={{
            flex: '1 1 300px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            backgroundColor: '#fff',
          }}>
            <h2>{pkg.name}</h2>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{pkg.price}</p>
            <ul>
              {pkg.features.map((feature, idx) => (
                <li key={idx} style={{ marginBottom: '0.3rem' }}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
