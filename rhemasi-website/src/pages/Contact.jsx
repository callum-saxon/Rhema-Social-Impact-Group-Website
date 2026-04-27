import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Replace with real form handler / API endpoint when going live.
    setSent(true);
  }

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="display">A property job to scope, or a partnership to build?</h1>
          <p className="lead" style={{ maxWidth: 720 }}>
            Tell us a little about it and we&rsquo;ll come back within one working day.
            For urgent reactive maintenance on a property we already manage,
            please call the line below.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'var(--s-7)', alignItems: 'flex-start' }}>
          <aside style={{ display: 'grid', gap: 16 }}>
            <div className="card">
              <Mail size={20} color="var(--primary)" style={{ marginBottom: 8 }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--primary)', margin: '0 0 4px' }}>Email</h3>
              <a href="mailto:hello@rhemasi.co.uk" style={{ color: 'var(--ink-soft)' }}>hello@rhemasi.co.uk</a>
            </div>
            <div className="card">
              <Phone size={20} color="var(--primary)" style={{ marginBottom: 8 }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--primary)', margin: '0 0 4px' }}>Phone / WhatsApp</h3>
              <a href="tel:+447539088373" style={{ color: 'var(--ink-soft)' }}>+44 7539 088373</a>
              <p style={{ fontSize: 13, color: 'var(--ink-mute)', margin: '8px 0 0' }}>
                Mon–Fri 8am–6pm. Out-of-hours emergency line for live tenants.
              </p>
            </div>
            <div className="card">
              <MapPin size={20} color="var(--primary)" style={{ marginBottom: 8 }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--primary)', margin: '0 0 4px' }}>Operating regions</h3>
              <p style={{ margin: 0, color: 'var(--ink-soft)', lineHeight: 1.6, fontSize: 14 }}>
                <b>North East UK</b> — Teesside, Tyneside, County Durham, Sunderland.<br />
                <b>East Midlands</b> — Nottinghamshire, Derbyshire.
              </p>
            </div>
            <div className="card">
              <Clock size={20} color="var(--primary)" style={{ marginBottom: 8 }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--primary)', margin: '0 0 4px' }}>Response time</h3>
              <p style={{ margin: 0, color: 'var(--ink-soft)', lineHeight: 1.6, fontSize: 14 }}>
                All enquiries answered by a real person within one working day. No bots, no funnels.
              </p>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="card" style={{ display: 'grid', gap: 16 }}>
            {sent ? (
              <div style={{ padding: 24, textAlign: 'center' }}>
                <CheckCircle2 size={48} color="var(--gold-dark)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--primary)', margin: '0 0 8px', fontWeight: 600 }}>
                  Thank you.
                </h3>
                <p style={{ color: 'var(--ink-soft)', margin: 0 }}>
                  We&rsquo;ve received your message and will respond within one working day.
                </p>
              </div>
            ) : (
              <>
                <div className="grid-2" style={{ gap: 16 }}>
                  <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" required /></div>
                  <div className="field"><label htmlFor="org">Organisation</label><input id="org" name="org" /></div>
                </div>
                <div className="grid-2" style={{ gap: 16 }}>
                  <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required /></div>
                  <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" /></div>
                </div>
                <div className="field">
                  <label htmlFor="kind">Enquiry type</label>
                  <select id="kind" name="kind">
                    <option>Refurb scope (single property)</option>
                    <option>Portfolio management partnership</option>
                    <option>Local Authority commissioning enquiry</option>
                    <option>Trade — interested in subcontracting to Rhema</option>
                    <option>Registered Provider — partnership enquiry</option>
                    <option>Property Atlas — platform demo</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="msg">Message</label>
                  <textarea id="msg" name="msg" rows="5" placeholder="Tell us a little about the property or the partnership…" required />
                </div>
                <button className="btn btn--primary" type="submit" style={{ justifyContent: 'center' }}>
                  Send message <Send size={16} />
                </button>
                <p style={{ fontSize: 12, color: 'var(--ink-mute)', margin: 0 }}>
                  By sending, you agree to be contacted at the email/phone above.
                  We never sell or share your details.
                </p>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
