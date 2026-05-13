import { Check, X } from 'lucide-react';
import { quizBank } from '../../data/aiverseData.js';
import { useAiverseStore } from '../../store/useAiverseStore.js';

export function AdaptiveQuiz() {
  const { quizAnswers, answerQuiz } = useAiverseStore();
  const score = quizBank.filter((question) => quizAnswers[question.id] === question.answer).length;

  return (
    <div className="neo-panel p-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">Adaptive Assessment</p>
          <h3 className="mt-2 text-2xl font-bold text-text">AI concept checkpoint</h3>
        </div>
        <div className="neo-inset px-4 py-3 font-mono text-sm font-bold text-primary">
          Score {score}/{quizBank.length}
        </div>
      </div>
      <div className="grid gap-4">
        {quizBank.map((question) => {
          const selected = quizAnswers[question.id];
          const isCorrect = selected === question.answer;
          return (
            <article key={question.id} className="neo-inset p-4">
              <h4 className="font-bold text-text">{question.question}</h4>
              <div className="mt-4 grid gap-2 md:grid-cols-3">
                {question.options.map((option) => {
                  const isSelected = selected === option;
                  return (
                    <button
                      key={option}
                      className={`neo-button min-h-12 bg-surface px-3 py-2 text-left font-mono text-xs font-bold ${
                        isSelected ? 'neo-pressed text-primary' : 'text-text'
                      }`}
                      onClick={() => answerQuiz(question.id, option)}
                      aria-pressed={isSelected}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {selected && (
                <p className={`mt-4 flex items-start gap-2 font-mono text-xs leading-6 ${isCorrect ? 'text-success' : 'text-danger'}`}>
                  {isCorrect ? <Check aria-hidden="true" size={16} /> : <X aria-hidden="true" size={16} />}
                  {question.explanation}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
