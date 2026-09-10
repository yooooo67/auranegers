export function QuestionScreen({
  categoryLabel,
  question,
  index,
  totalHint,
  onSelect,
  onBack,
}) {
  return (
    <div className="screen question" key={question.id}>
      <header className="topbar">
        <button className="text-btn" type="button" onClick={onBack}>
          Indietro
        </button>
        <span className="topbar__category">{categoryLabel}</span>
        <span className="topbar__spacer" />
      </header>

      <div className="progress" aria-hidden="true">
        {Array.from({ length: totalHint }, (_, i) => (
          <span key={i} className={`progress__dot ${i <= index ? 'is-on' : ''}`} />
        ))}
      </div>

      <div className="question__body">
        <p className="question__kicker">Domanda {index + 1}</p>
        <h2 className="question__title">{question.text}</h2>
        <div className="choice-list">
          {question.choices.map((choice) => (
            <button
              key={choice.id}
              className="choice-card"
              type="button"
              onClick={() => onSelect(choice.id)}
            >
              {choice.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
