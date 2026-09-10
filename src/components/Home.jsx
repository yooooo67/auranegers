import { APP_NAME, APP_TAGLINE, PHONE_HREF } from '../config.js'

export function CallButton({ className = '', children = 'DECIDI TU' }) {
  return (
    <a className={`call-btn ${className}`.trim()} href={PHONE_HREF}>
      <span aria-hidden="true">📞</span>
      {children}
    </a>
  )
}

export function Home({ onChoose, onOpenHistory }) {
  return (
    <div className="screen home">
      <header className="topbar">
        <span className="topbar__spacer" />
        <button className="icon-btn" type="button" onClick={onOpenHistory} aria-label="Cronologia">
          <HistoryIcon />
        </button>
      </header>

      <div className="home__hero">
        <p className="eyebrow">Per te, solo per te</p>
        <h1 className="home__title">{APP_NAME}</h1>
        <p className="home__tagline">{APP_TAGLINE}</p>
      </div>

      <div className="category-grid">
        <button className="category-card" type="button" onClick={() => onChoose('food')}>
          <span className="category-card__emoji" aria-hidden="true">🍝</span>
          <span className="category-card__label">Cosa mangiare</span>
        </button>
        <button className="category-card" type="button" onClick={() => onChoose('watch')}>
          <span className="category-card__emoji" aria-hidden="true">🎬</span>
          <span className="category-card__label">Cosa guardare</span>
        </button>
      </div>

      <CallButton className="call-btn--home" />
    </div>
  )
}

function HistoryIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
