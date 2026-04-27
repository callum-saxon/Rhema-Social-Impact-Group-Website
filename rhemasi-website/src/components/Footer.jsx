import { Link } from 'react-router-dom';
import { LogoMark } from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="rh-logo" style={{ marginBottom: 16 }}>
              <LogoMark size={42} />
              <div className="rh-logo__name">
                <b style={{ color: 'var(--gold)' }}>Rhema</b>
                <span style={{ color: 'rgba(239,232,218,0.6)' }}>Social Impact</span>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.65, margin: 0, maxWidth: '36ch' }}>
              Property refurbishment, ongoing maintenance and management for the
              supported-housing sector. Working alongside Dawson Housing Association
              (Registered Provider).
            </p>
          </div>

          <div>
            <h4>Sitemap</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/our-process">Our Process</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/property-atlas">Property Atlas</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Group</h4>
            <ul>
              <li><a href="https://elevatesl.co.uk" target="_blank" rel="noreferrer">Elevate Supported Living</a></li>
              <li><a href="https://impactig.co.uk" target="_blank" rel="noreferrer">Impact Investment Group</a></li>
              <li><a href="https://atlas.impactig.co.uk" target="_blank" rel="noreferrer">Property Atlas</a></li>
              <li><a href="https://dawsonha.co.uk" target="_blank" rel="noreferrer">Dawson Housing Association</a></li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:hello@rhemasi.co.uk">hello@rhemasi.co.uk</a></li>
              <li><a href="tel:+447539088373">+44 7539 088373</a></li>
              <li>North East &amp; East Midlands, UK</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Rhema Social Impact Group. All rights reserved.</span>
          <span>Part of the Rhema, Elevate &amp; Impact family · <Link to="/contact">Privacy &amp; Cookie Policies</Link></span>
        </div>
      </div>
    </footer>
  );
}
