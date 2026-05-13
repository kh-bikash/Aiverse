import { useState } from 'react';
import { Send } from 'lucide-react';
import { tutorMessages } from '../../data/aiverseData.js';
import { createTutorReply } from '../../services/tutorService.js';

export function AIChatTutor() {
  const [messages, setMessages] = useState(tutorMessages);
  const [input, setInput] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    const next = input.trim();
    setMessages((current) => [...current, { role: 'student', text: next || 'Build my learning path.' }, { role: 'mentor', text: createTutorReply(next) }]);
    setInput('');
  }

  return (
    <div className="neo-panel grid h-full min-h-[420px] grid-rows-[auto_1fr_auto] p-5">
      <div>
        <h3 className="text-xl font-bold text-text">AI Mentor</h3>
        <p className="font-mono text-xs text-text/70">visual explanations, quizzes, code notes</p>
      </div>
      <div className="mt-4 grid content-start gap-3 overflow-auto pr-1">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`max-w-[88%] rounded-neo p-3 font-mono text-xs leading-6 shadow-neo-soft ${
              message.role === 'mentor' ? 'bg-surface text-text' : 'ml-auto bg-primary text-secondary'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form className="mt-4 flex gap-2" onSubmit={onSubmit}>
        <label className="sr-only" htmlFor="mentor-input">
          Ask the AI mentor
        </label>
        <input
          id="mentor-input"
          className="min-w-0 flex-1 rounded-neo bg-surface px-4 py-3 font-mono text-sm shadow-neo-inset"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about LoRA, RAG, agents..."
        />
        <button className="neo-button grid w-12 place-items-center bg-primary text-secondary" aria-label="Send message">
          <Send aria-hidden="true" size={18} />
        </button>
      </form>
    </div>
  );
}
