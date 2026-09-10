export function HistoryScreen({ items, onClose, onClear }) {
  return (
    <div className="history">
      <div className="history__panel">
        <header className="topbar">
          <button className="text-btn" type="button" onClick={onClose}>
            Chiudi
          </button>
          <h2 className="history__title">Cronologia</h2>
          <button className="text-btn" type="button" onClick={onClear} disabled={!items.length}>
            Cancella
          </button>
        </header>

        {items.length === 0 ? (
          <p className="history__empty">Ancora nessuna decisione.</p>
        ) : (
          <ul className="history__list">
            {items.map((item) => (
              <li key={item.id} className="history__item">
                <div>
                  <p className="history__choice">{item.winner}</p>
                  <p className="history__meta">
                    {item.categoryLabel} · {formatDate(item.timestamp)}
                  </p>
                </div>
                <span className="history__percent">{item.percent}%</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function formatDate(timestamp) {
  try {
    return new Intl.DateTimeFormat('it-IT', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(timestamp))
  } catch {
    return ''
  }
}
