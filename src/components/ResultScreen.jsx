import { CallButton } from './Home.jsx'

export function ResultScreen({ results, onAgain, onHome }) {
  const [winner, second, third] = results

  return (
    <div className="screen result">
      <header className="topbar">
        <button className="text-btn" type="button" onClick={onHome}>
          Home
        </button>
      </header>

      <p className="result__kicker">HO DECISO.</p>
      <h2 className="result__winner">{winner.label}</h2>
      <p className="result__percent">{winner.percent}%</p>

      <div className="result__others">
        {second && (
          <div className="result__row">
            <span>{second.label}</span>
            <strong>{second.percent}%</strong>
          </div>
        )}
        {third && (
          <div className="result__row">
            <span>{third.label}</span>
            <strong>{third.percent}%</strong>
          </div>
        )}
      </div>

      <div className="result__actions">
        <button className="again-btn" type="button" onClick={onAgain}>
          <span aria-hidden="true">🎲</span>
          DECIDI DI NUOVO
        </button>
        <CallButton />
      </div>
    </div>
  )
}
