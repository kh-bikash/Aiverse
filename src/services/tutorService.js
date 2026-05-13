export function createTutorReply(prompt) {
  if (!prompt.trim()) {
    return 'Choose a concept and I will map it into tokens, diagrams, and a practice path.';
  }

  return `Visual path for "${prompt}": start with intuition, inspect the architecture, tune the controls, then explain the behavior back with a diagram.`;
}
