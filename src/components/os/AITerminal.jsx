import { Terminal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { terminalCommands } from '../../data/osRoutes.js';
import { useAiverseStore } from '../../store/useAiverseStore.js';

export function AITerminal() {
  const [command, setCommand] = useState('');
  const { terminalHistory, runTerminalCommand } = useAiverseStore();
  const suggestions = useMemo(() => {
    const value = command.trim().toLowerCase();
    return terminalCommands.filter((item) => item.command.includes(value)).slice(0, 4);
  }, [command]);

  function onSubmit(event) {
    event.preventDefault();
    const match = terminalCommands.find((item) => item.command === command.trim().toLowerCase());
    runTerminalCommand(command || 'help', match?.output || 'Command routed to AI tutor. Try simulate transformer, launch rag-lab, visualize embeddings, or spawn agent team.');
    setCommand('');
  }

  return (
    <div className="neo-panel p-5">
      <div className="mb-4 flex items-center gap-3">
        <span className="neo-inset grid h-11 w-11 place-items-center text-primary">
          <Terminal aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">AI Terminal</p>
          <h2 className="text-2xl font-bold text-text">Command-line learning engine</h2>
        </div>
      </div>
      <div className="neo-inset max-h-64 overflow-auto p-4 font-mono text-xs leading-6">
        {terminalHistory.map((item, index) => (
          <div key={`${item.command}-${index}`} className="mb-3">
            <p className="text-primary">&gt; {item.command}</p>
            <p className="text-text/72">{item.output}</p>
          </div>
        ))}
      </div>
      <form className="mt-4 grid gap-3" onSubmit={onSubmit}>
        <label className="sr-only" htmlFor="ai-terminal-command">AI terminal command</label>
        <input
          id="ai-terminal-command"
          className="rounded-neo bg-surface px-4 py-3 font-mono text-sm shadow-neo-inset"
          value={command}
          onChange={(event) => setCommand(event.target.value)}
          placeholder="simulate transformer"
        />
        <div className="flex flex-wrap gap-2">
          {suggestions.map((item) => (
            <button key={item.command} type="button" className="neo-button bg-surface px-3 py-2 font-mono text-[11px] font-bold text-primary" onClick={() => setCommand(item.command)}>
              {item.command}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}
