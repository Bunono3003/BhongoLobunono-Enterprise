import designPreview from '../Design.png';

export default function Homepage() {
  const collections = [
    { name: 'Traditional Wear', tag: 'Heritage silhouettes', accent: 'Elegant' },
    { name: 'Formal Wear', tag: 'Modern tailoring', accent: 'Premium' },
    { name: 'School Uniforms', tag: 'Smart everyday staples', accent: 'Classic' },
    { name: 'Religious Clothing', tag: 'Cultural details', accent: 'Refined' },
  ];

  const styles = [
    { title: 'Moodboard match', text: 'Pick colors, fabrics, and occasions so the app suggests the best fit.' },
    { title: 'Sizing guide', text: 'Use our quick questionnaire to help customers choose measurements with confidence.' },
    { title: 'WhatsApp order flow', text: 'Send order summaries directly to the admin and keep the workflow simple.' },
  ];

  return (
    <main className="app-shell">
      <section className="app-frame">
        <header className="topbar">
          <div className="brand">
            <div className="logo-mark">BL</div>
            <div className="brand-copy">
              <h1>Bhongo Lobunono Enterprise</h1>
              <p>Custom fashion ordering experience</p>
            </div>
          </div>
          <nav className="nav-links">
            <span className="nav-pill">Collections</span>
            <span className="nav-pill">Style Match</span>
            <span className="nav-pill">Orders</span>
          </nav>
        </header>

        <section className="hero">
          <article className="panel">
            <p className="eyebrow">Design-led fashion app</p>
            <h2 className="hero-title">A polished, mobile-first ordering experience inspired by your design reference.</h2>
            <p className="hero-copy">
              Showcase traditional wear, formal pieces, school uniforms, and custom outfits in one elegant storefront. Customers can browse collections, save favourites, answer a style quiz, and send order requests with clarity.
            </p>
            <div className="cta-row">
              <a className="primary-btn" href="#collections">Explore designs</a>
              <a className="ghost-btn" href="#style-match">Start style quiz</a>
            </div>
            <div className="metric-grid">
              <div className="metric-card"><strong>12+</strong><span>Featured styles</span></div>
              <div className="metric-card"><strong>4</strong><span>Core categories</span></div>
              <div className="metric-card"><strong>1</strong><span>WhatsApp order flow</span></div>
            </div>
          </article>

          <article className="panel">
            <div className="design-card">
              <div className="design-visual">
                <img src={designPreview} alt="Design reference preview" className="design-image" />
              </div>
              <span className="design-chip">Design reference</span>
              <div className="design-meta">
                <strong>Traditional Shine Set</strong>
                <span className="design-price">R 1,250</span>
              </div>
              <p className="small-note">Elegant embroidery, breathable fabric, and a refined silhouette for occasions and celebrations.</p>
            </div>
          </article>
        </section>

        <section className="section-grid">
          <article className="panel" id="collections">
            <div className="section-head">
              <div>
                <h2>Collections</h2>
                <p>Curated clothing categories for every customer journey.</p>
              </div>
              <span className="design-chip">Updated weekly</span>
            </div>
            <div className="category-grid">
              {collections.map((item) => (
                <article key={item.name} className="category-card">
                  <strong>{item.name}</strong>
                  <span>{item.tag}</span>
                  <p>{item.accent} options with easy ordering and style guidance.</p>
                </article>
              ))}
            </div>
          </article>

          <article className="panel" id="style-match">
            <div className="section-head">
              <div>
                <h2>Style Match</h2>
                <p>Guide shoppers from inspiration to the right fit.</p>
              </div>
              <span className="design-chip">Quick quiz</span>
            </div>
            <div className="style-grid">
              {styles.map((item) => (
                <article key={item.title} className="style-card">
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="section-grid">
          <article className="panel">
            <div className="section-head">
              <div>
                <h2>Favourites</h2>
                <p>Save looks customers love and revisit them quickly.</p>
              </div>
              <span className="design-chip">Live wishlist</span>
            </div>
            <div className="fav-grid">
              <article className="fav-card">
                <strong>Modern Formal Set</strong>
                <p>Clean lines, fitted silhouette, suitable for events and interviews.</p>
              </article>
              <article className="fav-card">
                <strong>School Smart Combo</strong>
                <p>Comfort-first uniforms with a polished, consistent look.</p>
              </article>
            </div>
          </article>

          <article className="panel">
            <div className="section-head">
              <div>
                <h2>Order request</h2>
                <p>Capture the customer details for a fast admin follow-up.</p>
              </div>
              <span className="design-chip">WhatsApp ready</span>
            </div>
            <form className="order-box">
              <label>Full name<input type="text" placeholder="Jane Doe" /></label>
              <label>Phone number<input type="tel" placeholder="+27 82 123 4567" /></label>
              <label>Size<input type="text" placeholder="Medium" /></label>
              <label>Notes<textarea placeholder="Share fabric or measurement preferences." /></label>
              <a className="primary-btn" href="#">Send order request</a>
            </form>
          </article>
        </section>

        <p className="footer-note">This interface is ready for the design reference and can be expanded into a full shopping flow, favourites screen, and order submission logic.</p>
      </section>
    </main>
  );
}
