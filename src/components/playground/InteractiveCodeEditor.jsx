import Editor from '@monaco-editor/react';

const code = `const system = new AIVerseLab({
  concept: "transformer",
  visualize: ["tokens", "attention", "kv-cache"],
  controls: { temperature: 0.72, topP: 0.9 }
});

await system.simulate("How does attention route meaning?");`;

export function InteractiveCodeEditor() {
  return (
    <div className="neo-panel overflow-hidden p-4">
      <h3 className="mb-3 text-lg font-bold text-text">Interactive Code Editor</h3>
      <div className="overflow-hidden rounded-neo shadow-neo-inset">
        <Editor
          height="260px"
          defaultLanguage="javascript"
          value={code}
          options={{ readOnly: true, minimap: { enabled: false }, fontFamily: 'JetBrains Mono', fontSize: 13, lineNumbersMinChars: 3 }}
        />
      </div>
    </div>
  );
}
